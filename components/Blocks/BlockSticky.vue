<template>
  <Wrapper class="px-24 py-20">
    <slot name="anchor" />

    <div class="container mx-auto">
      <div class="grid grid-cols-12 justify-around gap-12">
        <div class="sticky top-20 col-[1_/_span_3] self-start">
          <slot name="heading" />
        </div>

        <div class="col-[7_/_span_5]">
          <slot />
        </div>
      </div>
    </div>
  </Wrapper>
</template>

<script setup>
import Wrapper from '~/components/Layout/Wrapper.vue';
</script>
