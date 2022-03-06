<template>
  <main class="hero--wrapper relative flex items-center py-8 lg:py-16 xl:py-24">
    <section class="container mx-auto px-6 pb-16">
      <div class="w-full items-center lg:flex">
        <div class="z-10 w-full lg:w-1/2">
          <HeroTittles />
        </div>

        <div class="z-10 w-full lg:w-1/2 lg:pl-24">
          <HeroImage />
        </div>
      </div>
    </section>

    <TiltDivider v-show="showDivider" />
  </main>
</template>

<script>
import TiltDivider from '~/components/Common/UI/TiltDivider'
import HeroTittles from '~/components/Layout/Hero/Tittles'
import HeroImage from '~/components/Layout/Hero/Image'

export default {
  components: {
    HeroTittles,
    HeroImage,
    TiltDivider,
  },

  props: {
    showDivider: {
      default: false,
      type: Boolean,
    },
  },
}
</script>
