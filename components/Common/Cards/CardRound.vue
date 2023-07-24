<template>
  <div class="mx-auto my-2 flex flex-col items-center p-4">
    <img
      :src="src"
      :alt="alt"
      class="h-32 w-32 rounded-[100%] border-4 border-solid dark:border-gray-100 border-gray-800"
    />
    <h4
      v-if="text"
      class="mt-2 text-center font-serif text-2xl text-gray-200"
    >
      {{ text }}
    </h4>
  </div>
</template>

<script>
export default {
  props: {
    alt: {
      default: '',
      type: String,
    },

    src: {
      required: true,
      type: String,
    },

    text: {
      default: null,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  &:hover {
    @apply scale-105 border-0 transition-all;
  }
}
</style>
