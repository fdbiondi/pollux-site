<template>
  <div class="bg-gray-800">
    <div :class="{ colorful: colorful > 10 }">
      <!-- Navigation Bar -->
      <Nav />

      <!-- Hero Section -->
      <Hero />
    </div>

    <!-- Home -->
    <PagesHome />

    <!-- Footer Section -->
    <Footer class="bg-black-light" @bonus="colorful++" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorful: 0,
    }
  },
}
</script>

<style lang="scss" scoped>
.colorful {
  background-image: linear-gradient(
    135deg,
    theme("colors.pollux-pink.light") 10%,
    theme("colors.pollux-cyan.dark") 100%
  );
  // background-image: linear-gradient(135deg, #f97794 10%, #623aa2 100%);
}
</style>
