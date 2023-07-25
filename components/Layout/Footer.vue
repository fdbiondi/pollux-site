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

          <span />

          <a
            href="https://www.instagram.com/polluxcoop/"
            target="_blank"
          >
            <fa-icon
              :icon="['fab', 'instagram']"
              class="footer-icon"
            />
          </a>
          <a
            href="https://ar.linkedin.com/company/polluxcoop"
            target="_blank"
          >
            <fa-icon
              :icon="['fab', 'linkedin-in']"
              class="footer-icon"
            />
          </a>

          <span />
        </div>
      </div>

      <div class="flex flex-col flex-wrap lg:flex-row">
        <div class="w-full p-6 text-xl leading-loose sm:px-10 lg:w-1/3 lg:p-6 xl:w-1/4">
          <div class="line-block" />

          {{ POLLUX_COOP }}
          <br />

          {{ ADDRESS }}
          <br />

          {{ CITY }}
          <br />

          {{ STATE }}
          <br />
          <br />

          {{ EMAIL }}
          <br />

          {{ PHONE }}
          <br />
        </div>

        <div
          class="flex w-full flex-col justify-around lg:w-1/3 lg:flex-row xl:w-1/2"
        >
          <div class="flex flex-col p-6 sm:px-10 lg:p-6">
            <div class="line-block" />

            <a
              v-for="item in firstColumn"
              :key="`first-col-${item.name}`"
              :href="item.href"
              class="route route--underline mr-auto"
            >
              {{ item.name }}
            </a>
          </div>

          <div
            v-if="false"
            class="flex flex-col p-6 sm:px-10 lg:p-6"
          >
            <div class="line-block" />

            <a
              v-for="item in secondColumn"
              :key="`second-col-${item.name}`"
              :href="item.href"
              class="route route--underline mr-auto"
            >
              {{ item.name }}
            </a>
          </div>
        </div>

        <div
          class="w-full px-6 py-8 flex flex-col items-center justify-between lg:w-1/3 lg:items-end xl:w-1/4"
        >
          <ImageList
            class="partners m-0 justify-between"
            :images="partners"
            :has-link="true"
          />

          <a
            :href="isoLink"
            target="_blank"
          >
            <img
              :src="isoImage"
              alt="ISO 9001 certification"
              class="w-40 mt-10 lg:mt-0"
            />
          </a>
        </div>
      </div>

      <div class="p-6">
        <div
          class="border-t border-gray-800 pt-4 text-sm dark:border-gray-200 lg:text-xs"
        >
          <div class="flex justify-between">
            <span>
              {{ COPYRIGHT }} {{ COMPANY }} |
              <nuxt-link
                to="privacy-policy"
                class="hover:underline"
              >
                {{ PRIVACY_POLICY }}
              </nuxt-link>
            </span>

            <span class="hidden lg:block">
              Gradient icons by
              <a
                target="_blank"
                href="https://icons8.com"
              >
                Icons8
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Logo from '~/components/Common/Logo';
import ImageList from '~/components/Common/List/ImageList';
import { sitemap } from '~/support/constants';
import {
  ADDRESS,
  COMPANY,
  COPYRIGHT,
  PRIVACY_POLICY,
  POLLUX_COOP,
  CITY,
  STATE,
  EMAIL,
  PHONE,
} from '~/support/constants/info';
import { getFromContext } from '~/support/files';
import isoImage from '~/assets/images/bureau';

const isoLink = 'https://bureauveritas.com.ar';
const LETS_CONNECT = `Let's connect`;

const firstColumn = sitemap.firstColumn;
const secondColumn = sitemap.secondColumn;

const glob = import.meta.glob('~/assets/images/partners/*.*', { eager: true });
const partners = getFromContext(glob, '.*', (src) => {
  return {
    src: glob[src].default,
  };
});
</script>

<style lang="scss" scoped>
.footer {
  &-icon {
    @apply cursor-pointer text-3xl;

    &:hover {
      @apply origin-center scale-105 text-black-light;

      transition:
        transform 200ms,
        scale 100ms;
    }
  }
}

html.dark .footer-icon:hover {
  @apply text-white;
}

.partners {
  :deep(div) {
    @apply p-1 mx-1;

    img {
      filter: grayscale(1) invert(0.2);

      &:hover {
        cursor: pointer;
        filter: saturate(2) drop-shadow(0 2px 1px rgb(0 0 0 / 20%))
          drop-shadow(0 2px 2px rgb(0 0 0 / 50%));
        transform: scaleX(1.05) scaleY(1.05);
      }
    }
  }
}
</style>
