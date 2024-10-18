<script setup>
import ChatbotMessage from './ChatbotMessage.vue';
import { store } from '../store';
</script>

<template>
  <section class="relative flex-1 p-4 bg-slate-100 overflow-y-auto">
    <ChatbotMessage v-for="message in store.messages" :message="message" />
    <div
      v-if="store.loading"
      class="flex items-center gap-[5px] ml-[14px]"
    >
      <FontAwesomeIcon :style="{color: 'rgb(29 78 216)'}" icon="gear" size="md" spin />
      <p class="text-blue-700">Generando respuesta</p>
    </div>
    <div id="scroll-to-bottom"></div>
  </section>
</template>