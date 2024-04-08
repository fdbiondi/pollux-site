<template>
  <section class="container mx-auto my-24">
    <div class="grid grid-flow-col grid-cols-12 grid-rows-6 gap-4">
      <CardSample3
        class="col-span-3 row-span-2"
        icon="i-heroicons-swatch"
        title="Color Palette"
        description="Choose a primary and a gray color from your Tailwind CSS color palette."
      />
      <CardSample3
        class="col-span-3 row-span-3"
        icon="i-heroicons-wrench-screwdriver"
        title="Fully Customizable"
        description="Change the style of any component in your App Config or with ui prop."
      />
      <CardSample3
        class="col-span-3 row-span-3"
        icon="i-heroicons-face-smile"
        title="Icons"
        description="Choose any of the 100k+ icons from the most popular icon libraries."
      />
      <CardSample3
        class="col-span-3 row-span-2"
      />
      <CardSample3
        class="col-span-3 row-span-2"
      />
      <CardSample3
        class="col-span-3 row-span-3"
      />
      <CardSample3
        class="col-span-3 row-span-3"
        icon="i-heroicons-face-smile"
        title="Icons"
        description="Choose any of the 100k+ icons from the most popular icon libraries."
      />
      <CardSample3
        class="col-span-3 row-span-2"
        icon="i-heroicons-computer-desktop"
        title="Keyboard Shortcuts"
        description="Nuxt UI comes with a set of Vue composables to easily handle shortcuts."
      />
    </div>
  </section>
</template>

<script setup>
import CardSample3 from '~/components/Utilities/CardSample3.vue';

definePageMeta({ layout: 'empty' });
</script>
