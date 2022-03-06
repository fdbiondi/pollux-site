<template>
  <colorful class="relative">
    <!-- Navigation Bar -->
    <Header />

    <!-- Hero Content -->
    <HeroContent class="py-8 lg:py-16 xl:py-24" />

    <svg
      class="absolute inset-y-0 left-1/2 z-10 hidden h-full w-48 -translate-x-1/2 fill-gray-100 dark:fill-gray-900 lg:block xl:block"
      fill="currentColor"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <polygon points="50,0 100,0 50,100 0,100" />
    </svg>

    <div class="z-0 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        class="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
        :src="image"
      />
    </div>
  </colorful>
</template>

<script>
import Colorful from './Colorful'
import HeroContent from '~/components/Layout/Hero/Content'

import Header from '~/components/Layout/Header'

export default {
  components: {
    Colorful,
    Header,
    HeroContent,
  },

  data() {
    return {
      image:
        'https://images.unsplash.com/photo-1623520333087-62b8793e3d23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    }
  },
}
</script>
