<template>
  <div class="container mx-auto px-8 sm:px-4 md:px-2">
    <h2 class="title">
      {{ title }}
    </h2>

    <div
      class="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-8 lg:m-0 xl:grid-flow-col-dense xl:grid-cols-4"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
      >
        <Card
          class="xl:my-4"
          :title="item.title"
          :description="item.description"
          data-aos="zoom-in-up"
          :data-aos-once="true"
          :data-aos-delay="100 * index"
        >
          <img
            class="-mx-2"
            :src="item.image"
            :alt="item.title"
          />
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '~/components/Common/Cards/Card';

export default {
  components: {
    Card,
  },

  props: {
    title: {
      type: String,
      default: '',
    },

    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
* :deep(.card) {
  @apply border-4 border-gray-800 hover:bg-gray-800 hover:text-white hover:shadow-xl hover:shadow-gray-400;
}

* :deep(.card:hover img) {
  @apply contrast-0;
}

* :deep(.card h3) {
  @apply lines-2;
}

html.dark * :deep(.card) {
  @apply border-white hover:bg-white hover:text-black-light hover:shadow-gray-200;
}
</style>
