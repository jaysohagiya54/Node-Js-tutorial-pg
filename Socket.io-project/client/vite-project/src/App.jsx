/* eslint-disable no-unused-vars */
import { useEffect, useMemo, useState } from "react";
import React from "react";
import { io } from "socket.io-client";
import {
  Button,
  Container,
  TextField,
  Typography,
  Box,
  Stack,
} from "@mui/material";

function App() {
  const [message, setMessage] = useState("");
  const [socketId, setSocketId] = useState("");
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState("");
  const [roomName, setRoomName] = useState("");

  const socket = useMemo(() => io("http://localhost:3000"), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", { message, room });
    setMessage("");
  };
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected", socket.id);
      setSocketId(socket.id);
    });
    socket.on("recieved-message", (data) => {
      // console.log(data);
      setMessages((messages) => [...messages, data]);
    
    });
    socket.on("welcome", (s) => {
      console.log(s);
    });
  }, []);
  return (
    <Container maxWidth="sm">
      <Box sx={{ height: 400 }} />
      <Typography variant="h6" component="div" gutterBottom>
        {socketId}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          id="outlined-basic"
          label="room name"
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary">
          Join
        </Button>
        <TextField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary">
          Send
        </Button>
      </form>
      <Stack>
      {messages.map((obj, i) => (
    <Typography key={i} variant="h6" component="div" gutterBottom>
      {obj.message}
    </Typography>
  ))}
      </Stack>
    </Container>
  );
}

export default App;
