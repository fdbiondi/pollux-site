<template>
  <LoaderEffect
    :target="hero"
    mask-effect
    focus-point
    disable-on-scroll
    load-effect
  >
    <div class="relative">
      <AppHeader />

      <main
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
              <!-- <h1 class="hero--title tracking-wider !text-[#015270]"> -->
              <h1 class="hero--title tracking-wider !text-pollux-pink">
                <span>SOFTWARE SOLUTIONS</span>
              </h1>
              <p class="hero--title">
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
  </LoaderEffect>

  <!-- Our clients -->
  <section
    id="clients"
    class="bg-white py-8 dark:bg-black-light lg:py-16 xl:py-24"
  >
    <div class="container mx-auto px-6">
      <ImageList
        class="clients mb-6"
        :images="clients"
        :has-link="true"
      />

      <hr
        class="mx-16 border-t border-solid border-gray-800 dark:border-white"
      />
    </div>
  </section>

  <section
    id="services"
    class="bg-white py-8 dark:bg-black-light lg:py-16 xl:py-24"
  >
    <CardList
      :items="servicesTypes"
      :title="SERVICES_SECTION_TITLE"
    />
  </section>

  <!-- Technologies that we use -->
  <!-- <Tools class="bg-white dark:bg-black-light" /> -->

  <!-- What we offer -->
  <section
    id="what-we-offer"
    class="bg-white py-16 dark:bg-black-light lg:py-24 xl:py-32"
  >
    <div class="container mx-auto px-4 sm:px-4 md:px-2">
      <ul
        role="list"
        class="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-12 lg:gap-y-16"
      >
        <CardGradient
          v-for="(item, index) in servicesCategories"
          :key="`card-gradient-${index}`"
          :title="item.title"
          :description="item.description"
        />
      </ul>
    </div>
  </section>

  <!-- Talk to us / Contact Form -->
  <section
    id="contact"
    class="bg-gray-200 py-8 shadow-inner shadow-black-light/20 dark:bg-black-light dark:shadow-gray-800/20 lg:py-16 xl:py-32"
  >
    <ContactForm>
      <TalkWithUs />
    </ContactForm>
  </section>

  <BackgroundCodeHtml />

  <AppFooter class="bg-white dark:bg-black-light" />
</template>

<script setup>
import { ref } from 'vue';

import { AppHeader, AppFooter } from '~/components/Layout';

import CardGradient from '~/components/Common/Cards/CardGradient';
import ImageList from '~/components/Common/List/ImageList';
import ContactForm from '~/components/Forms/ContactForm';
import BackgroundCodeHtml from '~/components/Layout/Background/CodeHtml';
import CardList from '~/components/Sections/CardList';
// import Tools from '~/components/Sections/Tools';
import TalkWithUs from '~/components/Texts/TalkWithUs';
import LoaderEffect from '~/components/Utilities/LoaderEffect.vue';

import {
  servicesCategories,
  servicesTypes,
  SERVICES_SECTION_TITLE,
} from '~/support/constants/home';
import { getFromContext } from '~/support/files';

const glob = import.meta.glob('~/assets/images/clients/*.*', { eager: true });
const clients = getFromContext(glob, '.*', (src) => {
  return {
    src: glob[src].default,
  };
});

definePageMeta({ layout: 'empty' });

const hero = ref(null);
</script>

<style lang="scss" scoped>
.clients :deep(img) {
  @apply scale-110 brightness-200 drop-shadow-none;

  /* fix for classes -> grayscale drop-shadow-tight */
  filter: grayscale(1) invert(0.2) drop-shadow(0 2px 1px rgb(0 0 0 / 20%))
    drop-shadow(0 2px 2px rgb(0 0 0 / 50%));

  &:hover {
    filter: saturate(1.5) drop-shadow(0 2px 1px rgb(0 0 0 / 20%))
      drop-shadow(0 2px 2px rgb(0 0 0 / 50%));
    transform: scaleX(1.2) scaleY(1.2);
  }
}
</style>
