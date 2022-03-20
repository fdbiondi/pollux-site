<template>
  <div class="hero--titles">
    <h2 class="hero--title" style="--order: 1">
      {{ upperTitle }}
    </h2>
    <h1 class="hero--title title-gradient tracking-wider" style="--order: 2">
      {{ title }}
    </h1>

    <p class="hero--title" style="--order: 3">
      {{ subtitle }}
    </p>

    <div class="flex flex-row gap-4">
      <div class="animate-in" style="--order: 1">
        <nuxt-link :to="leftLink">
          <button
            class="button button--outline-dark xl:dark:button--secondary-dark xl:button--secondary"
          >
            {{ knowMore }}
          </button>
        </nuxt-link>
      </div>

      <div class="animate-in" style="--order: 2">
        <nuxt-link :to="rightLink">
          <button class="button button--primary">
            {{ letsConnect }}
          </button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
const title = 'Business Success'
const upperTitle = 'Custom Software Solutions for'
const subtitle =
  'Innovative software development and consulting partner. We help products scale through the use of technology solutions to improve customer experience and internal processes.'

const knowMore = 'Know more'
const letsConnect = "Let's connect"

export default {
  props: {
    subtitle: {
      type: String,
      default: subtitle,
    },

    title: {
      type: String,
      default: title,
    },

    upperTitle: {
      type: String,
      default: upperTitle,
    },

    leftLink: {
      type: [Object, String],
      default: '#services',
    },

    rightLink: {
      type: [Object, String],
      default: '#contact',
    },
  },

  data() {
    return {
      knowMore,
      letsConnect,
    }
  },
}
</script>

<style lang="scss" scoped>
a {
  @apply outline-0;
}
</style>
