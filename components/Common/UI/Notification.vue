<template>
  <div
    class="inset-x-0 z-50"
    :class="{ fixed, 'top-0': top, 'bottom-0': !top, invisible: !visible }"
  >
    <div class="bg-black/80 dark:bg-white/90">
      <div class="mx-auto max-w-7xl px-3 py-3 sm:px-6 lg:px-8">
        <div class="flex flex-wrap items-center justify-between">
          <div class="flex w-0 flex-1 items-center">
            <slot name="content">
              <p class="ml-3 font-medium text-white dark:text-black">
                <slot />
              </p>
            </slot>
          </div>

          <div
            class="order-3 mt-6 w-full shrink-0 sm:order-2 sm:mt-0 sm:w-auto"
          >
            <slot name="action">
              <a
                v-if="action"
                class="flex cursor-pointer items-center justify-center border border-transparent bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-100 hover:drop-shadow-md hover:filter dark:bg-black dark:text-white dark:hover:bg-gray-800"
                @click="onAction"
              >
                {{ action }}
              </a>
            </slot>
          </div>

          <div class="order-2 shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              class="-mr-1 flex px-3 py-1 hover:bg-white/10 focus:outline-0 dark:hover:bg-black/10 sm:-mr-2"
              @click="onClose"
            >
              <span class="sr-only">Dismiss</span>
              <fa-icon
                icon="xmark"
                class="h-6 w-6 text-white dark:text-black"
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

    top: {
      type: Boolean,
      default: false,
    },

    fixed: {
      type: Boolean,
      default: true,
    },
  },

  emits: ['close', 'ok'],

  data() {
    return {
      visible: true,
    };
  },

  methods: {
    onClose() {
      this.visible = false;
      this.$emit('close');
    },

    onAction() {
      this.visible = false;
      this.$emit('ok');
    },
  },
};
</script>
