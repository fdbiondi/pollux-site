<template>
  <div class="w-full">
    <!-- Our services -->
    <section
      id="services"
      class="bg-white py-8 dark:bg-black-light lg:py-16 xl:py-24"
    >
      <CardList
        :items="servicesTypes"
        :section-title="SERVICES_SECTION_TITLE"
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

    <!-- Our partners -->
    <section
      id="partners"
      class="bg-white py-4 brightness-110 dark:bg-gray-800 lg:py-8 xl:py-16"
    >
      <div class="container mx-auto px-6">
        <div v-show="false" class="mb-1 text-center">
          <h4 class="font-serif font-medium">TRUSTED BY</h4>
        </div>

        <ImageList class="partners mb-6" :images="partners" :has-link="true" />

        <hr
          class="mx-16 border-t border-solid border-gray-900 dark:border-white"
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

<script>
import BackgroundCodeHtml from '~/components/Layout/Background/CodeHtml'
import CardGradient from '~/components/Common/Cards/CardGradient'
import CardList from '~/components/Sections/CardList'
import ContactForm from '~/components/Forms/ContactForm'
import ImageList from '~/components/Common/List/ImageList'
import TalkWithUs from '~/components/Texts/TalkWithUs'
import Tools from '~/components/Tools'

import {
  servicesCategories,
  servicesTypes,
  SERVICES_SECTION_TITLE,
} from '~/support/constants/home'
import { loadPartners } from '~/support/files'

export default {
  components: {
    BackgroundCodeHtml,
    CardGradient,
    CardList,
    ContactForm,
    ImageList,
    TalkWithUs,
    Tools,
  },

  data() {
    return {
      SERVICES_SECTION_TITLE,
      servicesCategories,
      servicesTypes,

      partners: loadPartners(),
    }
  },
}
</script>

<style lang="scss" scoped>
.ruler {
  width: 100vw;
  position: fixed;
  height: 2px;
  background-color: white;
  transform: rotate(-8.5deg);
  bottom: 15%;
  z-index: 100;
}

.anim-gradient {
  --section-height: 58rem;
  --gradient-color-1: theme('colors.pollux-pink.DEFAULT');
  --gradient-color-2: theme('colors.pollux-cyan.DEFAULT');
  --gradient-color-3: theme('colors.purple.500');
  --gradient-color-4: theme('colors.gray.300');

  .anim-gradient--tilt {
    @apply absolute right-0 top-0 overflow-hidden;
    line-height: 0;
  }

  /* Polygon Shape */
  .anim-gradient--tilt svg {
    @apply relative block w-full;
    height: var(--section-height);
    z-index: 11;
  }
}

.partners {
  ::v-deep img {
    @apply dark:brightness-200 dark:drop-shadow-none;

    /* fix for classes -> grayscale drop-shadow-tight */
    filter: grayscale(1) drop-shadow(0 2px 1px rgb(0 0 0 / 0.2))
      drop-shadow(0 2px 2px rgb(0 0 0 / 0.5));
  }
}
</style>
