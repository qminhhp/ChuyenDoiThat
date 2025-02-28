# Hướng dẫn triển khai hệ thống FraudGuard lên CPanel với PostgreSQL

## Yêu cầu hệ thống

- Hosting CPanel với hỗ trợ Node.js
- PostgreSQL database
- Quyền truy cập SSH (tùy chọn, nhưng khuyến nghị)

## Bước 1: Chuẩn bị cơ sở dữ liệu PostgreSQL

1. Đăng nhập vào CPanel của bạn
2. Tìm và mở phần "PostgreSQL Databases"
3. Tạo cơ sở dữ liệu mới và người dùng với quyền đầy đủ
4. Ghi lại thông tin kết nối:
   - Tên cơ sở dữ liệu
   - Tên người dùng
   - Mật khẩu
   - Host (thường là localhost hoặc địa chỉ IP của máy chủ)
   - Port (mặc định là 5432)

## Bước 2: Chuẩn bị mã nguồn

1. Tạo file `.env` trong thư mục gốc của dự án với nội dung sau:

```
DATABASE_URL=postgresql://username:password@host:port/database
NODE_ENV=production
PORT=8080
```

2. Cập nhật file `vite.config.ts` để đảm bảo build đúng cho môi trường production:

```typescript
export default defineConfig({
  // Các cấu hình khác...
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
  },
})
```

3. Tạo file `server.js` trong thư mục gốc để phục vụ ứng dụng đã build:

```javascript
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// Phục vụ các file tĩnh từ thư mục dist
app.use(express.static(path.join(__dirname, 'dist')));

// Xử lý tất cả các route khác và trả về index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

4. Cập nhật `package.json` để thêm script start cho production:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "start": "node server.js"
}
```

## Bước 3: Kết nối PostgreSQL

1. Cài đặt thư viện cần thiết:

```bash
npm install pg express dotenv
```

2. Tạo file `src/api/index.js` để xử lý API:

```javascript
const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const router = express.Router();

// Kết nối PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// API endpoint để lấy dữ liệu hoạt động đáng ngờ
router.get('/suspicious-activities', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT a.*, u.ip_address, u.location, u.user_agent 
      FROM activities a 
      JOIN users u ON a.user_id = u.id 
      ORDER BY a.created_at DESC
    `);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching suspicious activities:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Thêm các API endpoint khác ở đây

module.exports = router;
```

3. Cập nhật `server.js` để sử dụng API:

```javascript
const express = require('express');
const path = require('path');
const apiRoutes = require('./src/api');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// API routes
app.use('/api', apiRoutes);

// Phục vụ các file tĩnh từ thư mục dist
app.use(express.static(path.join(__dirname, 'dist')));

// Xử lý tất cả các route khác và trả về index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

## Bước 4: Build ứng dụng

1. Build ứng dụng React:

```bash
npm run build
```

## Bước 5: Triển khai lên CPanel

### Phương pháp 1: Sử dụng File Manager

1. Đăng nhập vào CPanel
2. Mở File Manager
3. Điều hướng đến thư mục public_html hoặc thư mục bạn muốn triển khai
4. Tải lên tất cả các file từ thư mục dist và các file cần thiết khác (server.js, package.json, .env, node_modules)

### Phương pháp 2: Sử dụng SSH (khuyến nghị)

1. Kết nối SSH đến máy chủ CPanel
2. Điều hướng đến thư mục bạn muốn triển khai
3. Clone repository từ Git hoặc tải lên mã nguồn bằng SCP/SFTP
4. Cài đặt dependencies:

```bash
npm install --production
```

5. Build ứng dụng:

```bash
npm run build
```

6. Khởi động server:

```bash
npm start
```

## Bước 6: Cấu hình Node.js Application trong CPanel

1. Trong CPanel, tìm và mở "Setup Node.js App"
2. Tạo ứng dụng Node.js mới:
   - Chọn thư mục chứa ứng dụng
   - Chọn phiên bản Node.js (khuyến nghị v16 trở lên)
   - Đặt NPM Start Command là "npm start"
   - Lưu cấu hình

## Bước 7: Cấu hình Proxy để chạy ứng dụng Node.js

1. Trong CPanel, tìm và mở "Apache Configuration" hoặc ".htaccess Editor"
2. Thêm cấu hình proxy để chuyển tiếp yêu cầu đến ứng dụng Node.js:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteRule ^(.*)$ http://localhost:8080/$1 [P,L]
</IfModule>
```

## Bước 8: Khởi động ứng dụng

1. Trong CPanel, tìm và mở "Setup Node.js App"
2. Tìm ứng dụng của bạn và nhấp vào "Start App"

## Bước 9: Cấu hình PM2 để giữ ứng dụng chạy liên tục (tùy chọn)

1. Cài đặt PM2 toàn cục:

```bash
npm install -g pm2
```

2. Khởi động ứng dụng với PM2:

```bash
pm2 start server.js --name "fraudguard"
```

3. Cấu hình PM2 để khởi động lại khi máy chủ khởi động lại:

```bash
pm2 startup
pm2 save
```

## Bước 10: Cấu hình SSL (khuyến nghị)

1. Trong CPanel, tìm và mở "SSL/TLS Status"
2. Cài đặt chứng chỉ SSL cho tên miền của bạn

## Bước 11: Kiểm tra và giám sát

1. Truy cập trang web của bạn để đảm bảo mọi thứ hoạt động bình thường
2. Kiểm tra logs trong CPanel hoặc thông qua SSH để phát hiện lỗi
3. Thiết lập giám sát để nhận thông báo khi có sự cố

## Xử lý sự cố

### Lỗi kết nối cơ sở dữ liệu

- Kiểm tra thông tin kết nối trong file .env
- Đảm bảo người dùng PostgreSQL có quyền truy cập đầy đủ
- Kiểm tra tường lửa và cấu hình pg_hba.conf

### Ứng dụng không khởi động

- Kiểm tra logs trong CPanel hoặc thông qua SSH
- Đảm bảo port không bị sử dụng bởi ứng dụng khác
- Kiểm tra quyền truy cập file và thư mục

### Lỗi 502 Bad Gateway

- Kiểm tra xem ứng dụng Node.js có đang chạy không
- Kiểm tra cấu hình proxy trong .htaccess
- Đảm bảo port được cấu hình đúng

## Bảo trì và cập nhật

1. Sao lưu cơ sở dữ liệu thường xuyên
2. Cập nhật dependencies để đảm bảo bảo mật
3. Giám sát hiệu suất và tài nguyên sử dụng
