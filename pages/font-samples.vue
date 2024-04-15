<template>
  <div
    class="relative bg-white text-black-light dark:bg-black-light dark:text-white"
  >
    <div class="container mx-auto flex flex-wrap items-center pb-24">
      <div class="w-full">
        <main
          v-for="(fontName, index) in ['mono', 'serif', 'sans']"
          :key="index"
          class="hero--wrapper relative z-20 flex cursor-none items-center py-8 lg:py-16 xl:py-24"
        >
          <section class="container mx-auto px-6 pb-16">
            <div class="flex w-full items-center justify-center text-center">
              <div
                ref="hero"
                class="hero--titles"
              >
                <h2 class="hero--title">
                  <span>We build awesome and custom</span>
                </h2>
                <h1
                  class="hero--title tracking-wider !text-pollux-pink"
                  :class="`!font-${fontName}`"
                >
                  <span>SOFTWARE SOLUTIONS</span>
                </h1>
                <p
                  class="hero--title"
                  :class="`!font-${fontName}`"
                >
                  We are a software company dedicated to build custom web and
                  mobile applications
                </p>

                <div
                  class="flex flex-col justify-center gap-2 sm:flex-row sm:gap-4"
                >
                  <nuxt-link
                    to="#what-we-offer"
                    class="cursor-none"
                  >
                    <button
                      class="button button-outline dark:button-outline-dark w-full cursor-none sm:w-auto"
                    >
                      Know More
                    </button>
                  </nuxt-link>
                  <nuxt-link
                    to="#contact"
                    class="cursor-none"
                  >
                    <button
                      class="button button-outline dark:button-outline-dark w-full cursor-none sm:w-auto"
                    >
                      Let's Connect
                    </button>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <div class="m-4 flex items-center justify-center gap-1 p-4">
        <div class="h-12 w-12 bg-pollux-cyan" />
        <div class="h-12 w-12 bg-pollux-cyan-light" />
        <div class="h-12 w-12 bg-pollux-cyan-dark" />
        <div class="h-12 w-12 bg-pollux-pink" />
        <div class="h-12 w-12 bg-pollux-pink-light" />
        <div class="h-12 w-12 bg-pollux-pink-dark" />
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
