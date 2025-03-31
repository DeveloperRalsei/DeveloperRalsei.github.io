import { WebSocketServer } from "ws";
import { createServer } from "http";

const server = createServer();
const wss = new WebSocketServer({ server });

wss.on("connection", (ws, req) => {
    console.log("new client");

    ws.on("error", console.error);
    ws.on("message", (data) => {
        console.log(JSON.parse(data.toString()));
    });
});

server.listen(8081, () => console.log("mrow"));
