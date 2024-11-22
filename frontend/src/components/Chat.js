import React, { useEffect, useState } from 'react';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const socket = new WebSocket('ws://localhost:8000/ws/chat/');

    useEffect(() => {
        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setMessages((prev) => [...prev, data.message]);
        };

        return () => socket.close();
    }, []);

    return (
        <div>
            {messages.map((msg, index) => (
                <p key={index}>{msg}</p>
            ))}
        </div>
    );
};

export default Chat;
