<template>
  <div class="card px-8 py-12 m-4 cursor-pointer dark:text-white h-full">
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
