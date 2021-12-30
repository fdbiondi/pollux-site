<template>
  <div class="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
    <div :class="{ colorful: colorful > 10 }">
      <!-- Navigation Bar -->
      <Nav />
      <!-- Hero Section -->
      <Hero />
    </div>

    <nuxt />

    <!-- Footer Section -->
    <Footer class="bg-gray-100 dark:bg-black-light" />
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  computed: {
    ...mapGetters(["colorful"]),
  },
}
</script>

<style lang="scss" scoped></style>
