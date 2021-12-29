<template>
  <div class="tilt">
    <svg
      data-name="Tilt"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
        class="shape-fill"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.tilt {
  @apply absolute w-full bottom-0 left-0 overflow-hidden rotate-180;
  line-height: 0;
}

.tilt svg {
  @apply relative block h-96;
  width: 115%;
  transform: rotateY(180deg);
}

.tilt .shape-fill {
  fill: theme("colors.black.light");
}
</style>
