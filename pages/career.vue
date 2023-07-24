<template>
  <div class="w-full">
    <div class="container mx-auto flex flex-wrap items-center pb-24">
      <section class="py-8 font-stylish lg:py-12 xl:py-16">
        <div class="container mx-auto px-32 text-center">
          <h2 class="title">
            Career / Get On Board
          </h2>

          <h4 class="subtitle">
            We have a passion for the digital world, enthusiasm for technology,
            and a really great team. We are Pollux.
            <span class="font-bold">Nice to meet you!</span>
          </h4>

          <CareerForm />
        </div>
      </section>
    </div>

    <section class="overflow-hidden max-h-[20vh] w-full">
      <canvas
        id="gradient-canvas"
        :width="1920 * 4"
        :height="1080"
      />
    </section>
  </div>
</template>

<script setup>
import { Gradient } from 'anim-gradient';
import { onMounted } from 'vue';

import CareerForm from '~/components/Forms/CareerForm';

definePageMeta({ layout: 'no-hero' });

onMounted(() => {
  const g = new Gradient();
  g.initGradient('#gradient-canvas');
});
</script>

<style lang="scss" scoped>
#gradient-canvas {
  --gradient-color-1: #6ec3f4;
  --gradient-color-2: #3a3aff;
  --gradient-color-3: #ff61ab;
  --gradient-color-4: #e63946;
}

.subtitle {
  @apply text-4xl font-normal leading-relaxed;
}
</style>
