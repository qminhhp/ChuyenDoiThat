const express = require("express");
const path = require("path");
const apiRoutes = require("./api");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// API routes
app.use("/api", apiRoutes);

// Phục vụ các file tĩnh từ thư mục dist
app.use(express.static(path.join(__dirname, "../dist")));

// Xử lý tất cả các route khác và trả về index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
