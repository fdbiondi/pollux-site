<template>
  <div class="tilt" :class="position">
    <svg
      data-name="Tilt"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      :class="slope"
    >
      <path
        d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
        class="shape-fill"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      default: "bottom-0 left-0",
    },

    slope: {
      type: String,
      validator: (value) => ["normal", "steep"].includes(value),
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.tilt {
  position: absolute;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.tilt svg {
  position: relative;
  display: block;
  transform: rotateY(180deg);

  &.normal {
    width: calc(100% + 1.3px);
    @apply h-40;
  }

  &.steep {
    width: calc(135% + 1.3px);
    @apply h-64;
  }
}

.tilt .shape-fill {
  fill: theme("colors.black.light");
}
</style>
