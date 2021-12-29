<template>
  <footer class="py-8 lg:py-16 xl:py-32">
    <div class="container mx-auto flex flex-col">
      <div class="flex mb-6">
        <div class="w-1/4 p-6">
          <Logo />
        </div>

        <div class="flex flex-wrap items-center justify-around w-3/4 p-6">
          <span class="font-stylish text-2xl text-gray-200 tracking-widest">Let's connect</span>

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
        <div class="w-1/4 p-6 leading-loose text-xl text-gray-200">
          <div class="line-block"></div>

          Pollux Cooperative<br />

          2000 Rosario<br />

          Santa Fe, Argentina<br /><br />

          hello@polluxcoop.com<br />

          +54 934 1111 0000<br />
        </div>

        <div class="flex justify-around w-1/2">
          <div class="flex flex-col p-6">
            <div class="line-block"></div>

            <a href="#" class="route route--underline mr-auto">About</a>

            <a href="#" class="route route--underline mr-auto">Services</a>

            <a href="#" class="route route--underline mr-auto">Career</a>

            <a href="#" class="route route--underline mr-auto">Our Clients</a>
          </div>

          <div class="flex flex-col p-6">
            <div class="line-block"></div>

            <a href="#" class="route route--underline mr-auto">Contact</a>

            <a href="#" class="route route--underline mr-auto">Our Workflow</a>

            <a href="#" class="route route--underline mr-auto">Our Team</a>

            <a href="#" class="route route--underline mr-auto">Technologies</a>
          </div>
        </div>
      </div>

      <div class="p-6">
        <div class="border-t border-gray-200 text-gray-200 pt-4 text-xs">
          <div class="flex justify-between">
            <span>Copyright © 2021 <span @click="$emit('bonus')">Pollux</span> | Privacy policy</span>

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
export default {}
</script>

<style lang="scss" scoped>
.footer {
  &--icon {
    @apply text-gray-200 text-3xl cursor-pointer;

    &:hover {
      @apply text-white scale-105 origin-center;
      transition: transform 200ms, scale 100ms;
    }
  }
}
</style>
