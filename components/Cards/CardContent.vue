<template>
  <div class="px-6 py-4">
    <div class="mb-2 text-xl font-bold">
      {{ title }}
    </div>
    <p class="text-base text-gray-300">
      {{ content }}
    </p>
  </div>

  <div
    v-if="tags.length"
    class="px-6 pb-2 pt-4"
  >
    <span
      v-for="(tag, index) in tags"
      :key="`tag-${index}`"
      class="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
    >
      {{ tag }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  content: {
    type: String,
    default: '',
  },
  tags: {
    type: Array,
    default: () => [],
  },
});
</script>
