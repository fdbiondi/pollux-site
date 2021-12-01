<template>
  <header>
    <nav class="flex items-center justify-between p-6 container mx-auto">
      <a href="#">
        <img src="logo.svg" alt="Pollux Software Engineering" class="h-24 w-24">
      </a>

      <div class="flex items-center">
        <div class="font-sohne-var text-lg text-gray-400 hidden lg:flex">
          <!-- <a href="#" class="block mt-4 lg:inline-block text-green-400 hover:text-green-500 lg:mt-0 mr-10">
            Home
          </a> -->
          <a href="#services" class="block mt-4 lg:inline-block hover:text-green-400 lg:mt-0 mr-10">
            Services
          </a>
          <a href="#" class="block mt-4 lg:inline-block hover:text-green-400 lg:mt-0 mr-10">
            Our Clients
          </a>
          <a href="#" class="block mt-4 lg:inline-block hover:text-green-400 lg:mt-0 mr-10">
            About Us
          </a>
          <a href="#" class="block mt-4 lg:inline-block hover:text-green-400 lg:mt-0 mr-10">
            Our Team
          </a>
          <a href="#" class="block mt-4 lg:inline-block hover:text-green-400 lg:mt-0">
            Career
          </a>
        </div>
        <!--<div class="mr-5 lg:mr-0">
              <button class="py-2 px-6 rounded-md text-gray-500 hover:text-gray-700 text-lg">Sign in</button>
              <button class="py-2 px-6 bg-green-500 hover:bg-green-700 rounded-md text-white text-lg">Sign up</button>
          </div>-->
        <div class="block lg:hidden">
          <button class="flex items-center px-4 py-3 border rounded text-gray-200 border-gray-400 focus:outline-none">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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

<style lang="scss" scoped></style>
