<template>
  <main>
    <LoaderEffect
      :target="hero"
      mask-effect
      focus-point
      disable-on-scroll
      load-effect
    >
      <AppHeader />

      <section
        class="hero--wrapper z-20 flex cursor-none items-center py-8 lg:py-16 xl:py-24"
      >
        <div
          class="container mx-auto flex w-full items-center justify-center px-6 pb-16 text-center"
        >
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
              We are a software company dedicated to build custom web and mobile
              applications
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
    </LoaderEffect>

    <!-- Our clients -->
    <Wrapper
      id="clients"
      class="py-8 lg:py-16 xl:py-24"
    >
      <ClientsList class="container mx-auto px-6" />
    </Wrapper>

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
                You want to improve your processes, serve more customers, and
                grow your business with cutting-edge technology? We know how to
                get you there.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <BlockDivider />

    <BlockSticky>
      <template #heading>
        <CardSimple>
          <template #label>
            <span>01</span>
          </template>
          <template #heading>
            <span>Qualifications & Experience</span>
          </template>
        </CardSimple>
      </template>

      <div class="lists">
        <ul
          class="typography js-typography lists__typography"
          data-id="b9d46722"
        >
          <li>4+ years of experience as a frontend or full-stack developer</li>
          <li>3+ years of experience in react</li>
          <li>
            ability to handle new projects as well as improve existing ones
          </li>
          <li>a good understanding of the web and browsers</li>
          <li>excellent command of english</li>
          <li>
            experience with hands-on, cross-functional product teams and short
            feedback loops is a big plus
          </li>
          <li>previous experience within the financial sector is a plus</li>
          <li>4+ years of experience as a frontend or full-stack developer</li>
          <li>3+ years of experience in react</li>
          <li>
            ability to handle new projects as well as improve existing ones
          </li>
          <li>a good understanding of the web and browsers</li>
          <li>excellent command of english</li>
          <li>
            experience with hands-on, cross-functional product teams and short
            feedback loops is a big plus
          </li>
          <li>previous experience within the financial sector is a plus</li>
        </ul>
      </div>
    </BlockSticky>

    <!-- Talk to us / Contact Form -->
    <ContactForm id="contact" />

    <BackgroundCodeHtml />
  </main>

  <AppFooter />
</template>

<script setup>
import { ref } from 'vue';

import { AppHeader, AppFooter } from '~/components/Layout';
import BackgroundCodeHtml from '~/components/Sections/BackgroundCodeHtml';
import ContactForm from '~/components/Forms/ContactForm/ContactForm.vue';
import LoaderEffect from '~/components/Utilities/LoaderEffect';
import ClientsList from '~/components/Sections/ClientsList';

import BlockSticky from '~/components/Blocks/BlockSticky.vue';
import BlockDivider from '~/components/Blocks/BlockDivider.vue';
import Wrapper from '~/components/Layout/Wrapper.vue';
import CardSimple from '~/components/Cards/CardSimple.vue';

const hero = ref(null);
</script>
