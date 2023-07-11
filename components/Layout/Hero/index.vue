<template>
  <div class="relative">
    <slot name="header" />

    <!-- Hero Content -->
    <HeroContent
      class="z-20 py-8 lg:py-16 xl:py-24"
      :show-divider="tilt === 'horizontal'"
    />

    <svg
      v-if="tilt === 'vertical'"
      class="absolute inset-y-0 left-1/2 z-10 hidden h-full w-48 -translate-x-1/2 xl:block"
      :class="tiltColor"
      fill="currentColor"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <polygon points="50,0 100,0 50,100 0,100" />
    </svg>

    <div
      class="absolute inset-0 z-0 xl:inset-y-0 xl:inset-x-auto xl:right-0 xl:w-1/2"
    >
      <!-- class="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full" -->
      <img class="h-full w-full object-cover" :src="imageSrc" />
    </div>
  </div>
</template>

<script>
import HeroContent from '~/components/Layout/Hero/Content'

export default {
  components: {
    HeroContent,
  },

  props: {
    imageSrc: {
      default:
        'https://images.unsplash.com/photo-1623520333087-62b8793e3d23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      type: String,
    },

    tilt: {
      default: 'vertical',
      type: String,
      validator(value) {
        return ['horizontal', 'vertical'].includes(value)
      },
    },

    tiltColor: {
      default: 'fill-white dark:fill-gray-900',
      type: String,
    },
  },
}
</script>
