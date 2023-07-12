<template>
  <li
    class="flex list-none rounded-lg bg-gray-800 bg-none p-1 dark:bg-gray-100"
  >
    <a
      class="w-full rounded-md bg-white py-4 px-5 font-extrabold opacity-90 dark:bg-gray-800"
      :href="href"
    >
      <h2 class="m-0 mt-2 text-xl">
        {{ title }}
        <!-- <span>&rarr;</span> -->
      </h2>

      <slot>
        <p>{{ description }}</p>
      </slot>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    description: {
      default: '',
      type: String,
    },

    href: {
      default: '',
      type: String,
    },

    title: {
      default: '',
      type: String,
    },
  },
}
</script>

<style scoped>
* {
  --accent: 124, 58, 237;
  --accent-gradient: linear-gradient(
    45deg,
    rgb(var(--accent)),
    #da62c4 30%,
    white 60%
  );
}

li {
  background-size: 400%;
  background-position: 0;
  background-image: var(--accent-gradient);
  box-shadow:
    0 4px 6px -1px rgba(0 0 0 / 10%),
    0 2px 4px -2px rgba(0 0 0 / 10%);
  transition: background-position 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

li:is(:hover, :focus-within) {
  background-position: 100%;
  background-image: none;
}

li h2 {
  color: rgb(var(--accent));
}

li:is(:hover, :focus-within) h2 {
  color: unset;
}
</style>
