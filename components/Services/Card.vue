<template>
  <div class="card px-8 py-12 m-4 cursor-pointer">
    <slot></slot>
    <div class="mt-12">
      <h3 class="font-title text-3xl tracking-widest">
        {{ title }}
      </h3>
    </div>

    <div class="pt-4">
      <p class="min-h-[14rem]">{{ description }}</p>
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
