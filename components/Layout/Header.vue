<template>
  <header>
    <nav class="container mx-auto flex items-center justify-between px-6 py-2">
      <a href="/">
        <logo />
      </a>

      <div class="z-20 flex items-center">
        <div class="hidden text-lg text-white 2xl:flex">
          <a href="#services" class="nav-item route--underline"> Services </a>
          <a href="#our-clients" class="nav-item route--underline">
            Our Clients
          </a>
          <a href="#about" class="nav-item route--underline"> About Us </a>
          <a href="#career" class="nav-item route--underline"> Career </a>

          <LanguageSwitch />
          <ThemeSwitch />
        </div>

        <div class="block 2xl:hidden">
          <div class="header__hamburger header__item h-align-left">
            <a
              href="#header"
              aria-label="Hamburger Menu"
              class="hamburger"
              :class="{ 'is-active': menuOpen }"
              @click="menuOpen = !menuOpen"
            >
              <div class="hamburger__slice"></div>
              <div class="hamburger__slice"></div>
            </a>
          </div>

          <!-- <button
            class="flex items-center rounded border border-gray-400 px-4 py-3 text-gray-200 focus:outline-none"
          >
            <svg
              class="h-3 w-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
           -->
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import LanguageSwitch from '~/components/Common/Buttons/LanguageSwitch'
import ThemeSwitch from '~/components/Common/Buttons/ThemeSwitch'
import Logo from '~/components/Common/Logo'

export default {
  components: {
    LanguageSwitch,
    Logo,
    ThemeSwitch,
  },

  data() {
    return {
      menuOpen: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.nav-item {
  @apply mr-12 block filter drop-shadow-tight lg:inline-block;
}

.hamburger {
  &__slice {
  }
}

.header__item {
  float: left;
  clear: none;
  text-align: inherit;
  width: 33.33333333333333%;
  margin-left: 0;
  margin-right: 0;
}

.header__hamburger {
  display: inline-block;
  padding-left: 0.875rem;
}

.header__hamburger .hamburger {
  display: block;
  width: 2rem;
  margin-right: 1.25rem;
  cursor: pointer;
}

.header__hamburger .hamburger__slice {
  display: block;
  height: 0.125rem;
  margin: 0.5rem 0;
  background-color: hsla(0, 0%, 100%, 0.6);
  transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.header__hamburger .hamburger:hover .hamburger__slice {
  background-color: #dac19d;
  transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.header__hamburger .hamburger__slice:first-of-type {
  width: 2rem;
}

.header__hamburger .hamburger__slice:last-of-type {
  width: 1.375rem;
}

.header__hamburger .hamburger:hover .hamburger__slice:first-of-type {
  width: 1.375rem;
}

.header__hamburger .hamburger:hover .hamburger__slice:last-of-type {
  width: 2rem;
}

.header__hamburger .hamburger.is-active .hamburger__slice {
  width: 2rem !important;
  background-color: #fff;
  -webkit-animation: none !important;
  animation: none !important;
  transform-origin: center;
}

.header__hamburger .hamburger.is-active .hamburger__slice:first-of-type {
  transform: rotate(45deg) translate(0.125rem, 0.3125rem);
}

.header__hamburger .hamburger.is-active .hamburger__slice:last-of-type {
  transform: rotate(-45deg) translate(0.125rem, -0.3125rem);
}
</style>
