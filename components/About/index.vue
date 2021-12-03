<template>
  <section class="py-8 lg:py-16 xl:py-32">
    <div class="container mx-auto px-6">
      <div class="mb-16">
        <h2 class="title">About Us</h2>

        <p class="text-xl text-gray-200 mb-4 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus,
          nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem
          felis nec erat
        </p>
      </div>

      <div class="flex mb-12">
        <div class="w-1/2 px-12 flex flex-col items-center my-auto">
          <h2 class="title">The Team You Need</h2>

          <p
            v-for="(text, index) in teamYouNeed"
            :key="index"
            class="text-xl text-gray-200 mb-4 text-justify"
          >
            {{ text }}
          </p>
        </div>

        <div class="w-1/2 flex flex-col items-center px-32">
          <ServicesBlock
            v-for="({ description, title }, index) in services"
            :key="index"
            :description="description"
            :title="title"
            data-aos="zoom-in-up"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          description:
            "We continuously monitor and gather feedback from all of our clients in order to improve our services and adapt the delivery process. This way, we can ensure that our collaboration is satisfactory to you and future clients.",
          title: "Client Satisfaction",
        },

        {
          description:
            "We want you to get your app out there as soon as possible, and gather feedback from your users. Thanks to the MVP approach you’ll save money and time, and the scope will be under control.",
          title: "Fast Delivery Process",
        },

        {
          description:
            "We discuss priorities, long term plans and get feedback on regular meetings and shared communication channels with all the stakeholders. Every week, we share detailed timesheets to talk about budget, costs, risks, and opportunities.",
          title: "Transparency",
        },
      ],
      teamYouNeed: [
        "Choosing the right software development company translates into continuity and scalability of your product.",
        "At Pollux, we write code that will continue to work for you when your app grows and more customers use it.",
        "You will be taken care of at every stage of your growth: from idea and concept, through design, development and maintenance.",
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
section {
  background-image: url(~/assets/images/_5_alt.png);
  background-position: left bottom;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: transparent;
}
</style>
