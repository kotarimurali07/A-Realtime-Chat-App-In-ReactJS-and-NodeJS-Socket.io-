import React, { useState } from "react";
import Presentation from "./Presentation";
const Container = ({ socket, userName, roomId }) => {
  console.log(roomId, socket, userName);
  return (
    <div>
      <Presentation roomId={roomId} socket={socket} userName={userName} />
    </div>
  );
};

export default Container;
