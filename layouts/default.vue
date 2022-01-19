<template>
  <div class="bg-primary text-gray-800 dark:text-gray-200">
    <div :class="{ colorful: colorful > 10 }">
      <!-- Navigation Bar -->
      <Nav />
      <!-- Hero Section -->
      <Hero />
    </div>

    <nuxt />

    <!-- Footer Section -->
    <Footer class="bg-secondary" />
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
