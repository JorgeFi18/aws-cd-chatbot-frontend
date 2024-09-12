<script setup>
import { defineProps, ref } from "vue";

const { message } = defineProps(["message"]);
const isChatbot = ref(message.sender === "chatbot");
</script>

<template>
  <div class="p-2 flex flex-col" :class="{'items-end': !isChatbot}">
    <div class="flex gap-2 items-center" :class="{'flex-row-reverse': !isChatbot}">
      <div
        class="rounded-full w-[34px] h-[34px] flex justify-center items-center"
        :class="[isChatbot ? 'bg-blue-700': 'bg-white']"
      >
        <FontAwesomeIcon :inverse="isChatbot" :icon="isChatbot ? 'robot' : 'user'" size="xs" />
      </div>
      <p class="mt-[5px] text-xs">{{isChatbot ? "AWS Bot" : "Tú"}}</p>
    </div>
    <div
      class="max-w-[40%] p-4 rounded-lg"
      :class="[isChatbot ? 'bg-blue-700 text-white ml-[34px] rounded-tl-none': 'bg-white text-black mr-[34px] rounded-tr-none']"
    >
      {{ message.content }}
    </div>
  </div>
</template>
