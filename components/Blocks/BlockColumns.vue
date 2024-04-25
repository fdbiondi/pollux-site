<template>
  <Wrapper class="px-24 py-20">
    <slot name="anchor" />

    <div class="container mx-auto">
      <div class="grid grid-cols-12 gap-12">
        <div class="block-column col-[1_/_span_5]">
          <slot name="col-1" />
        </div>

        <div class="block-column col-[7_/_span_5]">
          <slot name="col-2" />
        </div>
      </div>
    </div>
  </Wrapper>
</template>

<script setup>
import Wrapper from '~/components/Layout/Wrapper.vue';
</script>
