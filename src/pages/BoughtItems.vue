<template>
  <div
    class="text-3xl text-center mt-12"
    v-if="store.boughtRooms.length === 0"
  >
    You haven't purchased any rooms yet
  </div>
  <div class="flex flex-wrap gap-20 max-w-[70rem] my-8 mx-auto">
   

    <BoughtItem
      v-for="boughtItem in store.boughtRooms"
      :key="boughtItem.id"
      :boughtItem="boughtItem"
      :is-bought-room="true"
    />
  </div>
</template>



<script setup lang="ts">
import {useRoomStore} from "../stores/RoomStore"
import BoughtItem from "../components/BoughtItem.vue";

const store = useRoomStore();

store.getRooms();

console.log(store.boughtRooms)


</script>

<style scoped>

</style>
