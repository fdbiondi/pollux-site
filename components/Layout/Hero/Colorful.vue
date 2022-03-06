<template>
  <div :class="{ colorful: colorful > 10 }">
    <slot />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['colorful']),
  },
}
</script>
