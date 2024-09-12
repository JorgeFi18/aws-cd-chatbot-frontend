<script setup>
import ChatbotHeader from './ChatbotHeader.vue';
import ChatbotMessages from './ChatbotMessages.vue';
import TextBox from './TextBox.vue';
</script>

<template>
  <div id="chatbot" class="flex flex-col w-[100%] md:w-[80%] my-0 md:my-6 mx-[auto] shadow-lg rounded-lg border border-gray-200">
    <ChatbotHeader />
    <ChatbotMessages />
    <TextBox />
  </div>
</template>