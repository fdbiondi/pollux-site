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
              <h1 class="hero--title tracking-wider">
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
    class="py-8 lg:py-16 xl:py-24"
  >
    <ClientsList class="container mx-auto px-6" />
  </section>

  <!-- <section -->
  <!--   id="services" -->
  <!--   class="py-8 lg:py-16 xl:py-24" -->
  <!-- > -->
  <!--   <CardList -->
  <!--     :items="servicesTypes" -->
  <!--     :title="SERVICES_SECTION_TITLE" -->
  <!--   /> -->
  <!-- </section> -->

  <!-- What we offer -->
  <section
    id="what-we-offer"
    class="py-8 lg:py-16 xl:py-24"
  >
    <!-- class="py-16 lg:py-24 xl:py-32" -->
    <div class="container mx-auto">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-12">
        <div class="block-column">
          <div class="block-paragraph">
            <p class="">
              WE BUILD DIGITAL
              <br />
              PRODUCTS
            </p>
          </div>
        </div>

        <div class="block-column">
          <div class="block-heading">
            <h2 class="">
              Ready to take your ambitious project from intriguing idea to
              smashing success?
            </h2>
          </div>
        </div>

        <div class="block-column">
          <div class="block-paragraph">
            <p class="">
              You want to improve your processes, serve more customers, and grow
              your business with cutting-edge technology? We know how to get you
              there.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="container mx-auto px-4 sm:px-4 md:px-2"> -->
    <!--     <ul -->
    <!--       role="list" -->
    <!--       class="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-12 lg:gap-y-16" -->
    <!--     > -->
    <!--       <CardGradient -->
    <!--         v-for="(item, index) in servicesCategories" -->
    <!--         :key="`card-gradient-${index}`" -->
    <!--         :title="item.title" -->
    <!--         :description="item.description" -->
    <!--       /> -->
    <!--     </ul> -->
    <!-- </div> -->
  </section>

  <!-- Talk to us / Contact Form -->
  <section
    id="contact"
    class="py-8 shadow-inner shadow-black-light/20 dark:shadow-gray-800/20 lg:py-16 xl:py-32"
  >
    <ContactForm>
      <TalkWithUs />
    </ContactForm>
  </section>

  <BackgroundCodeHtml />

  <AppFooter />
</template>

<script setup>
import { ref } from 'vue';

import { AppHeader, AppFooter } from '~/components/Layout';
import BackgroundCodeHtml from '~/components/Sections/BackgroundCodeHtml';
import ContactForm from '~/components/Forms/ContactForm';
import LoaderEffect from '~/components/Utilities/LoaderEffect';
import TalkWithUs from '~/components/Sections/TalkWithUs';
import ClientsList from '~/components/Sections/ClientsList';

const hero = ref(null);
</script>
