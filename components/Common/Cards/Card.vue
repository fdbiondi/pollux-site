<template>
  <div class="card m-4 h-full cursor-pointer px-8 py-12 dark:text-white">
    <slot></slot>

    <div class="mt-12">
      <h3 class="font-title text-3xl tracking-widest">
        {{ title }}
      </h3>
    </div>

    <div class="py-4">
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      default: '',
      type: String,
    },

    title: {
      default: '',
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped></style>
