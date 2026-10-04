import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>ระบบจองคิวสนามกีฬาแบดมินตัน</h1>
      <p>ณ อาคารสงวนเสริมศรี</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
