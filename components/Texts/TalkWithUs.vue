<template>
  <div class="font-serif">
    <h2 class="font-light">{{ talkToUs }}</h2>
    <h2 class="font-bold">{{ getYour }}</h2>
    <h2 class="font-bold">
      <span class="text-pollux-pink">{{ project }}</span> {{ moving }}
    </h2>

    <span class="p-8 text-xl">
      {{ fillOutForm }}
      <a :href="`mailto: ${email}`" class="text-pollux-pink">
        {{ email }}
      </a>
    </span>
  </div>
</template>

<script>
const email = 'hello@polluxcoop.com'
const fillOutForm = 'Simply fill out the form or email us at'
const getYour = 'get your'
const moving = 'moving!'
const project = 'project'
const talkToUs = 'Talk to us and'

export default {
  data() {
    return {
      email,
      fillOutForm,
      getYour,
      moving,
      project,
      talkToUs,
    }
  },
}
</script>

<style lang="scss" scoped>
h2 {
  @apply my-16 cursor-default px-8 text-8xl uppercase;

  &:hover {
    text-shadow: 0 0 1.5rem hsl(0deg 0% 0% / 0.5);
  }
}

html.dark h2:hover {
  text-shadow: 0 0 1.5rem hsl(0deg 0% 100% / 0.5);
}
</style>
