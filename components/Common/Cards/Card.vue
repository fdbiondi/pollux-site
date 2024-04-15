<template>
  <div
    class="card h-full cursor-pointer border-4 border-gray-800 px-8 py-8 hover:bg-gray-800 hover:text-white hover:shadow-xl hover:shadow-gray-400 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black-light dark:hover:shadow-gray-200"
  >
    <slot />

    <div class="mt-4">
      <h3 class="font-serif lines-2 text-3xl tracking-widest">
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
};
</script>
