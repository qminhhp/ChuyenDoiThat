const express = require("express");
const { Pool } = require("pg");
require("dotenv").config();

const router = express.Router();

// Kết nối PostgreSQL
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

// API endpoint để lấy dữ liệu hoạt động đáng ngờ
router.get("/suspicious-activities", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT a.*, u.ip_address, u.location, u.user_agent 
      FROM activities a 
      JOIN users u ON a.user_id = u.id 
      ORDER BY a.created_at DESC
    `);
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching suspicious activities:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// API endpoint để cập nhật trạng thái hoạt động
router.put("/suspicious-activities/:id", async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!["pending", "confirmed", "dismissed"].includes(status)) {
    return res.status(400).json({ error: "Invalid status" });
  }

  try {
    const result = await pool.query(
      "UPDATE activities SET status = $1 WHERE id = $2 RETURNING *",
      [status, id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Activity not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error updating activity status:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// API endpoint để lấy cấu hình ngưỡng phát hiện
router.get("/thresholds", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM thresholds ORDER BY category, name",
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching thresholds:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// API endpoint để cập nhật cấu hình ngưỡng phát hiện
router.put("/thresholds/:id", async (req, res) => {
  const { id } = req.params;
  const { current_value } = req.body;

  try {
    const result = await pool.query(
      "UPDATE thresholds SET current_value = $1, updated_at = NOW() WHERE id = $2 RETURNING *",
      [current_value, id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Threshold not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error updating threshold:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// API endpoint để đặt lại tất cả các ngưỡng về giá trị mặc định
router.post("/thresholds/reset", async (req, res) => {
  try {
    const result = await pool.query(
      "UPDATE thresholds SET current_value = default_value, updated_at = NOW() RETURNING *",
    );

    res.json(result.rows);
  } catch (error) {
    console.error("Error resetting thresholds:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
