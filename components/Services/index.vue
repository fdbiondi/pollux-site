<template>
  <section class="relative mt-8 lg:mt-16 xl:mt-32">
    <!-- <LineSection /> -->

    <div class="container mx-auto py-12 px-6 pb-16">
      <h2 class="font-arch-daughter text-5xl font-bold text-gray-200 px-8 mb-8">
        Find your software development Service
      </h2>

      <div class="flex flex-wrap justify-between items-center">
        <div
          v-for="({ service, description, icon }, i) in services"
          :key="i"
          class="w-full md:w-1/2 lg:w-1/4 flex-grow-0"
        >
          <ServicesCard :title="service" :description="description" data-aos="zoom-in-up">
            <fa-icon :icon="icon" class="text-3xl" />
          </ServicesCard>
        </div>
      </div>
      <div class="flex flex-wrap justify-between items-center">
        <div
          v-for="({ service, description, icon }, i) in services"
          :key="i"
          class="w-full md:w-1/2 lg:w-1/4 flex-grow-0"
        >
          <ServicesBlock :title="service" :description="description" data-aos="zoom-in-up">
            <fa-icon :icon="icon" class="text-3xl" />
          </ServicesBlock>
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
            "Create beautiful, fast and secure web applications tailored exclusively for your business goals.",
          icon: "laptop-code",
          service: "Web Development",
        },

        {
          description:
            "Build well-designed and optimized custom mobile applications with a delightful UX for both iOS and Android.",
          icon: "mobile-alt",
          service: "Mobile Development",
        },

        {
          description:
            "Give your product idea a shape. Plan and evaluate the essential features of your product to accomplish your business goals and eliminate possible mistakes.",
          icon: "drafting-compass",
          service: "Product Design",
        },

        /* {
          description:
            "We have rock-solid DevOps/SLA practices to help you leverage cloud technology speeding up development and increasing app security and scalability.",
          icon: "cloud",
          service: "Cloud Technology",
        }, */

        {
          description:
            "Leverage the power of sales online, with a customized ecommerce platform that suits your needs.",
          icon: "shopping-cart",
          service: "Ecommerce Development",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
