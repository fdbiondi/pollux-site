<template>
  <section class="section-gradient">
    <div class="section-layout">
      <div class="relative gradient-area">
        <div class="title-area">
          <div class="background-wrap">
            <canvas id="gradient-canvas" class="absolute top-0" />
            <div class="custom-shape-divider-bottom">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M 0,0 L0,120 L200,120 L600,0 z"
                  class="shape-fill"
                ></path>
              </svg>
            </div>
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
import { Gradient } from "anim-gradient"

export default {
  mounted() {
    const g = new Gradient()
    g.initGradient("#gradient-canvas")
  },
}
</script>

<style lang="scss" scoped>
@mixin section-height {
  height: 100vh;
}

.section-gradient {
  @include section-height;

  .text-under {
    @apply absolute w-full h-full top-0 left-0;
    z-index: 12;
  }

  .text-under-blended {
    @apply relative;
    color: theme("colors.gray.400");
    mix-blend-mode: color-burn;
  }

  .text-under-overlay {
    color: theme("colors.gray.400");
    opacity: 0.5;
  }

  canvas {
    @include section-height;
    @apply w-full;
    z-index: 10;
  }

  #gradient-canvas {
    --gradient-color-1: theme("colors.rose.500");
    --gradient-color-2: theme("colors.cyan.300");
    --gradient-color-3: theme("colors.purple.500");
    --gradient-color-4: theme("colors.gray.400");
  }
}

/* Polygon Shape */
.custom-shape-divider-bottom {
  @apply absolute top-0 right-0 overflow-hidden;
  line-height: 0;
}

.custom-shape-divider-bottom svg {
  @include section-height;
  @apply relative block w-full;
  z-index: 11;
}

.custom-shape-divider-bottom .shape-fill {
  fill: theme("colors.black.light");
}
</style>
