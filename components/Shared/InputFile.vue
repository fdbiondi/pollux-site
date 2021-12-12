<template>
  <div class="relative">
    <slot>
      <label
        :for="name"
        class="flex w-full h-full justify-center items-center cursor-pointer"
      >
        <fa-icon icon="paperclip" class="text-white text-2xl"></fa-icon>
        <span class="font-title text-white text-2xl ml-2">
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
    />
  </div>
</template>

<script>
export default {
  model: {
    prop: "value",
    event: "selected",
  },

  props: {
    accept: {
      type: String,
      default: "*",
    },

    canLoad: {
      type: Boolean,
      default: true,
    },

    label: {
      type: String,
      default: "Attach File",
    },

    name: {
      type: String,
      default: "input-file",
    },

    // eslint-disable-next-line vue/require-default-prop
    value: null,
  },

  data() {
    return {
      file: null,
    }
  },

  watch: {
    value(newVal, oldVal) {
      if (newVal === null && oldVal) {
        this.$refs.fileInput.value = null
        this.file = null
      }
    },
  },

  methods: {
    selected(event) {
      this.file = event.target.files[0]

      const { name, type } = this.file

      this.$emit("selected", this.file, name, type)
    },
  },
}
</script>

<style lang="scss" scoped>
input[type="file"] {
  @apply absolute w-full h-full opacity-0 top-0 left-0 cursor-pointer;
}
</style>
