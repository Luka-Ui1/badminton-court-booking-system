import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [court, setCourt] = useState("สนาม 1");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      `จองสนามสำเร็จ\n\nชื่อ: ${name}\nสนาม: ${court}\nวันที่: ${date}\nเวลา: ${startTime} - ${endTime}`
    );
  };

  return (
    <div className="page">
      <div className="container">
        <header className="header">
          <h1>ระบบจองคิวสนามกีฬาแบดมินตัน</h1>
          <p>ณ อาคารสงวนเสริมศรี</p>
        </header>

        <main className="card">
          <h2>จองสนามแบดมินตัน</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">ชื่อผู้จอง</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="กรอกชื่อผู้จอง"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="court">สนาม</label>
              <select
                id="court"
                value={court}
                onChange={(event) => setCourt(event.target.value)}
              >
                <option>สนาม 1</option>
                <option>สนาม 2</option>
                <option>สนาม 3</option>
                <option>สนาม 4</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="date">วันที่</label>
              <input
                id="date"
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="startTime">เวลาเริ่มต้น</label>
                <input
                  id="startTime"
                  type="time"
                  value={startTime}
                  onChange={(event) => setStartTime(event.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="endTime">เวลาสิ้นสุด</label>
                <input
                  id="endTime"
                  type="time"
                  value={endTime}
                  onChange={(event) => setEndTime(event.target.value)}
                  required
                />
              </div>
            </div>

            <button className="booking-button" type="submit">
              จองสนาม
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default App;
