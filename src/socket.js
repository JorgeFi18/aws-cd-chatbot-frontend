import { io } from "socket.io-client";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";
import { addMessage, setLoading } from "./store";
import { setChatbotSession } from "./utils/session";

let socket;

export const initSocket = () => {
  let sessionId = Cookies.get("sessionId");
  if (!sessionId) {
    sessionId = uuidv4();
    setChatbotSession(sessionId);
  }
  socket = io(import.meta.env.VITE_SOCKET_URL, {
    query: {
      sessionId,
    }
  });
  socket.on("connect", () => {
    addMessage({
      sessionId: sessionId,
      sender: "chatbot",
      content: "Hola, como puedo ayudarte 😊"
    });
  });
  socket.on("new-message", (message) => {
    if (message.sender === "chatbot") {
      setLoading(false);
    }
    addMessage(message);
  });
}

export const sendMessage = (content) => {
  socket.emit("user-message", content);
}