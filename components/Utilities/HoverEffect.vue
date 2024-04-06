<template>
  <div
    ref="wrapper"
    class="relative overflow-hidden"
    :class="{ wrapper: active }"
    @mousemove="handleMouseMove"
    @mouseover="active = true"
    @mouseleave="active = false"
  >
    <div class="h-full">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, shallowRef } from 'vue';

const wrapper = ref(null);
const active = shallowRef(false);

function handleMouseMove(event) {
  if (!active.value) {
    return;
  }

  const rect = wrapper.value.getBoundingClientRect();
  const diffX = event.pageX - rect.x;
  const diffY = event.pageY - rect.y;

  wrapper.value.style = `--x: ${diffX}px; --y: ${diffY}px;`;
}
</script>

<style scoped>
.wrapper::before {
  background: radial-gradient(
    250px circle at var(--x) var(--y),
    var(--color-primary) 0,
    transparent 100%
  );
  content: '';
  display: block;
  filter: blur(10rem) brightness(120%);
  height: calc(100% + 4px);
  left: -2px;
  position: absolute;
  top: -2px;
  width: calc(100% + 4px);
  will-change: background;
  z-index: -1;
}
</style>
