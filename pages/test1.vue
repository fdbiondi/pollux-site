<template>
  <section class="container mx-auto my-24">
    <div class="grid grid-flow-col grid-cols-12 grid-rows-6 gap-4">
      <CardWrapper class="col-span-3 row-span-2">
        <CardContent
          title="Color Palette"
          content="Choose a primary and a gray color from your Tailwind CSS color palette."
        />
      </CardWrapper>
      <CardWrapper class="col-span-3 row-span-3">
        <CardContent
          title="Fully Customizable"
          content="Change the style of any component in your App Config or with ui prop."
        />
      </CardWrapper>
      <CardWrapper class="col-span-3 row-span-3">
        <CardContent
          title="Icons"
          content="Choose any of the 100k+ icons from the most popular icon libraries."
        />
      </CardWrapper>
      <CardWrapper class="col-span-3 row-span-2">
        <CardContent
          title="Keyboard Shortcuts"
          content="Nuxt UI comes with a set of Vue composables to easily handle shortcuts."
        />
      </CardWrapper>
      <CardWrapper class="col-span-3 row-span-2">
        <CardContent
          title="Color Palette"
          content="Choose a primary and a gray color from your Tailwind CSS color palette."
        />
      </CardWrapper>
      <CardWrapper class="col-span-3 row-span-3">
        <CardContent
          title="Fully Customizable"
          content="Change the style of any component in your App Config or with ui prop."
        />
      </CardWrapper>
      <CardWrapper class="col-span-3 row-span-3">
        <CardContent
          title="Icons"
          content="Choose any of the 100k+ icons from the most popular icon libraries."
        />
      </CardWrapper>
      <CardWrapper class="col-span-3 row-span-2">
        <CardContent
          title="Keyboard Shortcuts"
          content="Nuxt UI comes with a set of Vue composables to easily handle shortcuts."
        />
      </CardWrapper>
    </div>
  </section>
</template>

<script setup>
import CardWrapper from '~/components/Cards/CardHoverEffect.vue';
import CardContent from '~/components/Cards/CardContent.vue';
</script>
