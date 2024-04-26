<template>
  <Wrapper class="px-24 py-20">
    <slot name="anchor" />

    <div class="container mx-auto">
      <div class="grid grid-cols-12 gap-12">
        <div
          class="block-column"
          :style="{ '--span': span, '--start': start }"
        >
          <slot />
        </div>
      </div>
    </div>
  </Wrapper>
</template>

<script setup>
import Wrapper from '~/components/Layout/Wrapper.vue';

const props = defineProps({
  start: {
    type: String,
    default: '1',
  },
  span: {
    type: String,
    default: '5',
  },
});
</script>

<style scoped>
.block-column {
  grid-column: var(--start) / span var(--span);
}
</style>
