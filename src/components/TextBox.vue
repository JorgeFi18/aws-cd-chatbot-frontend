<script setup>
import { ref } from "vue";
import { addMessage } from "../store";
import { sendMessage } from "../socket";
import { setLoading } from "../store";

const text = ref("");

function pushMessage() {
  if (!text.value) {
    return;
  }
  setLoading(true);

  sendMessage(text.value);

  text.value = "";
}
</script>

<template>
  <div class="flex gap-[10px] items-center pr-6">
    <input
      class="p-6 flex-1 outline-none"
      type="text"
      placeholder="Haz alguna consulta"
      @keyup.enter="pushMessage"
      v-model="text"
    />
    <FontAwesomeIcon
      :style="{color: 'rgb(100 116 139)'}"
      @click="pushMessage"
      class="cursor-pointer"
      icon="paper-plane"
      size="lg"
    />
  </div>
</template>