<template>
  <Wrapper class="px-24 py-20">
    <slot name="anchor" />

    <div class="block-sticky grid grid-cols-12 justify-around gap-12">
      <div class="block-sticky__sticky top-20 col-[1_/_span_3] self-start">
        <slot name="sticky" />
      </div>

      <div class="block-sticky__inner-blocks col-[7_/_span_5] text-2xl">
        <slot />
      </div>
    </div>
  </Wrapper>
</template>

<script setup>
import Wrapper from './Wrapper.vue';
</script>
