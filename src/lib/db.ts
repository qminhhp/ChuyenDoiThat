import { Pool } from "pg";

// Cấu hình kết nối PostgreSQL
const pool = new Pool({
  user: process.env.PGUSER || "postgres",
  host: process.env.PGHOST || "localhost",
  database: process.env.PGDATABASE || "fraudguard",
  password: process.env.PGPASSWORD || "password",
  port: parseInt(process.env.PGPORT || "5432"),
});

// Kiểm tra kết nối
pool.on("connect", () => {
  console.log("Connected to PostgreSQL database");
});

pool.on("error", (err) => {
  console.error("PostgreSQL connection error:", err);
});

// Hàm truy vấn cơ sở dữ liệu
export const query = async (text: string, params?: any[]) => {
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
export const initDatabase = async () => {
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

    console.log("Database initialized successfully");
  } catch (error) {
    console.error("Database initialization error:", error);
    throw error;
  }
};
