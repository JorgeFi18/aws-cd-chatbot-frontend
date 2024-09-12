import Cookies from "js-cookie";
import { setSessionId } from "../store";

export const setChatbotSession = (sessionId) => {
  Cookies.set("sessionId", sessionId);
  setSessionId(sessionId);
}