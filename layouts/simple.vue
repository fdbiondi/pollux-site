<template>
  <div class="text-gray-800 dark:text-gray-200">
    <AppHeader />

    <slot />
  </div>
</template>

<script>
import { AppHeader } from '~/components/Layout';

export default {
  components: {
    AppHeader,
  },
};
</script>

<style scoped>
header :deep(.nav-item) {
  @apply text-gray-900 filter-none;
}

html.dark header :deep(.nav-item) {
  @apply text-white;
}
</style>
