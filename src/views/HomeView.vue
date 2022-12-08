<template>
  <div class="flex-column center v-w-h">
    <Snowman />
    <h1>🎄 Merry Christmas</h1>
  </div>
</template>

<script setup lang="ts">
import { sound } from "@/config/howler";
onMounted(() => {
  const isEnableAutoplay = () => {
    const context = new AudioContext();
    if (context.state === "running") {
      return true;
    }
    return false;
  };
  if (isEnableAutoplay() && document.hasFocus()) {
    sound.play();
  } else {
    window.isFirstClick = true;
    window.addEventListener("click", () => {
      console.log(window.isFirstClick);
      if (window.isFirstClick) {
        sound.play();
        window.isFirstClick = false;
      }
    });
  }
});

onBeforeUnmount(() => {
  sound.stop();
});
</script>

<style scoped>
h1 {
  font-family: Helvetica, sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  color: #f58653;
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
