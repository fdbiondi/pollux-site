<template>
  <div class="bg-white text-gray-800 dark:bg-black-light dark:text-gray-200">
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
    @apply text-gray-900 filter-none dark:text-white;
  }
}
</style>
