<template>
  <div class="w-[20rem] rounded relative shadow-3xl rounded overflow-hidden	">
    <img :src="boughtItem.url" class="h-60 object-cover	w-full"/>
  <div class="p-4">
    <h3 class="font-semibold bg-blue-500 inline-block py-2 px-4 mb-2 text-white rounded">{{ boughtItem.title }}</h3>
    <p>{{ boughtItem.description }}</p>
    <BaseButton @click="handleDelete">Cancel purchase</BaseButton>
  </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import BaseButton from "../UI/BaseButton.vue";
const props = defineProps(["boughtItem"]);
import { ref } from "vue";
const id = ref(props.boughtItem.id);

function handleDelete() {
  axios.patch(`http://localhost:3000/data/${id.value}`, {
    isBought: false,
  });
}
</script>

<style scoped>

</style>
