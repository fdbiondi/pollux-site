<template>
  <div
    class="inset-x-0 z-50"
    :class="{ fixed, 'top-0': top, 'bottom-0': !top, invisible: !visible }"
  >
    <div :class="bgColor">
      <div class="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div class="flex flex-wrap items-center justify-between">
          <div class="flex w-0 flex-1 items-center">
            <slot name="text">
              <span
                v-if="!hideIcon"
                class="flex rounded-md bg-black/30 py-1 px-2"
              >
                <fa-icon
                  :icon="icon"
                  class="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
              <p class="ml-3 truncate font-medium text-white">
                <slot />
              </p>
            </slot>
          </div>

          <div
            class="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto"
          >
            <slot name="action">
              <a
                v-if="action"
                href="#"
                class="flex items-center justify-center border border-transparent px-4 py-2 text-sm font-medium shadow-sm"
                :class="actionColor"
                @click="onAction"
              >
                {{ action }}
              </a>
            </slot>
          </div>

          <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              class="-mr-1 flex py-1 px-3 hover:bg-black/30 focus:outline-none sm:-mr-2"
              @click="onClose"
            >
              <span class="sr-only">Dismiss</span>
              <fa-icon
                icon="xmark"
                class="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    action: {
      type: String,
      default: 'Learn more',
    },

    actionColor: {
      type: [Array, String],
      default: 'bg-white text-pollux-cyan hover:bg-gray-50',
    },

    bgColor: {
      type: String,
      default: 'bg-pollux-cyan',
    },

    icon: {
      type: [Array, String],
      default: () => ['fas', 'bullhorn'],
    },

    hideIcon: {
      type: Boolean,
      default: false,
    },

    top: {
      type: Boolean,
      default: false,
    },

    fixed: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      visible: true,
    }
  },

  methods: {
    onClose() {
      this.visible = false
      this.$emit('close')
    },

    onAction() {
      this.visible = false
      this.$emit('ok')
    },
  },
}
</script>
