import http from "http";
import app from "./app";
import { Server } from "socket.io";

const server = http.createServer(app);

const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("Novo cliente conectado: " + socket.id);

  socket.on("disconnect", () => {
    console.log("Cliente desconectado: " + socket.id);
  });
});

const PORT = process.env.PORT || 8080;

server.listen(PORT);

export { io };