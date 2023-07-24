<template>
  <div class="relative">
    <div class="container mx-auto py-24">
      <div class="flex flex-wrap px-6 md:px-0">
        <div
          v-for="(column, colIndex) in columns"
          :key="`column-${colIndex}`"
          class="grid w-full justify-center md:grid-cols-2 lg:flex lg:w-1/3 lg:flex-col"
        >
          <div
            v-for="({ description, image, title }, itemIndex) in column.items"
            :key="`column-${colIndex}-item-${itemIndex}`"
            class="relative"
          >
            <div
              class="float-section-line"
              :style="column.decoratorStyle"
            />

            <CardSimple
              :class="column.cardClass"
              :description="description"
              :image="column.sideImage ? image : null"
              :title="title"
              data-aos="zoom-in-up"
              :data-aos-once="true"
            >
              <img
                v-if="!column.sideImage"
                :src="image"
                :alt="title"
              >
            </CardSimple>
          </div>
        </div>
      </div>
    </div>

    <LineSection />
  </div>
</template>

<script>
import LineSection from '~/components/Common/UI/LineSection';
import CardSimple from '~/components/Common/Cards/CardSimple';

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

    centerItems: {
      type: Array,
      default: () => [],
    },

    leftItems: {
      type: Array,
      default: () => [],
    },

    settings: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    const defaultSettings = {
      left: {
        sideImage: true,
        decoratorStyle: 'top: 3.5rem',
        cardClass: 'my-2 px-8',
      },
      center: {
        sideImage: true,
        decoratorStyle: 'top: 3.5rem',
        cardClass: 'my-2 px-8',
      },
      right: {
        sideImage: true,
        decoratorStyle: 'top: 3.5rem',
        cardClass: 'my-2 px-8',
      },
    };

    return {
      opts: Object.assign({}, defaultSettings, this.settings),
    };
  },

  computed: {
    columns() {
      return [
        {
          ...this.opts.left,
          items: this.leftItems,
        },

        {
          ...this.opts.center,
          items: this.centerItems,
        },

        {
          ...this.opts.right,
          items: this.rightItems,
        },
      ];
    },
  },
};
</script>
