<template>
  <main class="hero--wrapper relative flex items-center">
    <section class="container mx-auto px-6 pb-16">
      <div class="w-full items-center xl:flex">
        <div class="z-20 w-full xl:w-1/2">
          <HeroTitle />
        </div>
      </div>
    </section>

    <TiltDivider v-show="showDivider" class="-mb-24" />
  </main>
</template>

<script>
import TiltDivider from '~/components/Common/UI/TiltDivider'
import HeroTitle from '~/components/Layout/Hero/Content/Title'

export default {
  components: {
    HeroTitle,
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
