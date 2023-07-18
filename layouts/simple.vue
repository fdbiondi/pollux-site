<template>
  <div class="text-gray-800 dark:text-gray-200">
    <AppHeader />

    <nuxt />
  </div>
</template>

<script>
import { AppHeader } from '~/components/Layout'

export default {
  components: {
    AppHeader,
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
</style>
