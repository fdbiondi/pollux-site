<template>
  <div
    class="z-50 duration-700"
    :class="{ 'fixed inset-0 bg-gray-900': menuOpen }"
  >
    <div
      class="menu__hamburger"
      :class="{ 'absolute right-0 top-0 px-6 pt-8': menuOpen }"
    >
      <a
        aria-label="Hamburger Menu"
        class="hamburger"
        :class="{ 'is-active': menuOpen }"
        @click="menuOpen = !menuOpen"
      >
        <div class="hamburger__slice"></div>
        <div class="hamburger__slice"></div>
      </a>
    </div>

    <div
      class="h-full w-full items-center justify-center"
      :class="[menuOpen ? 'flex' : 'hidden']"
    >
      <div
        class="flex flex-col space-y-3 text-center text-xl font-light text-white"
      >
        <a
          v-for="(link, index) in links"
          :key="`menu-link-${index}`"
          :href="link.href"
          class="nav-item route duration-300 hover:text-pollux-cyan-light"
          @click="close"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      menuOpen: false,
    }
  },

  watch: {
    menuOpen: {
      handler(open) {
        this.toggleBodyScrollbar(open)
      },
    },
  },

  methods: {
    close() {
      this.menuOpen = false
    },

    toggleBodyScrollbar(open) {
      if (open) {
        document.body.classList.add('overflow-hidden')
      } else {
        document.body.classList.remove('overflow-hidden')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@mixin hamburger-transition() {
  -webkit-transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  -moz-transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  -ms-transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  -o-transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.menu {
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
