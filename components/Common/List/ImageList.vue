<template>
  <div class="flex w-full items-center justify-center">
    <div
      v-for="(image, i) in images"
      :key="i"
      class="mx-4 max-h-full p-8"
      :data-aos="'fade-in-up'"
      :data-aos-delay="100 * i"
      data-aos-once="true"
    >
      <slot :image="image" :index="i">
        <a v-if="hasLink" :href="href(image.name)">
          <img :src="image.src" :alt="name(image.name)" class="w-20" />
        </a>

        <img v-else :src="image.src" :alt="name(image.name)" class="w-20" />
      </slot>
    </div>
  </div>
</template>

<script>
import { filenameFromPath, filenameGetHref } from '~/support/files'

export default {
  props: {
    images: {
      type: Array,
      default: () => [],
    },

    hasLink: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    name() {
      return filenameFromPath
    },

    href() {
      return filenameGetHref
    },
  },
}
</script>

<style lang="scss" scoped>
img {
  filter: grayscale(1) brightness(2);
}
</style>
