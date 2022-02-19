<template>
  <div class="relative">
    <div class="container mx-auto py-24">
      <div class="flex">
        <div class="flex w-2/3 flex-col justify-center">
          <div
            v-for="({ description, image, title }, i) in items"
            :key="i"
            class="relative"
          >
            <div class="float-section-line" style="top: 10rem" />

            <CardSimple
              :title="title"
              :description="description"
              data-aos="zoom-in-up"
              class="my-16 w-1/2 px-8"
            >
              <img :src="image" :alt="title" />
            </CardSimple>
          </div>
        </div>

        <div class="flex w-1/3 flex-col items-start">
          <div
            v-for="({ description, image, title }, index) in rightItems"
            :key="index"
            class="relative"
          >
            <div class="float-section-line" style="top: 3.5rem" />

            <CardSimple
              :description="description"
              :image="image"
              :title="title"
              data-aos="zoom-in-up"
              class="my-2 px-8"
            />
          </div>
        </div>
      </div>
    </div>

    <LineSection />
  </div>
</template>

<script>
import LineSection from '~/components/Common/UI/LineSection'
import CardSimple from '~/components/Common/Cards/CardSimple'

export default {
  components: {
    LineSection,
    CardSimple,
  },

  props: {
    rightItems: {
      type: Array,
      default: () => [],
    },

    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped></style>
