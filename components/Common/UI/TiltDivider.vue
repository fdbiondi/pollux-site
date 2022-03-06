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
        class="fill-white dark:fill-black-light"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.tilt {
  @apply absolute bottom-0 left-0 w-full rotate-180 overflow-hidden;
  line-height: 0;
}

.tilt svg {
  @apply relative block h-96;
  width: 115%;
  transform: rotateY(180deg);
}
</style>
