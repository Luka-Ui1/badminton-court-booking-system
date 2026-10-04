import { useState } from "react";

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
    <div>
      <h1>ระบบจองคิวสนามกีฬาแบดมินตัน</h1>
      <p>ณ อาคารสงวนเสริมศรี</p>

      <h2>จองสนาม</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>ชื่อผู้จอง</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="กรอกชื่อผู้จอง"
            required
          />
        </div>

        <br />

        <div>
          <label>สนาม</label>
          <br />
          <select
            value={court}
            onChange={(event) => setCourt(event.target.value)}
          >
            <option>สนาม 1</option>
            <option>สนาม 2</option>
            <option>สนาม 3</option>
            <option>สนาม 4</option>
          </select>
        </div>

        <br />

        <div>
          <label>วันที่</label>
          <br />
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>เวลาเริ่มต้น</label>
          <br />
          <input
            type="time"
            value={startTime}
            onChange={(event) => setStartTime(event.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>เวลาสิ้นสุด</label>
          <br />
          <input
            type="time"
            value={endTime}
            onChange={(event) => setEndTime(event.target.value)}
            required
          />
        </div>

        <br />

        <button type="submit">จองสนาม</button>
      </form>
    </div>
  );
}

export default App;
