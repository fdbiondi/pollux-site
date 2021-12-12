<template>
  <footer class="py-8 lg:py-16 xl:py-32">
    <div class="container mx-auto flex flex-col">
      <div class="flex mb-6">
        <div class="w-1/4 p-6">
          <Logo />
        </div>

        <div class="flex flex-wrap items-center justify-around w-3/4 p-6">
          <span class="font-title text-2xl text-gray-200">Let's connect</span>

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
        <div class="w-1/4 p-6 font-mono leading-loose text-xl text-gray-200">
          <div class="underline"></div>

          Pollux Cooperative<br />

          2000 Rosario<br />

          Santa Fe, Argentina<br /><br />

          hello@polluxcoop.com<br />

          +54 934 1111 0000<br />
        </div>

        <div class="flex justify-around w-1/2">
          <div class="flex flex-col p-6">
            <div class="underline"></div>

            <a href="#" class="footer--route">About</a>

            <a href="#" class="footer--route">Services</a>

            <a href="#" class="footer--route">Career</a>

            <a href="#" class="footer--route">Our Clients</a>
          </div>

          <div class="flex flex-col p-6">
            <div class="underline"></div>

            <a href="#" class="footer--route">Contact</a>

            <a href="#" class="footer--route">Our Workflow</a>

            <a href="#" class="footer--route">Our Team</a>

            <a href="#" class="footer--route">Technologies</a>
          </div>
        </div>
      </div>

      <div class="p-6">
        <div class="border-t border-gray-200 text-gray-200 pt-4 text-xs">
          Copyright © 2021 Pollux | Privacy policy
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.underline {
  width: 2rem;
  height: 0.2rem;
  @apply rounded-sm bg-gray-200 mb-6;
}

.footer {
  &--icon {
    @apply text-gray-200 text-3xl cursor-pointer;

    &:hover {
      @apply text-white transform scale-105 origin-center;
      transition: transform 200ms, scale 100ms;
      // transform: scale(1.03);
    }
  }

  &--route {
    @apply relative font-mono font-bold text-xl text-gray-200 tracking-wider leading-loose mb-4 cursor-pointer overflow-hidden mr-auto;

    &::after {
      content: "";
      @apply absolute bottom-0 left-0 w-full h-[0.1em] bg-pollux-cyan;
      transition: transform 500ms;
      transform: translate3d(-100%, 0, 0);
    }

    &:hover,
    &:focus {
      &::after {
        transform: translate3d(0, 0, 0);
      }
    }
  }
}
</style>
