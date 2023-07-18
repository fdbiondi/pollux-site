<template>
  <footer class="py-8 shadow-inner shadow-black-light/40 lg:py-16 xl:py-32">
    <div class="container mx-auto flex flex-col">
      <div class="mb-6 flex">
        <div class="hidden w-1/4 p-6 lg:block">
          <Logo />
        </div>

        <div
          class="flex w-full flex-wrap items-center justify-around p-6 lg:w-3/4"
        >
          <span class="hidden font-stylish text-2xl tracking-widest sm:block">
            {{ LETS_CONNECT }}
          </span>

          <fa-icon :icon="['fab', 'twitter']" class="footer--icon" />
          <fa-icon :icon="['fab', 'instagram']" class="footer--icon" />
          <fa-icon :icon="['fab', 'square-facebook']" class="footer--icon" />
          <fa-icon :icon="['fab', 'github']" class="footer--icon" />
          <fa-icon :icon="['fab', 'linkedin-in']" class="footer--icon" />
        </div>
      </div>

      <div class="flex flex-col flex-wrap lg:flex-row">
        <div class="w-full p-6 text-xl leading-loose sm:px-10 lg:w-1/4 lg:p-6">
          <div class="line-block" />

          {{ POLLUX_COOP }}<br />

          {{ CITY }}<br />

          {{ STATE }}<br /><br />

          {{ EMAIL }}<br />

          {{ PHONE }}<br />
        </div>

        <div
          class="flex w-full flex-col justify-around lg:w-3/4 lg:flex-row 2xl:w-1/2"
        >
          <div class="flex flex-col p-6 sm:px-10 lg:p-6">
            <div class="line-block"></div>

            <a
              v-for="item in firstColumn"
              :key="item.name"
              :href="item.href"
              class="route route--underline mr-auto"
            >
              {{ item.name }}
            </a>
          </div>

          <div v-if="false" class="flex flex-col p-6 sm:px-10 lg:p-6">
            <div class="line-block"></div>

            <a
              v-for="item in secondColumn"
              :key="item.name"
              :href="item.href"
              class="route route--underline mr-auto"
            >
              {{ item.name }}
            </a>
          </div>
        </div>

        <div class="w-full lg:w-1/4 py-8">
          <div v-if="false" class="text-center mb-1">
            <h4 class="font-serif font-medium uppercase">trusted by</h4>
          </div>

          <ImageList
            class="partners my-4"
            :images="partners"
            :has-link="true"
          />
        </div>
      </div>

      <div class="p-6">
        <div
          class="border-t border-gray-800 pt-4 text-sm dark:border-gray-200 lg:text-xs"
        >
          <div class="flex justify-between">
            <span>
              {{ COPYRIGHT }} {{ COMPANY }} |
              <nuxt-link to="privacy-policy" class="hover:underline">
                {{ PRIVACY_POLICY }}
              </nuxt-link>
            </span>

            <span class="hidden lg:block">
              Gradient icons by
              <a target="_blank" href="https://icons8.com">Icons8</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from '~/components/Common/Logo'
import ImageList from '~/components/Common/List/ImageList'
import { sitemap } from '~/support/constants'
import {
  COMPANY,
  COPYRIGHT,
  PRIVACY_POLICY,
  POLLUX_COOP,
  CITY,
  STATE,
  EMAIL,
  PHONE,
} from '~/support/constants/info'
import { loadPartners } from '~/support/files'

export const LETS_CONNECT = `Let's connect`

export default {
  components: {
    ImageList,
    Logo,
  },

  data() {
    return {
      firstColumn: sitemap.firstColumn,
      secondColumn: sitemap.secondColumn,
      partners: loadPartners(),

      LETS_CONNECT,
      COMPANY,
      COPYRIGHT,
      PRIVACY_POLICY,
      POLLUX_COOP,
      CITY,
      STATE,
      EMAIL,
      PHONE,
    }
  },
}
</script>

<style lang="scss" scoped>
.footer {
  &--icon {
    @apply cursor-pointer text-3xl;

    &:hover {
      @apply origin-center scale-105 text-black-light dark:text-white;
      transition:
        transform 200ms,
        scale 100ms;
    }
  }
}

.partners {
  ::v-deep div {
    @apply p-2;

    img {
      filter: grayscale(1) invert(0.2);

      &:hover {
        filter: none;
        transform: scaleX(1.05) scaleY(1.05)
      }
    }
  }
}
</style>
