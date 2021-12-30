<template>
  <div>
    <slot></slot>

    <div class="pt-6">
      <slot name="title">
        <h4 class="flex items-center subtitle">
          <img v-if="image" :src="image" alt="pollux services" class="mr-2" />
          <fa-icon v-if="icon" class="mr-2" />
          <span class="font-bold">{{ title }}</span>
        </h4>
      </slot>
    </div>

    <slot name="middle"></slot>

    <div class="pt-4 space-y-4">
      <p class="min-h-[6rem]" :class="fontSize">{{ description }}</p>
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

    icon: {
      default: null,
      type: String,
    },

    image: {
      default: null,
      type: String,
    },

    title: {
      default: "",
      type: String,
    },

    fontSize: {
      default: "text-md",
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped></style>
