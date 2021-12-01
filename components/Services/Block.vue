<template>
  <div class="p-8 text-gray-200">
    <slot></slot>
    <div class="pt-6 space-y-4">
      <h4 class="text-2xl font-semibold">
        {{ title }}
      </h4>
    </div>

    <div class="pt-4 space-y-4">
      <p class="min-h-[6rem] text-md font-semibold">{{ description }}</p>
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
