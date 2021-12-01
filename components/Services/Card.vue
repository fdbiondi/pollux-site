<template>
  <div class="text-gray-200 bg-gray-700 bg-opacity-25 p-8 m-4 rounded-sm">
    <slot></slot>
    <div class="pt-6 space-y-4">
      <h4 class="text-2xl font-semibold break-words">
        <div v-for="(word, index) in title.split(' ')" :key="index">
          {{ word }}
        </div>
      </h4>
    </div>

    <div class="pt-4 space-y-4">
      <p class="min-h-[10rem] text-md font-semibold">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      default: "",
      type: String,
    },

    title: {
      default: "",
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped></style>
