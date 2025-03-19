import { useState } from "react";
import useWebSocket from "react-use-websocket";

const SOCKET_URL = "ws://localhost:8080";

const MicroUI1 = () => {
  const [message, setMessage] = useState("");
  const { sendMessage } = useWebSocket(SOCKET_URL, { share: true });

  return (
    <div>
      <h2>Micro UI 1 (Sender)</h2>
      <input
        type="text"
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={() => sendMessage(message)}>Send</button>
    </div>
  );
};

export default MicroUI1;
