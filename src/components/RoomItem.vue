<template>
  <div class=" w-[20rem] rounded relative shadow-3xl">
    <img :src="room.url" class="h-60 object-cover	w-full" />
    <div class="p-4">
    <h3 class=" mb-2 font-semibold text-white bg-blue-500 inline-block py-2 px-4 rounded">{{ room.title }}</h3>
    <p>{{ room.description }}</p>
    <BaseButton v-if="!room.isBoughtRoom" @click="buyItem(room.id)">Buy It!</BaseButton>
  </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "../UI/BaseButton.vue";
import axios from "axios";

defineProps(["room"]);

function buyItem(id: number) {
  axios.patch("http://localhost:3000/data/" + id, {
     isBought: true,
  })
}

</script>

<style scoped>

</style>
