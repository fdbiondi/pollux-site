<template>
  <div
    class="
      relative
      py-8
      lg:py-16
      xl:py-32
      border-b border-dashed border-white border-opacity-20
    "
  >
    <div class="container mx-auto">
      <div class="flex items-start">
        <div
          v-for="({ title, description }, i) in list"
          :key="i"
          class="relative w-1/3 px-8"
        >
          <div class="float-section-line"></div>

          <ServicesBlock
            :description="description"
            :title="title"
            data-aos="fade-in-up"
            :data-aos-delay="100 * i"
          >
            <template #middle>
              <hr class="mt-4 mb-8" />
            </template>
          </ServicesBlock>
        </div>
      </div>
    </div>

    <LineSection />
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "Product Discovery Phase",
          description:
            "Collecting and analyzing information about your project, its market, and its end users allows us to clearly define the project goals, scope of work, and limitations as well as assess business opportunities and prepare a solution vision.",
        },
        {
          title: "Product Design",
          description:
            "This is a complex multi-step process at the junction of engineering, management, and graphic design. It provides a comprehensive understanding of what the final product will look like and feel like. It also defines what tasks the product will handle and with what tools it will do so.",
        },
        {
          title: "Product Engineering Phase",
          description:
            "Establish the roadmap and the team to provide a predictable development process. Create efficient projects with the latest technologies and brand-new approaches.",
        },
      ],
    }
  },
}
</script>

<style scoped>
* >>> .subtitle {
  @apply title-gradient;
}
</style>
