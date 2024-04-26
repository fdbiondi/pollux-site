<template>
  <Wrapper class="px-24 py-20">
    <slot name="anchor" />

    <div class="container mx-auto">
      <div class="grid grid-cols-12 gap-12">
        <div
          class="block-column block-column--1"
          :style="{ '--span-col1': col1Span, '--start-col1': col1Start }"
        >
          <slot name="col-1" />
        </div>

        <div
          class="block-column block-column--2"
          :style="{ '--span-col2': col2Span, '--start-col2': col2Start }"
        >
          <slot name="col-2" />
        </div>
      </div>
    </div>
  </Wrapper>
</template>

<script setup>
import Wrapper from '~/components/Layout/Wrapper.vue';

defineProps({
  col1Start: {
    type: String,
    default: '1',
  },
  col1Span: {
    type: String,
    default: '5',
  },
  col2Start: {
    type: String,
    default: '7',
  },
  col2Span: {
    type: String,
    default: '5',
  },
});
</script>

<style lang="scss" scoped>
.block-column {
  &--1 {
    grid-column: var(--start-col1) / span var(--span-col1);
  }

  &--2 {
    grid-column: var(--start-col2) / span var(--span-col2);
  }
}
</style>
