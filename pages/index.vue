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
  background: linear-gradient(
    225deg,
    theme("colors.pollux-cyan.light"),
    theme("colors.pollux-cyan.dark"),
    theme("colors.pollux-pink.light"),
    theme("colors.gray.200")
  );
  background-size: 300% 300%;
  -webkit-animation: colorfulBg 30s ease infinite;
  -moz-animation: colorfulBg 30s ease infinite;
  -o-animation: colorfulBg 30s ease infinite;
  animation: colorfulBg 30s ease infinite;
}
@-webkit-keyframes colorfulBg {
  0% {
    background-position: 0% 7%;
  }
  50% {
    background-position: 100% 94%;
  }
  100% {
    background-position: 0% 7%;
  }
}
@-moz-keyframes colorfulBg {
  0% {
    background-position: 0% 7%;
  }
  50% {
    background-position: 100% 94%;
  }
  100% {
    background-position: 0% 7%;
  }
}
@-o-keyframes colorfulBg {
  0% {
    background-position: 0% 7%;
  }
  50% {
    background-position: 100% 94%;
  }
  100% {
    background-position: 0% 7%;
  }
}
@keyframes colorfulBg {
  0% {
    background-position: 0% 7%;
  }
  50% {
    background-position: 100% 94%;
  }
  100% {
    background-position: 0% 7%;
  }
}
</style>
