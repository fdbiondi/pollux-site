<template>
  <header
    id="header"
    ref="header"
    role="banner"
    :class="{ sticking }"
    :style="{ '--min-height': `${headerMinHeight}px` }"
  >
    <div
      class="header-content"
      :class="{
        'sticky z-50 w-full bg-white shadow-md dark:bg-black md:fixed':
          sticking,
      }"
    >
      <nav
        role="navigation"
        class="container mx-auto flex items-center justify-between px-6 py-4"
      >
        <nuxt-link to="/">
          <!-- :show-text="!sticking" -->
          <!-- :use-color-logo="sticking" -->
          <Logo
            size="small"
            show-text
            :custom-size="sticking ? 'h-12 w-12' : null"
          />
        </nuxt-link>

        <div class="z-30 flex items-center">
          <div
            v-if="!mobileMenuOpened"
            class="text-pollux-gray-dark hidden font-mono text-lg dark:text-white 2xl:flex"
          >
            <a
              v-for="(link, index) in links"
              :key="`nav-item-link-${index}`"
              :href="link.href"
              class="nav-item route--underline"
            >
              {{ link.label }}
            </a>

            <LanguageSwitch v-if="false" />
            <ThemeSwitch v-if="false" />
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

<script setup>
import LanguageSwitch from '~/components/Common/LanguageSwitch';
import ThemeSwitch from '~/components/Common/ThemeSwitch';
import Logo from '~/components/Common/Logo';
import MobileMenu from '~/components/Layout/MobileMenu';

const mobileMenuOpened = ref(false);
const links = [
  { href: '#services', label: 'Services' },
  { href: '#clients', label: 'Our Clients' },
  // { href: '/about', label: 'About Us' },
  { href: '#contact', label: 'Contact Us' },
];

const sticking = ref(false);
const header = ref();
const headerMinHeight = ref(0);

onMounted(() => {
  headerMinHeight.value = header.value.clientHeight ?? 72;
  const intercept = document.createElement('div');

  console.log(window.pageYOffset, 'onMounted');

  intercept.setAttribute('data-observer-intercept', '');
  header.value.before(intercept);

  const observer = new IntersectionObserver(
    ([entry]) => {
      sticking.value = !entry.isIntersecting;
      // header.classList.toggle('sticking', !entry.isIntersecting);
    },
    { rootMargin: '200px 0px 0px 0px' },
  );

  observer.observe(intercept);
});
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

header.sticking {
  min-height: var(--min-height);
}

.header-content {
  transition: background-color 500ms ease-in-out;

  &.sticky {
    animation: slide-down 700ms ease-in-out;
  }
}
</style>
