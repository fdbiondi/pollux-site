<template>
  <header>
    <nav class="container mx-auto flex items-center justify-between px-6 py-2">
      <a href="/">
        <logo />
      </a>

      <div class="z-20 flex items-center">
        <div class="hidden text-lg text-gray-400 dark:text-white xl:flex">
          <a href="#services" class="nav-item route--underline"> Services </a>
          <a href="#our-clients" class="nav-item route--underline">
            Our Clients
          </a>
          <a href="#about" class="nav-item route--underline"> About Us </a>
          <a href="#career" class="nav-item route--underline"> Career </a>

          <LanguageSwitch />
          <ThemeSwitch />
        </div>

        <div class="block xl:hidden">
          <button
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
}
</script>

<style lang="scss" scoped>
.nav-item {
  @apply mr-12 block lg:inline-block;
}
</style>
