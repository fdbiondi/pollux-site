<template>
  <div
    class="duration-700"
    :class="{ 'h-screen fixed inset-0 bg-gray-100 dark:bg-gray-900': menuOpen }"
  >
    <div
      class="menu"
      :class="{ 'absolute right-0 top-0 px-6 pt-8': menuOpen }"
    >
      <a
        aria-label="Hamburger Menu"
        class="hamburger"
        :class="{ 'is-active': menuOpen }"
        @click="menuOpen = !menuOpen"
      >
        <div class="hamburger-slice" />
        <div class="hamburger-slice" />
      </a>
    </div>

    <div
      class="h-full w-full items-center justify-center"
      :class="[menuOpen ? 'flex' : 'hidden']"
    >
      <div class="flex flex-col space-y-3 text-center text-xl font-light">
        <a
          v-for="(link, index) in links"
          :key="`menu-link-${index}`"
          :href="link.href"
          class="nav-item route duration-300 hover:text-pollux-cyan-A100"
          @click="close"
        >
          {{ link.label }}
        </a>
      </div>

      <div
        class="fixed left-0 top-0 mx-4 w-auto py-8 transition-all delay-150 duration-1000"
        :class="menuOpen ? 'visible' : 'invisible'"
      >
        <ThemeSwitch v-if="false" />
      </div>
    </div>
  </div>
</template>

<script>
import ThemeSwitch from '~/components/Common/ThemeSwitch';

export default {
  components: {
    ThemeSwitch,
  },

  props: {
    links: {
      type: Array,
      required: true,
    },
  },

  emits: ['menu:open'],

  data() {
    return {
      menuOpen: false,
    };
  },

  watch: {
    menuOpen: {
      handler(open) {
        this.toggleBodyScrollbar(open);
        this.$emit('menu:open', open);
      },
    },
  },

  methods: {
    close() {
      this.menuOpen = false;
    },

    toggleBodyScrollbar(open) {
      if (open) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
    },
  },
};
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
  @apply inline-block;

  .hamburger {
    @apply block w-8 cursor-pointer outline-0;

    .hamburger-slice {
      @apply my-2 block h-0.5 bg-white/60 first-of-type:w-8 last-of-type:w-[1.375rem];
      @include hamburger-transition;
    }

    &:hover {
      .hamburger-slice {
        @apply bg-pollux-cyan-A100 first-of-type:w-[1.375rem] last-of-type:w-8;
        @include hamburger-transition;
      }
    }

    &.is-active .hamburger-slice {
      @apply bg-gray-900 dark:bg-white;

      width: 2rem !important;
      -webkit-animation: none !important;
      animation: none !important;
      transform-origin: center;

      &:first-of-type {
        transform: rotate(45deg) translate(0.125rem, 0.3125rem);
      }

      &:last-of-type {
        transform: rotate(-45deg) translate(0.125rem, -0.3125rem);
      }
    }
  }
}
</style>
