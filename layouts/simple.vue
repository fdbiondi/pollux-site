<template>
  <div class="bg-white text-gray-800 dark:bg-black-light dark:text-gray-200">
    <Header />

    <div class="flex min-h-screen flex-col items-center justify-evenly">
      <nuxt />

      <div class="bg-white dark:bg-black-light">
        <span>Simple Footer</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Header } from '~/components/Layout'

export default {
  components: {
    Header,
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
