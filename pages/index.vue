<template>
  <div class="w-full">
    <!-- Our services -->
    <section
      id="services"
      class="bg-white py-8 dark:bg-black-light lg:py-16 xl:py-24"
    >
      <CardList :items="services" :section-title="servicesSectionTitle" />
    </section>

    <!-- Technologies that we use -->
    <Tools class="bg-white dark:bg-black-light" />

    <!-- Let's connect => to contact form -->
    <section v-show="false">
      <AnimatedGradient class="anim-gradient">
        <template #tilt>
          <div class="anim-gradient--tilt">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 120"
              preserveAspectRatio="none"
            >
              <path
                d="M 0,0 L0,120 L-1235,120 L1370,0 z"
                class="fill-white dark:fill-black-light"
              ></path>
            </svg>
          </div>
        </template>

        <div class="absolute w-full font-serif">
          <FullBannerTitle
            link="#contact"
            :link-text="tellUsAbout"
            :upper-title="readyForThis"
            :title="letBuild"
          />
        </div>
      </AnimatedGradient>
    </section>

    <!-- Dev & Design -->
    <section
      class="bg-gray-100 shadow-inner shadow-black-light/40 dark:bg-black-light dark:shadow-white/5 dark:brightness-110"
    >
      <CardColumns :items="development" :right-items="design" />
    </section>

    <!-- Our partners -->
    <section
      class="bg-gray-400 py-4 brightness-110 dark:bg-gray-900 lg:py-8 xl:py-16"
    >
      <div class="container mx-auto px-6">
        <div v-show="false" class="mb-1 text-center">
          <h4 class="font-serif font-medium">TRUSTED BY</h4>
        </div>

        <ImageList class="mb-6" :images="partners" :has-link="true" />

        <hr
          class="mx-16 border-t border-solid border-gray-900 dark:border-white"
        />
      </div>
    </section>

    <!-- Talk to us / Contact Form -->
    <section
      id="contact"
      class="bg-gray-100 py-8 shadow-inner shadow-black-light/20 dark:bg-black-light dark:shadow-gray-800/20 lg:py-16 xl:py-32"
    >
      <ContactForm>
        <TalkWithUs />
      </ContactForm>
    </section>

    <BackgroundCodeHtml />
  </div>
</template>

<script>
import ImageList from '~/components/Common/List/ImageList'
import AnimatedGradient from '~/components/Common/UI/AnimatedGradient'
import ContactForm from '~/components/Forms/ContactForm'
import BackgroundCodeHtml from '~/components/Layout/Background/CodeHtml'
import CardColumns from '~/components/Sections/CardColumns'
import CardList from '~/components/Sections/CardList'
import FullBannerTitle from '~/components/Texts/FullBannerTitle'
import TalkWithUs from '~/components/Texts/TalkWithUs'
import Tools from '~/components/Tools'

import {
  design,
  development,
  services,
  servicesSectionTitle,
} from '~/support/constants/home'
import { loadPartners } from '~/support/files'

const tellUsAbout = 'Tell us about your project'
const readyForThis = 'Ready for this?'
const letBuild = 'Let Build a Great Product!'

export default {
  components: {
    AnimatedGradient,
    BackgroundCodeHtml,
    CardColumns,
    CardList,
    ContactForm,
    ImageList,
    FullBannerTitle,
    TalkWithUs,
    Tools,
  },

  data() {
    return {
      // Our services
      services,
      servicesSectionTitle,
      // Dev & Design
      design,
      development,
      // Partners
      partners: [],
      // Let's Connect Banner
      tellUsAbout,
      readyForThis,
      letBuild,
    }
  },

  mounted() {
    this.partners = loadPartners()
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
    @apply absolute top-0 right-0 overflow-hidden;
    line-height: 0;
  }

  /* Polygon Shape */
  .anim-gradient--tilt svg {
    @apply relative block w-full;
    height: var(--section-height);
    z-index: 11;
  }
}
</style>
