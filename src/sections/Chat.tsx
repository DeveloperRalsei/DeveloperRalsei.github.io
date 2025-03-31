import { Button, Stack } from "@mantine/core";
import { useRef, useState, useEffect } from "react";

export default function Chat() {
    const ws = useRef<WebSocket | null>(null);
    const [username, setUsername] = useState<string | null>(null);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        setUsername(localStorage.getItem("username"));

        if (!username) {
        }
    }, []);

    const handleConnect = () => {
        ws.current = new WebSocket("ws://localhost:8081");

        ws.current.onopen = () => {
            console.log("Connected");
            setIsConnected(true); // Bağlantı açıldığında durumu güncelle
        };

        ws.current.onmessage = (message) => {
            console.log("Message from server:", message.data);
        };

        ws.current.onclose = () => {
            console.log("Disconnected");
            setIsConnected(false);
        };

        ws.current.onerror = (error) => {
            console.error("WebSocket Error:", error);
        };
    };

    const mockData = [
        {
            meow: "mrow",
        },
        {
            nya: "pet me uwu",
        },
    ];

    const sendMessage = () => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(JSON.stringify(mockData));
        }
    };

    return (
        <Stack>
            <Button onClick={handleConnect}>Connect</Button>
            <Button onClick={() => ws.current!.close()} color="red">
                Disconnect
            </Button>
            {isConnected && <Button onClick={sendMessage}>Send Message</Button>}
        </Stack>
    );
}
