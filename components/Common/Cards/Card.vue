<template>
  <div class="card h-full cursor-pointer px-8 py-8 dark:text-white">
    <slot></slot>

    <div class="mt-4">
      <h3 class="font-title text-3xl tracking-widest">
        {{ title }}
      </h3>
    </div>

    <div class="pt-4">
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
