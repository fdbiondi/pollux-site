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

          <fa-icon :icon="['fab', 'twitter']" class="footer--icon"></fa-icon>
          <fa-icon :icon="['fab', 'instagram']" class="footer--icon"></fa-icon>
          <fa-icon
            :icon="['fab', 'facebook-square']"
            class="footer--icon"
          ></fa-icon>
          <fa-icon :icon="['fab', 'github']" class="footer--icon"></fa-icon>
          <fa-icon
            :icon="['fab', 'linkedin-in']"
            class="footer--icon"
          ></fa-icon>
        </div>
      </div>

      <div class="flex flex-col flex-wrap lg:flex-row">
        <div class="w-full p-6 text-xl leading-loose sm:px-10 lg:w-1/4 lg:p-6">
          <div class="line-block"></div>

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

          <div v-show="false" class="flex flex-col p-6 sm:px-10 lg:p-6">
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
      </div>

      <div class="p-6">
        <div
          class="border-t border-gray-800 pt-4 text-sm dark:border-gray-200 lg:text-xs"
        >
          <div class="flex justify-between">
            <span>
              {{ COPYRIGHT }} <span @click="bonus">{{ COMPANY }}</span> |
              <nuxt-link to="#" class="hover:underline">
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
import { mapMutations } from 'vuex'
import Logo from '~/components/Common/Logo'
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

export const LETS_CONNECT = `Let's connect`

export default {
  components: {
    Logo,
  },

  data() {
    return {
      firstColumn: sitemap.firstColumn,
      secondColumn: sitemap.secondColumn,

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

  methods: {
    ...mapMutations({
      bonus: 'BONUS',
    }),
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
</style>
