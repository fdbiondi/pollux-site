<template>
  <section class="py-4 lg:py-8 xl:py-16">
    <div class="container mx-auto px-6">
      <div class="flex justify-center items-center w-full mb-6">
        <div
          v-for="({ src, name }, index) in images"
          :key="index"
          class="mx-4 p-8 max-h-full"
        >
          <img :src="src" :alt="name" class="w-20" />
        </div>
      </div>

      <hr class="mx-16" />
    </div>
  </section>
</template>

<script>
import { getFromContext } from "~/support/files"

export default {
  data() {
    return { images: [] }
  },

  mounted() {
    this.images = getFromContext(
      require.context("@/assets/images/clients/", true, /\.*$/),
      ".*"
    )
  },
}
</script>

<style lang="scss" scoped>
img {
  filter: grayscale(1) brightness(2);

  /* &:hover {
    @apply transform scale-105 transition-transform;
  } */
}
</style>
