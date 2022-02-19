<template>
  <div class="container mx-auto">
    <h2 class="title">{{ sectionTitle }}</h2>

    <div class="grid grid-flow-col-dense grid-cols-4">
      <div v-for="({ title, description, image }, i) in items" :key="i">
        <Card
          :title="title"
          :description="description"
          data-aos="zoom-in-up"
          :data-aos-delay="100 * i"
        >
          <img :src="image" :alt="title" />
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '~/components/Common/Cards/Card'

export default {
  components: {
    Card,
  },

  props: {
    sectionTitle: {
      type: String,
      default: '',
    },

    items: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
* >>> .card {
  @apply border-4 border-gray-800 hover:bg-gray-800 hover:text-white hover:shadow-xl hover:shadow-gray-400 dark:border-white
    dark:hover:bg-white dark:hover:text-black-light dark:hover:shadow-gray-200;
}

* >>> .card:hover img {
  @apply contrast-0;
}

* >>> .card h3 {
  @apply lines-2;
}
</style>
