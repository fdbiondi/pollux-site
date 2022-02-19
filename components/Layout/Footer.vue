<template>
  <footer class="py-8 shadow-inner shadow-black-light/40 lg:py-16 xl:py-32">
    <div class="container mx-auto flex flex-col">
      <div class="mb-6 flex">
        <div class="w-1/4 p-6">
          <Logo />
        </div>

        <div class="flex w-3/4 flex-wrap items-center justify-around p-6">
          <span class="font-stylish text-2xl tracking-widest">
            {{ letsConnect }}
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

      <div class="flex">
        <div class="w-1/4 p-6 text-xl leading-loose">
          <div class="line-block"></div>

          {{ info.company }}<br />

          {{ info.city }}<br />

          {{ info.state }}<br /><br />

          {{ info.email }}<br />

          {{ info.phone }}<br />
        </div>

        <div class="flex w-1/2 justify-around">
          <div class="flex flex-col p-6">
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

          <div class="flex flex-col p-6">
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
        <div class="border-t border-gray-800 pt-4 text-xs dark:border-gray-200">
          <div class="flex justify-between">
            <span>
              Copyright © 2022 <span @click="bonus">{{ company }}</span> |
              Privacy policy
            </span>

            <span>
              <a
                target="_blank"
                href="https://icons8.com/icon/HKUjzhHqqOJK/client"
              >
                Client
              </a>
              icon by <a target="_blank" href="https://icons8.com">Icons8</a>
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

const letsConnect = `Let's connect`
const company = 'Pollux'
const info = {
  company: 'Pollux Cooperative',
  city: '2000 Rosario',
  state: 'Santa Fe, Argentina',
  email: 'hello@polluxcoop.com',
  phone: '+54 934 1111 0000',
}

const siteMap = {
  firstColumn: [
    {
      href: '#',
      name: 'About',
    },
    {
      href: '#',
      name: 'Services',
    },
    {
      href: '#',
      name: 'Career',
    },
    {
      href: '#',
      name: 'Our Clients',
    },
  ],
  secondColumn: [
    {
      href: '#',
      name: 'Contact',
    },
    {
      href: '#',
      name: 'Our Workflow',
    },
    {
      href: '#',
      name: 'Our Team',
    },
    {
      href: '#',
      name: 'Technologies',
    },
  ],
}

export default {
  components: {
    Logo,
  },

  data() {
    return {
      info,
      company,
      letsConnect,
      firstColumn: siteMap.firstColumn,
      secondColumn: siteMap.secondColumn,
    }
  },

  methods: {
    ...mapMutations(['bonus']),
  },
}
</script>

<style lang="scss" scoped>
.footer {
  &--icon {
    @apply cursor-pointer text-3xl;

    &:hover {
      @apply origin-center scale-105 text-black-light dark:text-white;
      transition: transform 200ms, scale 100ms;
    }
  }
}
</style>
