<template>
  <section class="py-4 lg:py-8 xl:py-16">
    <ImagesList :images="images" />
  </section>
</template>

<script>
import ImagesList from "~/components/Shared/ImagesList.vue"
import { getFromContext } from "~/support/files"

export default {
  components: {
    ImagesList,
  },

  data() {
    return { images: [] }
  },

  mounted() {
    this.images = getFromContext(
      require.context("@/assets/images/partners/", true, /\.*$/),
      ".*"
    )
  },
}
</script>

<style lang="scss" scoped></style>
