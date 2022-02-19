<template>
  <section class="section-gradient">
    <div class="section-layout">
      <div class="gradient-area relative">
        <div class="title-area">
          <div class="background-wrap">
            <canvas id="gradient-canvas" class="absolute top-0" />

            <slot name="tilt"></slot>
          </div>
          <div class="text-under text-under-blended">
            <slot></slot>
          </div>
          <div class="text-under text-under-overlay">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Gradient } from 'anim-gradient'

export default {
  mounted() {
    const g = new Gradient()
    g.initGradient('#gradient-canvas')
  },
}
</script>

<style lang="scss" scoped>
.section-gradient {
  --section-height: 20rem;
  --gradient-color-1: theme('colors.green.500');
  --gradient-color-2: theme('colors.cyan.400');
  --gradient-color-3: theme('colors.purple.500');
  --gradient-color-4: theme('colors.gray.300');

  height: var(--section-height);

  .text-under {
    @apply absolute top-0 left-0 h-full w-full;
    z-index: 12;
  }

  .text-under-blended {
    @apply relative;
    mix-blend-mode: color-burn;
  }

  .text-under-overlay {
    opacity: 0.5;
  }

  canvas {
    height: var(--section-height);
    @apply w-full;
    z-index: 10;
  }
}
</style>
