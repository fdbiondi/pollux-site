<template>
  <div class="switch flex items-center justify-center">
    <label
      for="theme-switcher"
      class="flex cursor-pointer items-center"
    >
      <div
        class="switch-container"
        :class="[`${theme}-theme`]"
      >
        <input
          id="theme-switcher"
          v-model="value"
          type="checkbox"
          class="sr-only"
          checked
        >
        <div class="switch-slider">
          <div class="switch-knob" />

          <svg
            class="switch-icon icon-left"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>

          <svg
            class="switch-icon icon-right"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              stroke="none"
              d="M0 0h24v24H0z"
            />
            <circle
              cx="12"
              cy="12"
              r="4"
            />
            <path
              d="M3 12h1M12 3v1M20 12h1M12 20v1M5.6 5.6l.7 .7M18.4 5.6l-.7 .7M17.7 17.7l.7 .7M6.3 17.7l-.7 .7"
            />
          </svg>
        </div>
      </div>
    </label>
  </div>
</template>

<script>
const DARK = 'dark';
const LIGHT = 'light';

export default {
  data() {
    const defaultTheme = DARK;

    return {
      defaultTheme,
      theme: defaultTheme,
    };
  },

  computed: {
    value: {
      // dark-theme': value, 'LIGHT-theme
      set(value) {
        if (!value) {
          this.theme = LIGHT;
        } else {
          this.theme = DARK;
        }

        this.switchTheme(this.theme);
      },

      get() {
        return this.theme === this.defaultTheme;
      },
    },
  },

  mounted() {
    this.theme = localStorage.getItem('nuxt-color-mode') ?? this.defaultTheme;
    this.switchTheme(this.theme);
  },

  methods: {
    switchTheme(theme) {
      this.$colorMode.preference = theme;
    },
  },
};
</script>

<style lang="scss" scoped>
.switch {
  @apply mx-4;

  &-container {
    @apply relative h-6 w-[50px] cursor-pointer overflow-hidden rounded-[100px];

    &.dark-theme {
      @apply bg-gray-300;
    }

    &.light-theme {
      @apply bg-gray-700;
    }
  }

  &-slider {
    @apply h-6 w-[100px];

    position: relative;
    left: calc(50% - 50px);
    transition: all 0.5s cubic-bezier(0.56, 0.045, 0, 1);
  }

  &-knob {
    @apply absolute top-0.5 h-5 w-5 rounded-full bg-gray-500 transition;

    left: calc(50% - 10px);
  }

  &-icon {
    position: absolute;
    width: 18px;
    height: 18px;
    top: 3px;
  }

  .icon-left {
    @apply text-gray-900;

    left: 18px;
  }

  .icon-right {
    @apply text-white;

    right: 18px;
  }

  input {
    &:not(:checked) ~ .switch-slider {
      transform: translate(-13px);
    }

    &:checked ~ .switch-slider {
      transform: translateX(13px);
    }
  }
}
</style>
