<template>
  <div class="bg-white text-gray-800 dark:bg-black-light dark:text-gray-200">
    <AppHeader />

    <nuxt />

    <AppFooter class="bg-white dark:bg-black-light" />
  </div>
</template>

<script>
import { AppHeader, AppFooter } from '~/components/Layout'

export default {
  components: {
    AppHeader,
    AppFooter,
  },
}
</script>

<style lang="scss" scoped>
header {
  ::v-deep .nav-item {
    /* TODO: fix tailwind version */
    /* @apply text-gray-900 filter-none dark:text-white; */
  }
}

::v-deep footer {
  @apply shadow-none;
}
</style>
