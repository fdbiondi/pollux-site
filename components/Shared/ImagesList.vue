<template>
  <div class="container mx-auto px-6">
    <div class="flex justify-center items-center w-full mb-6">
      <div
        v-for="({ src, name }, i) in images"
        :key="i"
        class="mx-4 p-8 max-h-full"
        data-aos="fade-in-up"
        :data-aos-delay="100 * i"
        data-aos-once="true"
      >
        <img :src="src" :alt="name" class="w-20" />
      </div>
    </div>

    <hr class="mx-16 border-t border-solid border-gray-900 dark:border-white" />
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
}
</script>

<style lang="scss" scoped>
img {
  filter: grayscale(1) brightness(2);
}
</style>
