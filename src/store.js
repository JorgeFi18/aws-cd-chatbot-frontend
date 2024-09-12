import { reactive } from "vue";

export const store = reactive({
  messages: [],
  sessionId: null,
  loading: false
});

export const addMessage = (newMessage) => {
  store.messages.push(newMessage);
}

export const setSessionId = (newSessionId) => {
  store.sessionId = newSessionId;
}

export const setLoading = (newLoadingState) => {
  store.loading = newLoadingState;
}