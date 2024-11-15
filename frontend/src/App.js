import React, { useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/data");
      console.log(response.data);

      // setMessage(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const sendData = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/process", {
        electricity: 100,
        gas: 200,
        fuel: 300,
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div>
      <h1>React + Flask App</h1>
      <button onClick={fetchData}>Fetch Data</button>
      <button onClick={sendData}>Send Data</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
