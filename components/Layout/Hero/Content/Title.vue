<template>
  <div class="hero--titles">
    <h2
      class="hero--title"
      style="--order: 1"
    >
      {{ upperTitle }}
    </h2>
    <h1
      class="hero--title title-gradient tracking-wider"
      style="--order: 2"
    >
      {{ title }}
    </h1>

    <p
      class="hero--title"
      style="--order: 3"
    >
      {{ subtitle }}
    </p>

    <div class="flex flex-col gap-2 sm:flex-row sm:gap-4">
      <div
        class="animate-in"
        style="--order: 1"
      >
        <nuxt-link :to="leftLink">
          <button
            class="button button-outline-dark xl:dark:button-secondary-dark xl:button-secondary w-full sm:w-auto"
          >
            {{ knowMore }}
          </button>
        </nuxt-link>
      </div>

      <div
        class="animate-in"
        style="--order: 2"
      >
        <nuxt-link :to="rightLink">
          <button class="button button-primary w-full sm:w-auto">
            {{ letsConnect }}
          </button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
const title = 'SOFTWARE SOLUTIONS';
const upperTitle = 'We build awesome and custom';
const subtitle =
  'We are a software company dedicated to build custom web and mobile applications';

const knowMore = 'Know more';
const letsConnect = "Let's connect";

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
      default: '#what-we-offer',
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
    };
  },
};
</script>

<style lang="scss" scoped>
a {
  @apply outline-0;
}
</style>
