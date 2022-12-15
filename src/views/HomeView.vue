<template>
  <div class="player" />
  <div class="flex-column center v-w-h">
    <Snowman />
    <h1>🎄 Merry Christmas</h1>
  </div>
</template>

<script setup lang="ts">
import { sound } from "@/config/howler";
import isMobile from "is-mobile";
onMounted(() => {
  import("@/config/aplayer");
  if (!isMobile()) {
    document.body.addEventListener("click", () => {
      sound.play();
    });
  }
});
</script>

<style scoped>
h1 {
  font-family: Helvetica, sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  color: #ec7671;
  animation: 1.5s ease-in-out upAndDown infinite;
}

@keyframes upAndDown {
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, 8%, 0);
  }
  100% {
    transform: translate3d(0, 0%, 0);
  }
}
</style>
