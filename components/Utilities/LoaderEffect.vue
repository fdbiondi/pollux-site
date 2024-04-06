<template>
  <div
    ref="wrapper"
    class="light-effect relative min-h-screen overflow-hidden"
    @mousemove="onMouseMove"
    @mouseleave="onFocusOut"
  >
    <div
      ref="mouseLight"
      class="mouse-gradient absolute top-0 h-[200px] w-[200px] rounded-full transition-opacity"
    />

    <slot />

    <div
      v-if="loadEffect"
      ref="loaderBar"
      class="loader-bar"
    />
  </div>
</template>
<script setup>
import { onMounted, onBeforeUnmount, ref, toRef } from 'vue';

const props = defineProps({
  target: {
    type: Object,
    default: null,
  },

  loadEffect: {
    type: Boolean,
    default: false,
  },

  maskEffect: {
    type: Boolean,
    default: false,
  },

  focusPoint: {
    type: Boolean,
    default: false,
  },

  disableOnScroll: {
    type: Boolean,
    default: false,
  },
});

let wrapperRect;
const outOfRange = ref(false);
const mouseLight = ref(null);
const wrapper = ref(null);
const loaderBar = ref(null);
const focalPoint = toRef(props, 'target');

function handleScroll() {
  outOfRange.value = window.scrollY > 100;

  if (outOfRange.value) {
    loaderBar.value.style.opacity = 0;
    mouseLight.value.style.opacity = 0;
  } else {
    loaderBar.value.style.opacity = 1;
    mouseLight.value.style.opacity = 1;
  }
}

function calculateDistance(elem, mouseX, mouseY) {
  return Math.floor(
    Math.sqrt(
      Math.pow(mouseX - (elem.x + elem.width / 2), 2) +
        Math.pow(mouseY - (elem.top + elem.height / 2), 2)
    )
  );
}

function onFocusOut() {
  if (!props.target) return;

  mouseLight.value.style.opacity = 0;
  focalPoint.value.style.opacity = 0.7;
}

function onMouseMove(event) {
  if (!props.target || outOfRange.value) return;

  const pointerRect = focalPoint.value.getBoundingClientRect();

  if (!wrapperRect) {
    wrapperRect = wrapper.value.getBoundingClientRect();
  }

  const distance = props.focusPoint
    ? calculateDistance(pointerRect, event.pageX, event.pageY)
    : 500;
  const size = Math.max((1000 - distance) / 2 / 100, 1);

  mouseLight.value.style.top = `${
    event.clientY - wrapperRect.y - mouseLight.value.clientHeight / 2
  }px`;
  mouseLight.value.style.left = `${
    event.clientX - mouseLight.value.clientWidth / 2
  }px`;
  mouseLight.value.style.width = mouseLight.value.style.height = `${Math.max(
    Math.round(size * 100),
    300
  )}px`;
  mouseLight.value.style.filter = `blur(${Math.min(
    Math.max(size * 50, 100),
    160
  )}px)`;
  mouseLight.value.style.opacity = Math.min(Math.max(size / 4, 0.6), 1);

  if (props.maskEffect) {
    const dx = event.pageX - pointerRect.left;
    const dy = event.pageY - pointerRect.top;
    const targetGradient = `radial-gradient(circle at ${dx}px ${dy}px, black 75%, transparent 100%)`;

    focalPoint.value.style['-webkit-mask-image'] = targetGradient;
    focalPoint.value.style['mask-image'] = targetGradient;
    focalPoint.value.style.opacity = Math.min(Math.max(size / 4, 0.7), 1);
  }
}

onMounted(() => {
  if (props.disableOnScroll) {
    window.addEventListener('scroll', handleScroll);
  }
});

onBeforeUnmount(() => {
  if (props.disableOnScroll) {
    window.removeEventListener('scroll', handleScroll);
  }
});
</script>

<style lang="scss" scoped>
.loader-bar {
  background: repeating-linear-gradient(
    to right,
    var(--color-primary-dark) 0%,
    var(--color-primary-light) 25%,
    var(--color-primary) 50%,
    var(--color-primary-light) 75%,
    var(--color-primary-dark) 100%
      /* #36e4da 0%, #1de0b1 25%, #00dc82 50%, #1de0b1 75%, #36e4da 100% */
  );
  background-size: 200% auto;
  background-position: 0 0;
  animation: gradient 2s infinite;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5px;
}

.light-effect .loader-bar {
  height: 100px;
  bottom: -50px;
  left: -50px;
  right: -50px;
  filter: blur(100px);
  transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.light-effect .mouse-gradient {
  background: repeating-linear-gradient(
    to right,
    var(--color-primary) 0%,
    var(--color-primary-light) 50%,
    var(--color-primary-dark) 100% /* #00dc82 0%, #1de0b1 50%, #36e4da 100% */
  );
  filter: blur(100px);
  opacity: 0.5;
  transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes gradient {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: -200% 0;
  }
}
</style>
