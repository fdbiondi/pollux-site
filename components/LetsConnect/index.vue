<template>
  <section>
    <div class="container mx-auto px-6 py-8 lg:py-16 xl:py-24">
      <div class="text-center perspective">
        <h4 class="text-4xl text-gray-200">Ready for this?</h4>

        <h2 class="font-bold text-gray-200 my-16 text-section tracking-wider">
          <span> Let Build a Great</span> <span>Product!</span>
        </h2>

        <nuxt-link to="#contact">
          <button class="button button--secondary transition-none mx-2">
            Tell us about your project
          </button>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
h2 {
  font-size: 10rem;
}

.perspective {
  perspective: 50rem;
}

.text-section {
  transform: rotateY(-5deg);
}
</style>
