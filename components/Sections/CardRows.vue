<template>
  <div class="container mx-auto">
    <ul
      role="list"
      class="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
    >
      <li
        v-for="item in items"
        :key="item.title"
        class="col-span-1 flex rounded-md shadow-sm"
      >
        <div
          class="flex w-5 flex-shrink-0 rounded-l-md"
          :class="item.bgColor"
        ></div>
        <div
          class="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white"
        >
          <div class="flex-1 truncate px-4 py-2 text-sm">
            <p class="font-medium text-gray-900">
              {{ item.title }}
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    development: {
      type: Array,
      default: null,
    },

    design: {
      type: Array,
      default: null,
    },
  },

  computed: {
    items() {
      return this.development.concat(this.design)
    },
  },
}
</script>
