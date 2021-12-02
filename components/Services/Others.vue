<template>
  <div class="py-8 lg:py-16 xl:py-24">
    <div class="container mx-auto py-12 px-6 pb-16">
      <div class="flex">
        <div class="w-3/4 flex flex-row items-center px-8">
          <div
            v-for="({ description, image, service }, i) in services"
            :key="i"
            class="w-1/2"
          >
            <ServicesCard
              :title="service"
              :description="description"
              data-aos="zoom-in-up"
            >
              <img :src="image" alt="pollux services" />
            </ServicesCard>
          </div>
        </div>

        <div class="w-1/4 flex flex-col items-center">
          <template
            v-for="({ description, image, title }, index) in otherServices"
          >
            <ServicesBlock
              :key="index"
              :description="description"
              data-aos="zoom-in-up"
            >
              <template slot="title">
                <h4 class="font-title text-2xl font-semibold flex items-center">
                  <img :src="image" alt="pollux services" />
                  <span class="ml-2">{{ title }}</span>
                </h4>
              </template>
            </ServicesBlock>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      otherServices: [
        {
          description: "Take your business prototype app for a test drive",
          image: require("~/assets/images/icons/icons8-microscope-64.png"),
          title: "UX Design & Testing",
        },
        {
          description:
            "Create a beautiful and understandable interface to delight your users",
          image: require("~/assets/images/icons/icons8-light-64.png"),
          title: "UI Design & Branding",
        },
        {
          description:
            "Well-designed and colorful app, personalized on your brand’s concept and values, to build trust with your users",
          image: require("~/assets/images/icons/icons8-tune-64.png"),
          title: "Custom Designed",
        },
        {
          description:
            "Responsive and accessible user interfaces that allow more people to access it from different types of devices with different needs",
          image: require("~/assets/images/icons/icons8-amiable-64.png"),
          title: "User Friendly",
        },
      ],

      services: [
        {
          description:
            "We have rock-solid DevOps/SLA practices to help you leverage cloud technology speeding up development and increasing app security and scalability.",
          image: require("~/assets/images/icons/icons8-cloud-done-64.png"),
          service: "Cloud Technology",
        },

        {
          description:
            "Ship your MVP to market without spending months on assembling an in-house development team for your startup.",
          image: require("~/assets/images/icons/icons8-prototype-64.png"),
          service: "MVP Development",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
