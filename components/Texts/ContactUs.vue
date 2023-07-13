<template>
  <div class="flex flex-col items-center 2xl:block">
    <div class="font-serif">
      <h2 class="font-light">{{ contact }}</h2>
      <h2 class="font-bold">
        <span class="text-pollux-pink">{{ us }}</span>
      </h2>

      <span class="my-16 text-xl sm:p-8 2xl:my-0">
        <span>{{ fillOutForm }}</span>
        <a :href="`mailto: ${email}`" class="text-pollux-pink">
          {{ email }}
        </a>
      </span>
    </div>
  </div>
</template>

<script>
const email = 'hello@polluxcoop.com'
const fillOutForm = 'Simply fill out the form or email us at'
const contact = 'CONTACT'
const us = 'US'

export default {
  data() {
    return {
      email,
      fillOutForm,
      contact,
      us,
    }
  },
}
</script>

<style lang="scss" scoped>
h2 {
  @apply my-1 cursor-default text-7xl uppercase last-of-type:mb-12 sm:px-8 sm:text-9xl md:text-8xl 2xl:my-16 2xl:last-of-type:mb-16;

  &:hover {
    text-shadow: 0 0 1.5rem hsl(0deg 0% 0% / 0.5);
  }
}

html.dark h2:hover {
  text-shadow: 0 0 1.5rem hsl(0deg 0% 100% / 0.5);
}
</style>
