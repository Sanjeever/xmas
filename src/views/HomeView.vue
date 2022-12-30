<template>
  <div class="player" />
  <div flex-column center vwh>
    <Snowman />
    <h1 ref="titleDOM" @click="increaseFontSize" />
    <LikeButton />
  </div>
</template>

<script setup lang="ts">
import { sound } from "@/config/howler";
import isMobile from "is-mobile";
import twemoji from "twemoji";
const titleDOM = $ref<HTMLElement>();
const DEFAULT_FONT_SIZE = 1.8;
const MAX_FONT_SIZE = 2.5;
let fontSize = $ref(DEFAULT_FONT_SIZE);

function increaseFontSize() {
  if (fontSize > MAX_FONT_SIZE) {
    fontSize = DEFAULT_FONT_SIZE;
  }
  fontSize = parseFloat((fontSize + 0.1).toFixed(1));
}

onMounted(() => {
  titleDOM!.textContent = "🎄 Merry Christmas";
  twemoji.parse(titleDOM!);
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
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  color: #ec7671;
  animation: 1.5s ease-in-out upAndDown infinite;
  user-select: none;
  font-size: v-bind(fontSize + "rem");
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
