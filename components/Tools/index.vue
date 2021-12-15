<template>
  <section class="py-4 lg:py-8 xl:py-16">
    <div class="container mx-auto px-6">
      <h2 class="title">Some of the Technologies that we use</h2>
    </div>

    <Slider :images="images">
      <template #default="{ props: { name, src, link } }">
        <a :href="link" target="_blank">
          <img :src="src" :alt="name" class="w-24 h-24" />
        </a>
      </template>
    </Slider>
  </section>
</template>

<script>
import Slider from "~/components/Shared/Slider"
import { getFromContext } from "~/support/files"
import { getToolLink } from "~/support/strings"

export default {
  components: {
    Slider,
  },

  data() {
    return { images: [] }
  },

  mounted() {
    this.images = getFromContext(
      require.context("@/assets/images/tools/", true, /\.svg$/),
      ".svg"
    )
  },
}
</script>

<style lang="scss" scoped></style>
