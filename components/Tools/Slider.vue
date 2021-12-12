<template>
  <div class="slider">
    <div
      class="slider--swipe-track"
      @mousedown="gestureStart"
      @mouseup="gestureEnd"
      @mouseleave="gestureEnd"
      @mousemove="gestureMove"
    >
      <div v-for="{ src, link, name } in images" :key="name" class="p-4 flex-shrink-0">
        <a :href="link" target="_blank">
          <img :src="src" :alt="name" class="w-24 h-24" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import SwipeTrack from "~/mixins/swipe-track"
import { filename, getToolLink } from "~/support/strings"

export default {
  mixins: [SwipeTrack],

  data() {
    return {
      images: [],
    }
  },

  mounted() {
    this.getFiles(require.context("@/assets/images/tools/", true, /\.svg$/))
  },

  methods: {
    getFiles(r) {
      const extension = ".svg"

      r.keys().forEach((path) =>
        this.images.push({
          src: r(path),
          link: getToolLink(path, extension),
          name: filename(path, extension).replace("-", " "),
        })
      )
    },
  },
}
</script>

<style lang="scss" scoped>
img {
  filter: grayscale(1);

  &:hover {
    filter: saturate(1.5);
    @apply transform scale-105 transition-transform;
  }
}
</style>
