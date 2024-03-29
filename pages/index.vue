<template>
  <div class="w-full">
    <!-- Our services -->
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
    <Tools class="bg-white dark:bg-black-light" />

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

    <!-- Our clients -->
    <section
      id="clients"
      class="bg-white py-8 brightness-105 dark:bg-black-light lg:py-16 xl:py-24"
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
  </div>
</template>

<script setup>
import CardGradient from '~/components/Common/Cards/CardGradient';
import ImageList from '~/components/Common/List/ImageList';
import ContactForm from '~/components/Forms/ContactForm';
import BackgroundCodeHtml from '~/components/Layout/Background/CodeHtml';
import CardList from '~/components/Sections/CardList';
import Tools from '~/components/Sections/Tools';
import TalkWithUs from '~/components/Texts/TalkWithUs';

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
