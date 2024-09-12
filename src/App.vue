<script setup>
import { onMounted } from "vue";
import { initSocket } from "./socket";
import Chatbot from "./components/Chatbot.vue";

onMounted(() => {
  initSocket();
});
</script>

<template>
  <Chatbot />
</template>
