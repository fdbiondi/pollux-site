<template>
  <div class="container mx-auto px-6">
    <div class="mb-6 flex w-full items-center justify-center">
      <div
        v-for="(image, i) in images"
        :key="i"
        class="mx-4 max-h-full p-8"
        data-aos="fade-in-up"
        :data-aos-delay="100 * i"
        data-aos-once="true"
      >
        <slot :props="image" :index="i">
          <a v-if="hasLink" :href="href(image.name)">
            <img :src="image.src" :alt="name(image.name)" class="w-20" />
          </a>

          <img v-else :src="image.src" :alt="name(image.name)" class="w-20" />
        </slot>
      </div>
    </div>

    <hr class="mx-16 border-t border-solid border-gray-900 dark:border-white" />
  </div>
</template>

<script>
import { cleanFilename } from '~/support/files'

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
      return (filename) => {
        const name = cleanFilename(filename.split('_')[0]).trim()

        return name
      }
    },

    href() {
      return (filename) => {
        if (filename.split('_').length <= 1) {
          return null
        }

        const link = cleanFilename(filename.split('_')[1]).trim()

        return `https://${link}/`
      }
    },
  },
}
</script>

<style lang="scss" scoped>
img {
  filter: grayscale(1) brightness(2);
}
</style>
