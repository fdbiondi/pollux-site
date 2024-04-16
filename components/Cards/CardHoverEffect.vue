<template>
  <HoverEffect
    class="z-10 cursor-pointer rounded-md border-2 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:border-white dark:shadow-white"
  >
    <slot />
  </HoverEffect>
</template>

<script setup>
import HoverEffect from '~/components/Utilities/HoverEffect.vue';
</script>
