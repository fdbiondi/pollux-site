<template>
  <div class="my-8 text-gray-200">
    <slot></slot>

    <div class="pt-6 space-y-4">
      <slot name="title">
        <h4 class="flex items-center subtitle">
          <img v-if="image" :src="image" alt="pollux services" class="mr-2" />
          <fa-icon v-if="icon" class="mr-2" />
          <span>{{ title }}</span>
        </h4>
      </slot>
    </div>

    <div class="pt-4 space-y-4">
      <p class="min-h-[6rem] text-md font-medium">{{ description }}</p>
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
  },
}
</script>

<style lang="scss" scoped></style>
