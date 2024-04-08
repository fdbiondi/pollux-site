<template>
  <div class="relative bg-white dark:bg-black-light">
    <slot name="header" />

    <main
      class="hero--wrapper relative z-20 flex items-center py-8 lg:py-16 xl:py-24"
    >
      <section class="container mx-auto px-6 pb-16">
        <div class="z-20 w-full items-center xl:w-1/2">
          <HeroTitle />
        </div>
      </section>
    </main>

    <svg
      class="absolute inset-y-0 left-1/2 z-10 hidden h-full w-48 -translate-x-1/2 fill-white dark:fill-black-light xl:block"
      fill="currentColor"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <polygon points="50,0 100,0 50,100 0,100" />
    </svg>

    <div
      class="absolute inset-0 z-0 xl:inset-x-auto xl:inset-y-0 xl:right-0 xl:w-1/2"
    >
      <img
        class="h-full w-full object-cover"
        :src="imageSrc"
      />
    </div>
  </div>
</template>

<script setup>
import HeroTitle from '~/components/Layout/HeroTitle';

defineProps({
  imageSrc: {
    default: './images/notebook.avif',
    type: String,
  },
});
</script>
