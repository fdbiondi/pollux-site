<template>
  <main class="hero--wrapper relative flex items-center">
    <section class="container mx-auto px-6 pb-16">
      <div class="w-full items-center lg:flex">
        <div class="z-20 w-full lg:w-1/2">
          <HeroTitle />
        </div>

        <div v-show="showImage" class="z-20 w-full lg:w-1/2 lg:pl-24">
          <HeroImage />
        </div>
      </div>
    </section>

    <TiltDivider v-show="showDivider" class="-mb-24" />
  </main>
</template>

<script>
import TiltDivider from '~/components/Common/UI/TiltDivider'
import HeroTitle from '~/components/Layout/Hero/Content/Title'
import HeroImage from '~/components/Layout/Hero/Content/Image'

export default {
  components: {
    HeroTitle,
    HeroImage,
    TiltDivider,
  },

  props: {
    showImage: {
      default: false,
      type: Boolean,
    },

    showDivider: {
      default: false,
      type: Boolean,
    },
  },
}
</script>
