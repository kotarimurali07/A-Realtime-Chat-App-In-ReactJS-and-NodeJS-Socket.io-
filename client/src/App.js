import React, { useState } from "react";
import "./App.css";
import io from "socket.io-client";
import Chats from "../src/components/Chats";
const socket = io.connect("http://localhost:3001");
const App = () => {
  const [userName, setUserName] = useState("");
  const [roomId, setRoomID] = useState("");
  const [showChat, setShowChat] = useState(false);
  const joinRoom = () => {
    if (userName !== "" && roomId !== "") {
      socket.emit("join_room", roomId);
      setShowChat(true);
    }
  };
  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h1>JOIN A CHART</h1>
          <input
            type="text"
            placeholder="Username..."
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="text"
            placeholder="RoomDI..."
            value={roomId}
            onChange={(e) => setRoomID(e.target.value)}
          />
          <button onClick={joinRoom}>+</button>
        </div>
      ) : (
        <Chats socket={socket} userName={userName} roomId={roomId} />
      )}
    </div>
  );
};

export default App;
