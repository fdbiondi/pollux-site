<template>
  <div
    class="slider"
    :class="{ 'w-full': !swipe }"
    :style="{ '--carousel-size': carouselSize }"
  >
    <div
      :key="carouselSize"
      :class="{
        'slider--carousel-track': !swipe,
        'slider--swipe-track': swipe,
      }"
      @mousedown="gestureStart"
      @mouseup="gestureEnd"
      @mouseleave="gestureEnd"
      @mousemove="gestureMove"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        class="p-4 flex-shrink-0"
      >
        <slot :props="item" :index="index">
          <img :src="item.src" class="w-24 h-24" />
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import SwipeTrack from "~/mixins/swipe-track"

export default {
  mixins: [SwipeTrack],

  props: {
    images: {
      type: Array,
      required: true,
    },

    // Size in rem
    imageSize: {
      type: Number,
      default: 6, // width of images in rem units
    },

    swipe: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      paddingSize: 2,
      remUnit: 16,
    }
  },

  computed: {
    carouselSize() {
      return this.imagePixels * this.images.length
    },

    imagePixels() {
      return (this.paddingSize + this.imageSize) * this.remUnit
    },

    items() {
      if (!this.images.length) {
        return []
      }

      if (this.swipe) {
        return this.images
      }

      return this.getCarouselItems()
    },
  },

  methods: {
    getCarouselItems() {
      let items = []

      if (process.client) {
        const track = document.querySelector(".slider")

        items = [
          ...this.images,
          ...this.images
            .slice(0, track.clientWidth / this.imagePixels + 1)
            .map((item) => ({ ...item, name: `${item.name}-1` })),
        ]
      }

      return items
    },
  },
}
</script>

<style lang="scss" scoped>
img {
  @apply grayscale;

  &:hover {
    @apply filter-none saturate-150 scale-105 transition-transform;
  }
}

.slider {
  @apply overflow-hidden p-0;

  &--swipe-track {
    @apply cursor-[grab] flex flex-row;
  }

  &--carousel-track {
    @apply flex flex-row;
  }
}
</style>

<style scoped>
@keyframes carousel {
  0% {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-1px * var(--carousel-size)));
  }
}

.slider--carousel-track {
  -webkit-animation: carousel 80s linear infinite;
  animation: carousel 80s linear infinite;
  width: var(--carousel-size) px;
}
</style>
