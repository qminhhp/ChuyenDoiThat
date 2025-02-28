const { Pool } = require("pg");
require("dotenv").config();

// Cấu hình kết nối PostgreSQL
const pool = new Pool({
  user: process.env.PGUSER || "postgres",
  host: process.env.PGHOST || "localhost",
  database: process.env.PGDATABASE || "fraudguard",
  password: process.env.PGPASSWORD || "password",
  port: parseInt(process.env.PGPORT || "5432"),
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});

// Kiểm tra kết nối
pool.on("connect", () => {
  console.log("Connected to PostgreSQL database");
});

pool.on("error", (err) => {
  console.error("PostgreSQL connection error:", err);
});

// Hàm truy vấn cơ sở dữ liệu
const query = async (text, params) => {
  try {
    const start = Date.now();
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log("Executed query", { text, duration, rows: res.rowCount });
    return res;
  } catch (error) {
    console.error("Database query error:", error);
    throw error;
  }
};

// Hàm khởi tạo cơ sở dữ liệu
const initDatabase = async () => {
  try {
    // Tạo bảng users nếu chưa tồn tại
    await query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        ip_address VARCHAR(50) NOT NULL,
        user_agent TEXT,
        location VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Tạo bảng activities nếu chưa tồn tại
    await query(`
      CREATE TABLE IF NOT EXISTS activities (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        website VARCHAR(255) NOT NULL,
        suspicious_types TEXT[],
        confidence_score FLOAT NOT NULL,
        status VARCHAR(20) DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        expires_at TIMESTAMP
      )
    `);

    // Tạo bảng thresholds nếu chưa tồn tại
    await query(`
      CREATE TABLE IF NOT EXISTS thresholds (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        current_value FLOAT NOT NULL,
        default_value FLOAT NOT NULL,
        min_value FLOAT NOT NULL,
        max_value FLOAT NOT NULL,
        unit VARCHAR(50),
        severity VARCHAR(20),
        category VARCHAR(50),
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Thêm dữ liệu mẫu cho bảng thresholds nếu trống
    const thresholdsResult = await query("SELECT COUNT(*) FROM thresholds");
    if (parseInt(thresholdsResult.rows[0].count) === 0) {
      await query(`
        INSERT INTO thresholds (name, description, current_value, default_value, min_value, max_value, unit, severity, category) VALUES
        ('Nhiều lượt chuyển đổi nhanh', 'Số lượt chuyển đổi tối đa trong một khoảng thời gian ngắn từ cùng một người dùng', 5, 5, 1, 20, 'lượt/phút', 'high', 'conversion'),
        ('Thời gian giữa các lượt chuyển đổi', 'Thời gian tối thiểu giữa các lượt chuyển đổi từ cùng một người dùng', 10, 10, 1, 60, 'giây', 'medium', 'conversion'),
        ('Tổng số lượt chuyển đổi trong ngày', 'Số lượng tối đa các lượt chuyển đổi từ cùng một người dùng trong một ngày', 20, 20, 5, 100, 'lượt/ngày', 'low', 'conversion'),
        ('Khoảng cách địa lý bất thường', 'Khoảng cách tối đa giữa hai địa điểm truy cập liên tiếp từ cùng một người dùng', 500, 500, 100, 1000, 'km', 'high', 'location'),
        ('Số quốc gia truy cập', 'Số lượng quốc gia khác nhau mà một người dùng truy cập trong một ngày', 3, 3, 1, 10, 'quốc gia', 'medium', 'location'),
        ('Phát hiện VPN/Proxy', 'Mức độ tin cậy tối thiểu để xác định một kết nối đang sử dụng VPN hoặc proxy', 75, 75, 50, 100, '%', 'medium', 'location'),
        ('Tốc độ nhấp chuột', 'Số lần nhấp chuột tối đa trong một khoảng thời gian ngắn để phát hiện bot', 15, 15, 5, 50, 'nhấp/phút', 'high', 'behavior'),
        ('Số phiên đăng nhập', 'Số lượng phiên đăng nhập tối đa từ cùng một người dùng trong một ngày', 10, 10, 3, 30, 'phiên/ngày', 'low', 'behavior'),
        ('Tạo nhiều tài khoản', 'Số lượng tài khoản tối đa được tạo từ cùng một địa chỉ IP trong một ngày', 3, 3, 1, 10, 'tài khoản/ngày', 'high', 'behavior')
      `);
    }

    console.log("Database initialized successfully");
  } catch (error) {
    console.error("Database initialization error:", error);
    throw error;
  }
};

module.exports = {
  query,
  initDatabase,
  pool,
};
