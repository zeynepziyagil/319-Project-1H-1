import React from "react";
import Messages from "./Messages";

function showMessage(message) {
    return (
        <div className={message.sender === "You" ? "box sb5" : "box1 sb6"} key={message.id}>{message.sender}: {message.message}</div>
    );
}

function Chat() {
    return (
        <div>
            {Messages.map(showMessage)}
        </div>
    );
}

export default Chat;