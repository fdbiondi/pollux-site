<template>
  <div class="line-section">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.line-section {
  @apply pointer-events-none absolute top-0 left-1/2 z-0 h-full max-w-full -translate-x-1/2 opacity-20 lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px];
}

.line-section .line {
  @apply hidden lg:block;
}

.line-section .line:nth-child(2) {
  @apply left-1/3;
}
.line-section .line:nth-child(3) {
  @apply left-2/3;
}
.line-section .line:nth-child(4) {
  @apply left-full;
}

.line-section .line {
  @apply absolute h-full border-l border-dashed border-black-light dark:border-white;
}
</style>
