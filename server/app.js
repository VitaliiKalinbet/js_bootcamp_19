const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const history = [];

io.on("connection", (socket) => {
  console.log("User connected");

  socket.emit("connected", history);

  socket.on("chat-message", (message) => {
    history.push(message);

    socket.broadcast.emit("chat-message", message);

    console.log(`Received message - ${JSON.stringify(message)}`);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

http.listen(5000, () => {
  console.log("listening on port 5000");
});

// варианты подписки на событие:
// xyz.addListener;
// xyz.on;
// xyz.listen;
// xyz.scan;

// варианты создания события:
// xyz.emit;
// xyz.send;
// xyz.fire;
