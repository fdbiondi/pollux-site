<template>
  <div class="p-8 m-4" :class="classes">
    <slot></slot>
    <div class="pt-6 space-y-4">
      <h4 class="font-title text-2xl font-bold lines-2">
        {{ title }}
      </h4>
    </div>

    <div class="pt-4 space-y-4">
      <p class="min-h-[10rem]">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bgColor: {
      default: "bg-gray-700",
      type: String,
    },

    bgOpacity: {
      default: "bg-opacity-25",
      type: String,
    },

    border: {
      default: "rounded-sm",
      type: String,
    },

    description: {
      default: "",
      type: String,
    },

    textColor: {
      default: "text-gray-200",
      type: String,
    },

    title: {
      default: "",
      type: String,
    },
  },

  computed: {
    classes() {
      const classes = []

      if (this.bgColor) {
        classes.push(this.bgColor)
      }

      if (this.bgOpacity) {
        classes.push(this.bgOpacity)
      }

      if (this.border) {
        classes.push(this.border)
      }

      if (this.textColor) {
        classes.push(this.textColor)
      }

      return classes.join(" ")
    },
  },
}
</script>

<style lang="scss" scoped>
.lines-2 {
  word-spacing: 100vw;
}
</style>
