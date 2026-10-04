const express = require("express");
const cors = require("cors");

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
