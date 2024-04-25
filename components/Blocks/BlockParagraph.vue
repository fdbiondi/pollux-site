<template>
  <Wrapper>
    <div class="block-paragraph">
      <p class="text-2xl">
        <slot />
      </p>
    </div>
  </Wrapper>
</template>

<script setup>
import Wrapper from '~/components/Layout/Wrapper.vue';
</script>
