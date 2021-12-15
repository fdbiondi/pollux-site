<template>
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
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },

  mounted() {},
}
</script>

<style lang="scss" scoped>
img {
  filter: grayscale(1) brightness(2);
}
</style>
