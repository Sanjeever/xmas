<template>
  <div class="flex-column center v-w-h">
    <Snowman />
    <h1>🎄 Merry Christmas</h1>
  </div>
</template>

<script setup lang="ts">
import { Howl } from "howler";
let sound: Howl = new Howl({
  src: [
    "https://files-1251985639.cos.ap-shanghai.myqcloud.com/Rook1e%2CJ'san%20-%20Have%20Yourself%20a%20Merry%20Little%20Christmas%20(feat.%20j'san).mp3",
  ],
  html5: true,
  autoplay: true,
  loop: true,
});
onMounted(() => {
  sound.play();
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
