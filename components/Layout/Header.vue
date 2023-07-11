<template>
  <header id="header">
    <nav class="container mx-auto flex items-center justify-between px-6 py-2">
      <a href="/">
        <logo class="hidden md:block" />
        <logo size="small" class="md:hidden" />
      </a>

      <div class="z-30 flex items-center">
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

        <MobileMenu class="block 2xl:hidden" />
      </div>
    </nav>
  </header>
</template>

<script>
import LanguageSwitch from '~/components/Common/Buttons/LanguageSwitch'
import ThemeSwitch from '~/components/Common/Buttons/ThemeSwitch'
import Logo from '~/components/Common/Logo'
import MobileMenu from '~/components/Layout/MobileMenu'

export default {
  components: {
    LanguageSwitch,
    Logo,
    ThemeSwitch,
    MobileMenu,
  },
}
</script>

<style lang="scss" scoped>
.nav-item {
  @apply mr-12 block filter drop-shadow-tight lg:inline-block;
}
</style>
