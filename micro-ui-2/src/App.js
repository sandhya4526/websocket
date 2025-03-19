import { useState } from "react";
import useWebSocket from "react-use-websocket";

const SOCKET_URL = "ws://localhost:8080";

const MicroUI2 = () => {
  const [receivedMessage, setReceivedMessage] = useState("");

  useWebSocket(SOCKET_URL, {
    share: true,
    onMessage: async (event) => {
      if (event.data instanceof Blob) {
        const text = await event.data.text();
        setReceivedMessage(text);
      } else {
        setReceivedMessage(event.data);
      }
    },
  });

  return (
    <div>
      <h2>Micro UI 2 (Receiver)</h2>
      <p>Received: {receivedMessage}</p>
    </div>
  );
};

export default MicroUI2;
