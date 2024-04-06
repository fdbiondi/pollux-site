<template>
  <div
    ref="wrapper"
    class="relative overflow-hidden"
    @mousemove="handleMouseMove"
    @mouseover="active = true"
    @mouseleave="active = false"
  >
    <slot />

    <div
      ref="cursor"
      :class="{ cursor: active }"
    />
  </div>
</template>

<script setup>
import { ref, shallowRef } from 'vue';

const cursor = ref(null);
const wrapper = ref(null);
const active = shallowRef(false);

function handleMouseMove(event) {
  if (!active.value) {
    return;
  }

  const rect = wrapper.value.getBoundingClientRect();
  const diffX = event.clientX - rect.left;
  const diffY = event.clientY - rect.top;

  cursor.value.style = `--x: ${diffX}px; --y: ${diffY}px;`;
}
</script>

<style scoped>
.cursor {
  position: absolute;
  width: 14rem;
  aspect-ratio: 1/1;
  background-color: var(--color-primary);
  border-radius: 50%;
  top: var(--y);
  left: var(--x);
  transform: translate(-50%, -50%);
  filter: blur(10rem) brightness(120%);
  z-index: -1;
}
</style>
