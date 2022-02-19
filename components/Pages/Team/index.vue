<template>
  <section class="py-8 lg:py-16 xl:py-32">
    <div class="container mx-auto px-6">
      <div class="mb-12 flex">
        <div class="my-auto flex w-1/2 flex-col items-center px-12">
          <h2 class="title">{{ sectionTitle }}</h2>

          <p
            v-for="(text, index) in teamYouNeed"
            :key="index"
            class="mb-4 text-justify text-xl text-gray-200"
          >
            {{ text }}
          </p>
        </div>

        <div class="flex w-1/2 flex-col items-center px-32">
          <CardSimple
            v-for="({ description, title }, index) in items"
            :key="index"
            :description="description"
            :title="title"
            font-size="text-xl"
            data-aos="zoom-in-up"
            class="my-4"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardSimple from '~/components/Common/Cards/CardSimple'

const sectionTitle = 'The Team You Need'

const items = [
  {
    description:
      'We continuously monitor and gather feedback from all of our clients in order to improve our services and adapt the delivery process. This way, we can ensure that our collaboration is satisfactory to you and future clients.',
    title: 'Client Satisfaction',
  },

  {
    description:
      'We want you to get your app out there as soon as possible, and gather feedback from your users. Thanks to the MVP approach you’ll save money and time, and the scope will be under control.',
    title: 'Fast Delivery Process',
  },

  {
    description:
      'We discuss priorities, long term plans and get feedback on regular meetings and shared communication channels with all the stakeholders. Every week, we share detailed timesheets to talk about budget, costs, risks, and opportunities.',
    title: 'Transparency',
  },
]

const teamYouNeed = [
  'Choosing the right software development company translates into continuity and scalability of your product.',
  'At Pollux, we write code that will continue to work for you when your app grows and more customers use it.',
  'You will be taken care of at every stage of your growth: from idea and concept, through design, development and maintenance.',
]

export default {
  components: {
    CardSimple,
  },

  data() {
    return {
      items,
      teamYouNeed,
      sectionTitle,
    }
  },
}
</script>

<style lang="scss" scoped>
section {
  background-image: url(~/assets/images/clouds.png);
  background-position: left bottom;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: transparent;
}
</style>
