<template>
  <div class="flex flex-col items-center 2xl:block">
    <div class="font-serif">
      <h2 class="font-light">
        {{ talkToUs }}
      </h2>
      <h2 class="font-bold">
        {{ getYour }}
      </h2>
      <h2 class="font-bold">
        <span class="text-pollux-pink">{{ project }}</span> {{ moving }}
      </h2>

      <span class="my-16 text-xl sm:p-8 2xl:my-0">
        <span>{{ fillOutForm }}</span>
        <a
          :href="`mailto: ${EMAIL}`"
          class="text-pollux-pink"
        >
          {{ EMAIL }}
        </a>
      </span>
    </div>
  </div>
</template>

<script>
import { EMAIL } from '~/support/constants/info';

const fillOutForm = 'Simply fill out the form or EMAIL us at';
const getYour = 'get your';
const moving = 'moving!';
const project = 'project';
const talkToUs = 'Talk to us and';

export default {
  data() {
    return {
      EMAIL,
      fillOutForm,
      getYour,
      moving,
      project,
      talkToUs,
    };
  },
};
</script>

<style lang="scss" scoped>
h2 {
  @apply my-1 cursor-default text-7xl uppercase last-of-type:mb-12 sm:px-8 sm:text-9xl md:text-8xl 2xl:my-16 2xl:last-of-type:mb-16;

  &:hover {
    text-shadow: 0 0 1.5rem hsl(0deg 0% 0% / 50%);
  }
}

html.dark h2:hover {
  text-shadow: 0 0 1.5rem hsl(0deg 0% 100% / 50%);
}
</style>
