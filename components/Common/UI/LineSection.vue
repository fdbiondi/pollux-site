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
  @apply pointer-events-none absolute top-0 left-1/2 h-full max-w-full -translate-x-1/2 opacity-20;
  width: 1536px;
  z-index: 0;
}

.line-section .line {
  @apply hidden;
}

@media only screen and (min-width: 1600px) {
  .line-section .line {
    @apply block;
  }
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
