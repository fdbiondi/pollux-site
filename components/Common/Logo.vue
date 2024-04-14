<template>
  <div class="logo">
    <div
      class="flex items-center"
      :class="{ 'gap-x-3': showText || !!$slots.default }"
    >
      <img
        v-if="useColorLogo"
        src="/logo-color.png"
        alt="Pollux Software Engineering"
        class="custom-drop-shadow-lg z-20"
        :class="logoSizes"
      />
      <template v-else>
        <img
          src="/logo-white.png"
          alt="Pollux Software Engineering"
          class="custom-drop-shadow-lg z-20 hidden dark:inline"
          :class="logoSizes"
        />
        <img
          src="/logo-black.png"
          alt="Pollux Software Engineering"
          class="custom-drop-shadow-lg z-20 inline dark:hidden"
          :class="logoSizes"
        />
      </template>

      <div class="relative font-mono dark:text-white">
        <div v-if="showText">
          <div
            class="custom-drop-shadow-lg font-bold"
            :class="{
              'ml-[-2.4px] text-4xl tracking-[3.4px]': isSmall,
              'ml-[-3.2px] text-5xl tracking-[4.4px]': isMedium,
              'ml-[-5px] text-7xl tracking-[6.8px]': isLarge,
            }"
          >
            Pollux
          </div>
          <div
            class="custom-drop-shadow-lg"
            :class="{
              'text-xs': isSmall,
              'text-base': isMedium,
              'text-2xl': isLarge,
            }"
          >
            Software Engineering
          </div>
        </div>

        <!-- text logo -->
        <slot />

        <div class="overlay" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    customSize: {
      type: String,
      default: null,
    },

    size: {
      default: 'medium',
      type: String,
      validator: (value) => ['small', 'medium', 'large'].includes(value),
    },

    showText: {
      default: false,
      type: Boolean,
    },

    useColorLogo: {
      default: false,
      type: Boolean,
    },
  },

  computed: {
    isSmall() {
      return this.size === 'small';
    },

    isMedium() {
      return this.size === 'medium';
    },

    isLarge() {
      return this.size === 'large';
    },

    logoSizes() {
      if (this.customSize) {
        return this.customSize;
      }

      return {
        'h-auto w-12': this.isSmall,
        'h-auto w-16': this.isMedium,
        'h-auto w-24': this.isLarge,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  cursor: pointer;
}

.logo {
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}
</style>
