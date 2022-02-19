<template>
  <section class="py-4 lg:py-8 xl:py-16">
    <div class="container mx-auto px-6">
      <h2 class="title">{{ toolsSectionTitle }}</h2>
    </div>

    <Slider :images="images">
      <template #default="{ props: { name, src, link, vClass } }">
        <a :href="link" target="_blank">
          <img
            :src="src"
            :alt="name"
            class="h-24 w-24 grayscale hover:scale-105 hover:saturate-150 hover:!filter-none hover:transition-transform"
            :class="vClass"
          />
        </a>
      </template>
    </Slider>
  </section>
</template>

<script>
import Slider from '~/components/Common/List/Slider'
import { getFromContext } from '~/support/files'
import { getToolClass, getToolLink } from '~/support/strings'

const toolsSectionTitle = 'Some of the Technologies that we use'

export default {
  components: {
    Slider,
  },

  data() {
    return {
      images: [],
      toolsSectionTitle,
    }
  },

  mounted() {
    this.images = getFromContext(
      require.context('@/assets/images/tools/', true, /\.svg$/),
      '.svg',
      (path, extension) => ({
        link: getToolLink(path, extension),
        vClass: getToolClass(path, extension),
      })
    )
  },
}
</script>
