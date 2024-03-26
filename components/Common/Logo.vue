<template>
  <div class="logo">
    <div class="flex items-center gap-x-3">
      <img
        src="/logo-redes.png"
        alt="Pollux Software Engineering"
        class="custom-drop-shadow-lg z-20 mt-4"
        :class="{
          'h-16 w-16': isSmall,
          'h-[72px] w-[72px]': isMedium,
          'h-22 w-22': isLarge,
        }"
      />
      <div class="relative mt-4">
        <div class="font-mono dark:text-white">
          <div
            class="custom-drop-shadow-lg px-1 tracking-wider"
            :class="{
              'text-3xl': isSmall,
              'text-4xl': isMedium,
              'text-7xl': isLarge,
            }"
          >
            Pollux
          </div>
          <div
            class="custom-drop-shadow-lg text-pollux-cyan-dark dark:text-pollux-cyan"
            :class="{
              'text-[0.65rem]': isSmall,
              'text-md': isMedium,
              'text-2xl': isLarge,
            }"
          >
            Software Engineering
          </div>
        </div>

        <div class="overlay" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      default: 'medium',
      type: String,
      validator: (value) => ['small', 'medium', 'large'].includes(value),
    },

    showLogo: {
      default: true,
      type: Boolean,
    },

    showText: {
      default: true,
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
