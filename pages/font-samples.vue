<template>
  <div class="bg-white dark:bg-black-light">
    <div class="text-black-light dark:text-white">
      <!-- Fonts Section -->
      <div class="container mx-auto flex flex-wrap items-center pb-24">
        <div class="w-full">
          <div class="text-right font-mono">
            <h2>Pollux</h2>

            <p>
              Scale fast your business with expert software engineering teams.
            </p>
          </div>

          <div class="text-right font-serif">
            <h2>Pollux</h2>

            <p>
              Scale fast your business with expert software engineering teams.
            </p>
          </div>

          <div class="text-right font-pollux">
            <h2>Pollux</h2>

            <p>
              Scale fast your business with expert software engineering teams.
            </p>
          </div>
        </div>

        <div class="my-24 flex w-full items-center">
          <!-- Logo's Section -->
          <div
            class="flex w-1/2 flex-col items-center justify-center gap-y-6 py-24"
          >
            <Logo
              show-text
              size="large"
            />
            <Logo
              show-text
              size="medium"
            />
            <Logo
              show-text
              size="small"
            />
          </div>

          <!-- Color Palette Section -->
          <div
            class="w-1/2 text-center font-serif"
            data-aos="zoom-in-up"
            data-aos-once="true"
          >
            <h3 class="text-7xl">
              Color Palette
            </h3>

            <div
              v-for="color in colorPalette.colors"
              :key="`palette-pollux-${color}`"
              class="m-4 flex items-center justify-center gap-1 p-4"
            >
              <div
                v-for="tone in colorPalette.tones"
                :key="`palette-pollux-${color}-${tone}`"
                class="h-12 w-12"
                :class="[`bg-pollux-${color}-${tone}`]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Logo from '~/components/Common/Logo';

definePageMeta({
  layout: 'empty',

  middleware: [
    function() {
      return navigateTo('/404');
    },
  ],
});

const colorPalette = {
  colors: ['cyan', 'pink'],
  tones: [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    'A100',
    'A200',
    'A300',
    'A400',
    'light',
    'dark',
  ],
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 132px;
}

h4 {
  font-size: 50px;
  margin-bottom: 1.5rem;
}

p {
  font-size: 28px;
  margin-bottom: 1rem;
}
</style>
