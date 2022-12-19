<template>
  <div class="container">
    <ul class="g-wrap">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
/* this list see : https://emojixd.com/pocket/christmas */
$expression: "🎅", "🤶", "🎄", "🔔", "🦌", "🛷", "🧦", "🍎", "⛄", "☃️", "🎁",
  "🍪", "🍷", "🎊", "🎉", "🍩", "🥧";

.container {
  display: block;
}

/* see : https://github.com/chokcoco/iCSS/issues/198 */
.g-wrap:nth-child(2) li {
  opacity: 0.1;
}

.g-wrap {
  li {
    list-style: none;
  }
  position: relative;
  margin: auto;
  width: 50px;
  height: 50px;

  &::before {
    content: "🎁";
    position: static;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    line-height: 50px;
    font-size: 24px;
    text-align: center;
    z-index: -1;
    user-select: none;
    border-radius: 50%;
    transition: 0.1s;
  }
  &:active::before {
    transform: scale(1.1);
  }
}

@for $i from 1 to 51 {
  li:nth-child(#{$i}) {
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    transform: rotate(#{random() * 80 - 40}deg);
    animation: move
      #{random() *
      2500 +
      1500}ms
      infinite
      #{random() *
      4000 /
      -1000}s
      cubic-bezier(0.46, 0.53, 0.51, 0.62);
    opacity: 0;
    cursor: pointer;
    transition: 1.5s opacity 0.8s;
    user-select: none;

    &::before {
      content: nth($expression, random(length($expression)));
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50px;
      height: 50px;
      font-size: 50px;
    }
  }

  li:active {
    transition: 0.1s opacity;
    opacity: 1 !important;
  }
}

@keyframes move {
  100% {
    transform: rotate(0) translate(0, -250px);
  }
}

p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(calc(-50% - 140px), calc(-50% + 50px));
  color: #fff;
  font-size: 36px;
}

p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(calc(-50% - 100px), calc(-50% + 50px));
  color: 40px;
  user-select: none;
}
</style>
