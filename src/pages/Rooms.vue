<template>
  <div class="flex flex-wrap gap-20 max-w-[70rem] my-8 mx-auto">
   <RoomItem
      v-for="room in store.rooms"
      :key="room.id"
      :room="room"
    />
  </div>
</template>

<script setup lang="ts">

import RoomItem from "../components/RoomItem.vue";
import { useRoomStore } from "../stores/RoomStore";
const store = useRoomStore();
store.getRooms();


</script>

<style>


</style>
