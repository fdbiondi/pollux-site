<template>
  <div class="bg-primary text-gray-800 dark:text-gray-200">
    <Header />

    <nuxt />

    <Footer class="bg-secondary" />
  </div>
</template>

<script>
import { Header, Footer } from '~/components/Layout'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>
