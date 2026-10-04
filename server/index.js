const express = require("express");
const cors = require("cors");
const { getDbConnection } = require("./db");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Badminton Court Booking API is running",
    project: "ระบบจองคิวสนามกีฬาแบดมินตัน ณ อาคารสงวนเสริมศรี"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK"
  });
});

app.get("/api/courts", async (req, res) => {
  try {
    const db = await getDbConnection();

    const result = await db.request().query(`
      SELECT
        id,
        court_name,
        status
      FROM courts
      ORDER BY id
    `);

    res.json(result.recordset);
  } catch (error) {
    console.error("Error loading courts:", error);

    res.status(500).json({
      message: "ไม่สามารถโหลดข้อมูลสนามได้"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
