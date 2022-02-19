<template>
  <div class="bg-white dark:bg-black-light">
    <!-- Fonts Section -->
    <FontTestSamples />

    <BackgroundCodeHtml />
  </div>
</template>

<script>
import FontTestSamples from '~/components/Common/FontTestSamples'
import BackgroundCodeHtml from '~/components/Layout/Background/CodeHtml'

export default {
  components: {
    FontTestSamples,
    BackgroundCodeHtml,
  },
}
</script>
