<template>
  <div class="container mx-auto px-6 py-8 lg:py-16 xl:py-24">
    <div class="perspective text-center">
      <h4 class="text-4xl dark:text-gray-100">
        {{ upperTitle }}
      </h4>

      <h2
        class="text-section my-16 font-bold tracking-wider dark:text-gray-100"
      >
        <span>{{ title }}</span>
      </h2>

      <nuxt-link
        v-if="linkText"
        :to="link"
      >
        <button
          class="button button-secondary dark:button-secondary-dark mx-2 transition-none"
        >
          {{ linkText }}
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    linkText: {
      type: String,
      default: null,
    },

    link: {
      type: [Object, String],
      default: null,
    },

    title: {
      type: String,
      default: '',
    },

    upperTitle: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 10rem;
}

.perspective {
  perspective: 50rem;
}

.text-section {
  transform: rotateY(-5deg);
}
</style>
