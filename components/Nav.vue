<template>
  <header>
    <nav class="flex items-center justify-between px-6 py-2 container mx-auto">
      <a href="/">
        <Logo />
      </a>

      <div class="flex items-center">
        <div class="text-lg text-gray-200 hidden lg:flex">
          <a href="#services" class="nav-item route--underline"> Services </a>
          <a href="#our-clients" class="nav-item route--underline">
            Our Clients
          </a>
          <a href="#about" class="nav-item route--underline"> About Us </a>
          <a href="#career" class="nav-item route--underline"> Career </a>

          <LanguageSwitch />
          <ThemeSwitch />
        </div>

        <!--<div class="mr-5 lg:mr-0">
              <button class="py-2 px-6 rounded-md text-gray-500 hover:text-gray-700 text-lg">Sign in</button>
              <button class="py-2 px-6 bg-green-500 hover:bg-green-700 rounded-md text-white text-lg">Sign up</button>
          </div>-->

        <div class="block lg:hidden">
          <button
            class="flex items-center px-4 py-3 border rounded text-gray-200 border-gray-400 focus:outline-none"
          >
            <svg
              class="fill-current h-3 w-3"
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
export default {}
</script>

<style lang="scss" scoped>
.nav-item {
  @apply block lg:inline-block mr-12;
}
</style>
