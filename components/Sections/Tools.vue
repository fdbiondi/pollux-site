<template>
  <section class="py-4 lg:py-8 xl:py-16">
    <div class="container mx-auto px-8 sm:px-4 md:px-2">
      <h2 class="title">
        {{ title }}
      </h2>
    </div>

    <Slider :images="images">
      <template #default="{ props: { name, src, link, vClass } }">
        <a
          :href="link"
          target="_blank"
        >
          <img
            :src="src"
            :alt="name"
            :class="vClass"
            class="h-24 w-24 hover:scale-105 hover:saturate-150 hover:!filter-none hover:transition-transform"
            style="filter: grayscale(1) invert(0.2)"
          />
        </a>
      </template>
    </Slider>
  </section>
</template>

<script>
import Slider from '~/components/Common/List/Slider';
import { loadTools } from '~/support/files';
import { getToolClass, getToolLink } from '~/support/strings';

export default {
  components: {
    Slider,
  },

  data() {
    return {
      images: [],
      title: 'Some of the Technologies that we use',
    };
  },

  mounted() {
    this.images = loadTools((path, extension) => ({
      link: getToolLink(path, extension),
      vClass: getToolClass(path, extension),
    }));
  },
};
</script>
