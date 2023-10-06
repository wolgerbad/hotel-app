<template>
  <nav>
    <div class="nav-container flex justify-between items-center max-w-[70rem] mx-auto my-0 min-h-[4rem] text-white">
      <RouterLink
        to="/"
        class="uppercase text-white text-2xl font-semibold no-underline tracking-normal"
        >Five Star Hotel</RouterLink
      >
      <ul class="flex list-none gap-8">
        <li><RouterLink class="no-underline text-xl text-white" to="/">Home</RouterLink></li>
        <li><RouterLink class="no-underline text-xl text-white" to="/rooms">Rooms</RouterLink></li>
        <li>
          <RouterLink
            to="/bought-rooms"
            class="rounded-sm p-1 border-4 border-yellow-500"
            >Purchased Rooms</RouterLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
nav {
  background-color: #0369a1;
}

</style>
