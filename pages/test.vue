<template>
  <section class="isLoaded">
    <canvas id="gradient-canvas" width="1920" height="600" class="isLoaded shape-sizing"></canvas>
    <div class="custom-shape-divider-bottom shape-sizing">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 120" preserveAspectRatio="none">
        <path d="M 0,0 L0,120 L400,120 L600,0 z" class="shape-fill"></path>
      </svg>npm set registry https://registry.npmjs.org
    </div>
  </section>
</template>

<script>
import { Gradient } from 'anim-gradient'

export default {
  mounted() {
    const g = new Gradient()
    g.initGradient('#gradient-canvas')
  }
}
</script>

<style>
#gradient-canvas {
    --gradient-color-1: #6ec3f4;
    --gradient-color-2: #3a3aff;
    --gradient-color-3: #ff61ab;
    --gradient-color-4: #E63946;
}

.custom-shape-divider-bottom {
    position: absolute;
    top: 0;
    right: 0;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-bottom svg {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
}

.custom-shape-divider-bottom .shape-fill {
    fill: #FFFFFF;
}

.shape-sizing {
    width: 100vw;
    height: 80vh;
}
</style>
