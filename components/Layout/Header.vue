<template>
  <header id="header">
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
          <div class="header__hamburger">
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

@mixin hamburger-transition() {
  -webkit-transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  -moz-transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  -ms-transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  -o-transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.header {
  &__hamburger {
    @apply inline-block;

    .hamburger {
      @apply block w-8 cursor-pointer outline-0;

      .hamburger__slice {
        @apply my-2 block h-0.5 bg-white/60 first-of-type:w-8 last-of-type:w-[1.375rem];
        @include hamburger-transition();
      }

      &:hover {
        .hamburger__slice {
          @apply bg-pollux-cyan-light first-of-type:w-[1.375rem] last-of-type:w-8;
          @include hamburger-transition();
        }
      }
    }
  }

  &__hamburger .hamburger.is-active .hamburger__slice {
    width: 2rem !important;
    background-color: #fff;
    -webkit-animation: none !important;
    animation: none !important;
    transform-origin: center;
  }

  &__hamburger .hamburger.is-active .hamburger__slice:first-of-type {
    transform: rotate(45deg) translate(0.125rem, 0.3125rem);
  }

  &__hamburger .hamburger.is-active .hamburger__slice:last-of-type {
    transform: rotate(-45deg) translate(0.125rem, -0.3125rem);
  }
}
</style>
