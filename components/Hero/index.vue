<template>
  <main class="hero--wrapper py-8 lg:py-16 xl:py-24 min-h-[90vh] relative">
    <section class="container mx-auto px-6 pb-16">
      <div class="w-full lg:flex items-center">
        <div class="w-full lg:w-1/2 z-10">
          <HeroTittles />
        </div>

        <div class="w-full lg:w-1/2 lg:pl-24 z-10">
          <HeroImage />
        </div>
      </div>
    </section>

    <TiltDivider />
  </main>
</template>

<script>
import TiltDivider from "../Shared/TiltDivider.vue"

export default {
  components: {
    TiltDivider,
  },
}
</script>

<style scoped>
* >>> .tilt svg {
  @apply h-96;
  width: 115%;
}
</style>
