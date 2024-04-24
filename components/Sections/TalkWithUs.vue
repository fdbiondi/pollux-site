<template>
  <div class="flex flex-col items-center 2xl:block">
    <div class="font-serif">
      <h2 class="font-light">
        <span>Talk to us and</span>
      </h2>
      <h2 class="font-bold">
        <span>get your</span>
      </h2>
      <h2 class="font-bold">
        <span class="text-pollux-pink">project</span>
        <span>&nbsp;</span>
        <span>moving!</span>
      </h2>

      <span class="my-16 text-xl sm:p-8 2xl:my-0">
        <span>Simply fill out the form or EMAIL us at</span>
        <span>&nbsp;</span>
        <a
          :href="`mailto: ${EMAIL}`"
          class="text-pollux-pink"
        >
          {{ EMAIL }}
        </a>
      </span>
    </div>
  </div>
</template>

<script setup>
import { EMAIL } from '~/support/constants/info';
</script>

<style lang="scss" scoped>
h2 {
  @apply my-1 cursor-default text-6xl uppercase last-of-type:mb-12 sm:px-8 sm:text-9xl md:text-8xl 2xl:my-16 2xl:last-of-type:mb-16;

  &:hover {
    text-shadow: 0 0 1.5rem hsl(0deg 0% 0% / 50%);
  }
}

html.dark h2:hover {
  text-shadow: 0 0 1.5rem hsl(0deg 0% 100% / 50%);
}
</style>
