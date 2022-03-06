<template>
  <div class="bg-white dark:bg-black-light">
    <div class="text-black-light dark:text-white">
      <!-- Logo's Section -->
      <div class="flex h-screen w-full items-center justify-center py-24">
        <div class="flex w-1/2 flex-col flex-wrap justify-center">
          <Logo class="mx-auto my-4" size="small" />
          <Logo class="mx-auto my-4" size="medium" />
          <Logo class="mx-auto my-4" size="large" />
        </div>

        <div class="flex w-1/2 justify-center">
          <h4 class="route--underline font-pollux">Pollux fonts samples</h4>
        </div>
      </div>

      <!-- Fonts Section -->
      <div class="container mx-auto flex flex-wrap items-center py-24">
        <div class="w-full">
          <div
            class="text-right font-mono"
            data-aos="zoom-in-up"
            data-aos-once="true"
          >
            <h2>Pollux</h2>

            <p>
              Scale fast your business with expert software engineering teams.
            </p>
          </div>

          <div
            class="text-right font-serif"
            data-aos="zoom-in-up"
            data-aos-once="true"
          >
            <h2>Pollux</h2>

            <p>
              Scale fast your business with expert software engineering teams.
            </p>
          </div>

          <div
            class="text-right font-pollux"
            data-aos="zoom-in-up"
            data-aos-once="true"
          >
            <h2>Pollux</h2>

            <p>
              Scale fast your business with expert software engineering teams.
            </p>
          </div>
        </div>

        <!-- Color Palette Section -->
        <div class="my-24 w-full">
          <div
            class="text-center font-serif"
            data-aos="zoom-in-up"
            data-aos-once="true"
          >
            <h3 class="text-7xl">Color Palette</h3>

            <div class="m-4 flex items-center justify-center gap-1 p-4">
              <div class="h-12 w-12 bg-pollux-cyan-50"></div>
              <div class="h-12 w-12 bg-pollux-cyan-100"></div>
              <div class="h-12 w-12 bg-pollux-cyan-200"></div>
              <div class="h-12 w-12 bg-pollux-cyan-300"></div>
              <div class="h-12 w-12 bg-pollux-cyan-400"></div>
              <div class="h-12 w-12 bg-pollux-cyan-500"></div>
              <div class="h-12 w-12 bg-pollux-cyan-600"></div>
              <div class="h-12 w-12 bg-pollux-cyan-700"></div>
              <div class="h-12 w-12 bg-pollux-cyan-800"></div>
              <div class="h-12 w-12 bg-pollux-cyan-900"></div>
              <div class="h-12 w-12 bg-pollux-cyan-A100"></div>
              <div class="h-12 w-12 bg-pollux-cyan-A200"></div>
              <div class="h-12 w-12 bg-pollux-cyan-A300"></div>
              <div class="h-12 w-12 bg-pollux-cyan-A400"></div>
              <div class="h-12 w-12 bg-pollux-cyan-light"></div>
              <div class="h-12 w-12 bg-pollux-cyan-dark"></div>
            </div>
            <div class="m-4 flex items-center justify-center gap-1 p-4">
              <div class="h-12 w-12 bg-pollux-pink-50"></div>
              <div class="h-12 w-12 bg-pollux-pink-100"></div>
              <div class="h-12 w-12 bg-pollux-pink-200"></div>
              <div class="h-12 w-12 bg-pollux-pink-300"></div>
              <div class="h-12 w-12 bg-pollux-pink-400"></div>
              <div class="h-12 w-12 bg-pollux-pink-500"></div>
              <div class="h-12 w-12 bg-pollux-pink-600"></div>
              <div class="h-12 w-12 bg-pollux-pink-700"></div>
              <div class="h-12 w-12 bg-pollux-pink-800"></div>
              <div class="h-12 w-12 bg-pollux-pink-900"></div>
              <div class="h-12 w-12 bg-pollux-pink-A100"></div>
              <div class="h-12 w-12 bg-pollux-pink-A200"></div>
              <div class="h-12 w-12 bg-pollux-pink-A300"></div>
              <div class="h-12 w-12 bg-pollux-pink-A400"></div>
              <div class="h-12 w-12 bg-pollux-pink-light"></div>
              <div class="h-12 w-12 bg-pollux-pink-dark"></div>
            </div>
          </div>
        </div>

        <div class="flex w-full flex-row flex-wrap justify-end">
          <div class="p-6 text-white">
            <a
              target="_blank"
              href="https://icons8.com/icon/HKUjzhHqqOJK/client"
            >
              Client
            </a>
            icon by <a target="_blank" href="https://icons8.com">Icons8</a>
          </div>
        </div>
      </div>
    </div>

    <BackgroundCodeHtml />
  </div>
</template>

<script>
import BackgroundCodeHtml from '~/components/Layout/Background/CodeHtml'
import Logo from '~/components/Common/Logo'

export default {
  components: {
    BackgroundCodeHtml,
    Logo,
  },

  layout: 'empty',
}
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
