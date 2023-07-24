<template>
  <div class="text-gray-800 dark:text-gray-200">
    <AppHeader />

    <slot />

    <AppFooter class="bg-white dark:bg-black-light" />
  </div>
</template>

<script>
import { AppHeader, AppFooter } from '~/components/Layout';

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss" scoped>
header :deep(.nav-item) {
  @apply text-gray-900 filter-none;
}

html.dark header :deep(.nav-item) {
  @apply text-white;
}
</style>
