import React, { useState } from "react";
import "./index.css";

const Message = (props) => {
  const name = props.name || "UserName";
  const distance = props.distance || "-";
  const message = props.message || "No message";

  return (
    <div
      style={{
        display: "inline-block",
        color: "blue",
        backgroundColor: "lightgray",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <p>
        {name}: {distance} метров от вас
      </p>
      <div>{message}</div>
    </div>
  );
};

export default Message;
