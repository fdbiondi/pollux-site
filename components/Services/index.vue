<template>
  <section id="services" class="py-8 lg:py-16 xl:py-16">
    <div class="container mx-auto">
      <h2 class="title">Find your software development Service</h2>

      <div class="flex flex-wrap justify-between items-center">
        <div
          v-for="({ service, description, image }, i) in services"
          :key="i"
          class="w-full md:w-1/2 lg:w-1/4 flex-grow-0"
        >
          <ServicesCard
            :title="service"
            :description="description"
            data-aos="zoom-in-up"
            :data-aos-delay="100 * i"
            bg-color="bg-transparent"
          >
            <img :src="image" alt="pollux services" />
          </ServicesCard>
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

          image: require("~/assets/images/icons/icons8-source-code-64.png"),
          service: "Web Development",
        },

        {
          description:
            "Build well-designed and optimized custom mobile applications with a delightful UX for both iOS and Android.",

          image: require("~/assets/images/icons/icons8-iphone-64.png"),
          service: "Mobile Development",
        },

        {
          description:
            "Give your product idea a shape. Plan and evaluate the essential features of your product to accomplish your business goals and eliminate possible mistakes.",

          image: require("~/assets/images/icons/icons8-multiple-devices-64.png"),
          service: "Product Design",
        },

        {
          description:
            "Leverage the power of sales online, with a customized ecommerce platform that suits your needs.",

          image: require("~/assets/images/icons/icons8-shopping-cart-64.png"),
          service: "Ecommerce Development",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
