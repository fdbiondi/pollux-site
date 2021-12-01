<template>
  <div class="text-gray-200 bg-opacity-25 p-8 m-4 rounded-sm" :class="classes">
    <slot></slot>
    <div class="pt-6 space-y-4">
      <h4 class="text-2xl font-semibold lines-2">
        {{ title }}
      </h4>
    </div>

    <div class="pt-4 space-y-4">
      <p class="min-h-[10rem] text-md font-semibold">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      default: "",
      type: String,
    },

    title: {
      default: "",
      type: String,
    },

    bgColor: {
      default: "bg-gray-700",
      type: String,
    },
  },

  computed: {
    classes() {
      const classes = []

      if (this.bgColor) {
        classes.push(this.bgColor)
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
