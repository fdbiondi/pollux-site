<template>
  <Wrapper>
    <div class="block-heading">
      <h2 class="mb-4 mt-6 text-5xl font-extrabold">
        <slot />
      </h2>
    </div>
  </Wrapper>
</template>

<script setup>
import Wrapper from '~/components/Layout/Wrapper.vue';
</script>
