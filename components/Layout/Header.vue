<template>
  <header
    id="header"
    ref="header"
    role="banner"
    :style="stickAtTop ? `height: ${offset}px` : ''"
  >
    <div
      :class="{
        'sticky z-50 w-full bg-gray-200 shadow-md dark:bg-black md:fixed':
          stickAtTop,
      }"
    >
      <nav
        role="navigation"
        class="container mx-auto flex items-center justify-between px-6 py-4"
      >
        <nuxt-link to="/">
          <Logo
            size="small"
            :show-text="!stickAtTop"
            :use-color-logo="stickAtTop"
            :custom-size="stickAtTop ? 'h-12 w-12' : null"
          />
        </nuxt-link>

        <div class="z-30 flex items-center">
          <div
            v-if="!mobileMenuOpened"
            class="hidden text-lg text-white 2xl:flex"
          >
            <a
              v-for="(link, index) in links"
              :key="`nav-item-link-${index}`"
              :href="link.href"
              class="nav-item route--underline"
            >
              {{ link.label }}
            </a>

            <LanguageSwitch v-show="false" />
            <ThemeSwitch />
          </div>

          <MobileMenu
            class="block 2xl:hidden"
            :links="links"
            @menu:open="mobileMenuOpened = $event"
          />
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import LanguageSwitch from '~/components/Common/Buttons/LanguageSwitch';
import ThemeSwitch from '~/components/Common/Buttons/ThemeSwitch';
import Logo from '~/components/Common/Logo';
import MobileMenu from '~/components/Layout/MobileMenu';

export default {
  components: {
    LanguageSwitch,
    Logo,
    ThemeSwitch,
    MobileMenu,
  },

  data() {
    return {
      offset: 0,
      stickAtTop: false,
      mobileMenuOpened: false,
      links: [
        { href: '#services', label: 'Services' },
        { href: '#clients', label: 'Our Clients' },
        // { href: '/about', label: 'About Us' },
        { href: '#contact', label: 'Contact Us' },
      ],
    };
  },

  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },

  mounted() {
    this.offset = this.$refs.header.clientHeight ?? 72;
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll() {
      if (window.pageYOffset > this.offset) {
        this.stickAtTop = true;
      } else {
        this.stickAtTop = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-item {
  @apply mr-12 block lg:inline-block;

  /* fix for drop-shadow-tight */
  filter: drop-shadow(0 2px 1px rgb(0 0 0 / 20%))
    drop-shadow(0 2px 2px rgb(0 0 0 / 50%));
}

@keyframes slide-down {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
}

.sticky {
  animation: slide-down 0.5s ease-in-out;
}
</style>
