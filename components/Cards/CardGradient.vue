<template>
  <li
    class="flex list-none rounded-lg bg-gray-800 bg-none p-1 dark:bg-gray-100"
  >
    <a
      class="w-full rounded-md bg-white px-5 py-4 font-extrabold opacity-90 dark:bg-gray-800"
      :href="href"
    >
      <slot />
    </a>
  </li>
</template>

<script setup>
defineProps({
  href: {
    type: String,
    default: '',
  },
});
</script>

<style scoped>
* {
  --accent: 0, 138, 255;
  --accent-gradient: linear-gradient(
    45deg,
    rgb(var(--accent)),
    #73f4ff 30%,
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

li h1,
li h2,
li h3,
li h4,
li h5,
li h6 {
  color: rgb(var(--accent));
}

li:is(:hover, :focus-within) h1,
li:is(:hover, :focus-within) h2,
li:is(:hover, :focus-within) h3,
li:is(:hover, :focus-within) h4,
li:is(:hover, :focus-within) h5,
li:is(:hover, :focus-within) h6 {
  color: unset;
}
</style>
