<template>
  <HoverEffect
    class="z-10 cursor-pointer rounded-md border-2 border-black  shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:border-white dark:shadow-white"
  >
    <div class="px-6 py-4">
      <div class="mb-2 text-xl font-bold">
        <span>The Coldest Sunset</span>
      </div>
      <p class="text-base text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
        nihil.
      </p>
    </div>

    <div class="px-6 pb-2 pt-4">
      <span
        class="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
      >
        #photography
      </span>
      <span
        class="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
      >
        #travel
      </span>
      <span
        class="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
      >
        #winter
      </span>
    </div>
  </HoverEffect>
</template>
<script setup>
import HoverEffect from './HoverEffect.vue';
</script>
