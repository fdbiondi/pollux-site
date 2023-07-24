<template>
  <div>
    <slot />

    <div class="pt-6">
      <slot name="title">
        <h4 class="subtitle flex items-center">
          <img
            v-if="image"
            :src="image"
            alt="pollux services"
            class="mr-2"
          >
          <fa-icon
            v-if="icon"
            class="mr-2"
          />
          <span class="font-bold">{{ title }}</span>
        </h4>
      </slot>
    </div>

    <slot name="middle" />

    <div class="space-y-4 pt-4">
      <p
        class="min-h-[6rem]"
        :class="fontSize"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      default: '',
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
      default: '',
      type: String,
    },

    fontSize: {
      default: 'text-md',
      type: String,
    },
  },
};
</script>
