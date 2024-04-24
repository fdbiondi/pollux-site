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
        'z-50 w-full shadow-md md:fixed md:bg-white md:dark:bg-black': sticking,
      }"
    >
      <nav
        role="navigation"
        class="container mx-auto flex items-center justify-between px-6"
        :class="[sticking ? 'py-1' : 'py-4']"
      >
        <nuxt-link to="/">
          <Logo v-bind="logoProps" />
        </nuxt-link>

        <div class="z-30 flex items-center">
          <div
            v-if="!mobileMenuOpened"
            class="text-pollux-gray-dark hidden font-mono dark:text-white 2xl:flex"
            :class="[sticking ? 'text-base' : 'text-lg']"
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

const logoProps = ref({});

watch(sticking, (newValue) => {
  if (newValue) {
    logoProps.value = { kind: 'vertical', size: 'w-16 h-auto' };
  } else {
    logoProps.value = {};
  }
});

onMounted(() => {
  const intercept = document.createElement('div');

  intercept.setAttribute('data-observer-intercept', '');
  header.value.before(intercept);

  const observer = new IntersectionObserver(
    ([entry]) => {
      headerMinHeight.value = header.value.clientHeight;
      sticking.value = !entry.isIntersecting;
    },
    { rootMargin: '200px 0px 0px 0px' }
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

@keyframes sticky-out {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes sticky-in {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
}

header {
  transition: all 0.5s ease;

  &.sticking {
    min-height: var(--min-height);

    .header-content {
      animation: sticky-in 0.5s ease-in-out;
    }
  }

  .header-content {
    animation: sticky-out 0.5s ease-in-out;
    transition: all 0.5s ease;
  }
}
</style>
