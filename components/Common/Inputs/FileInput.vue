<template>
  <div class="relative">
    <slot>
      <label
        :for="name"
        class="flex h-full w-full cursor-pointer items-center justify-center"
      >
        <fa-icon
          icon="paperclip"
          class="text-2xl text-black-light dark:text-white"
        />

        <span class="ml-2 text-2xl text-black-light dark:text-white">
          {{ label }}
        </span>
      </label>
    </slot>

    <input
      :id="name"
      ref="fileInput"
      :name="name"
      :accept="accept"
      :class="{ 'z-[-1]': !$slots.default, hidden: !canLoad }"
      type="file"
      @change="selected"
    >
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'selected',
  },

  props: {
    accept: {
      type: String,
      default: '*',
    },

    canLoad: {
      type: Boolean,
      default: true,
    },

    label: {
      type: String,
      default: 'Attach File',
    },

    name: {
      type: String,
      default: 'input-file',
    },

    // eslint-disable-next-line vue/require-default-prop
    value: null,
  },

  emits: ['selected'],

  data() {
    return {
      file: null,
    };
  },

  watch: {
    value(newVal, oldVal) {
      if (newVal === null && oldVal) {
        this.$refs.fileInput.value = null;
        this.file = null;
      }
    },
  },

  methods: {
    selected(event) {
      this.file = event.target.files[0];

      const { name, type } = this.file;

      this.$emit('selected', this.file, name, type);
    },
  },
};
</script>

<style lang="scss" scoped>
input[type='file'] {
  @apply absolute left-0 top-0 h-full w-full cursor-pointer opacity-0;
}
</style>
