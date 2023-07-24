<template>
  <div
    class="flex w-full flex-row flex-wrap items-center justify-center lg:flex-nowrap"
  >
    <div
      v-for="(image, i) in images"
      :key="i"
      class="max-h-full p-8 sm:mx-4"
      :data-aos="'fade-in-up'"
      :data-aos-delay="100 * i"
      data-aos-once="true"
    >
      <slot
        :image="image"
        :index="i"
      >
        <a
          v-if="hasLink"
          :href="href(image.name)"
        >
          <img
            :src="image.src"
            :alt="name(image.name)"
            class="w-20"
          >
        </a>

        <img
          v-else
          :src="image.src"
          :alt="name(image.name)"
          class="w-20"
        >
      </slot>
    </div>
  </div>
</template>

<script>
import { filenameFromPath, filenameGetHref } from '~/support/files';

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
      return filenameFromPath;
    },

    href() {
      return filenameGetHref;
    },
  },
};
</script>
