<template>
  <section class="py-8 lg:py-16 xl:py-32">
    <div class="container mx-auto py-12 px-6 pb-16">
      <h2 class="title">The Development Process</h2>

      <div class="flex flex-wrap">
        <template v-for="(section, index) in sections">
          <div v-if="index % 2 !== 0" :key="index" class="w-2/6"></div>
          <div :key="index" class="w-4/6 py-8">
            <h4 class="subtitle">{{ section.subtitle }}</h4>

            <p
              v-for="(text, textIndex) in section.text"
              :key="textIndex"
              class="text-gray-200 text-xl mb-4 text-justify"
              :data-aos="index % 2 === 0 ? 'zoom-in-right' : 'zoom-in-left'"
            >
              {{ text }}
            </p>
          </div>
          <div v-if="index % 2 === 0" :key="index" class="w-2/6 p-8 lg:p-16">
            <!-- <img src="~/assets/images/_1.png" alt="temp" /> -->
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      mvp: {
        subtitle: "MVP Web Development",
        text: [
          "When building a web application, we recommend the MVP development approach. You’ll achieve a faster release, reduced costs, more time for testing, and tangible feedback. The MVP will help you know whether your business idea will work or not, what your users expect, and what functionalities you’ll need to change.",
          "A Minimum Viable Product is especially important for startups and medium-sized businesses that need to establish product-market fit quickly, without investing significant money.",
          "We want your business to leverage evidence, instead of assumptions. A well-developed MVP won’t be a buggy mess with limited usage and features. It’s a complete and usable software that allows you to test, gain user insights, prove your ideas, and improve development continuously based on real testing and feedback.",
        ],
      },
      poc: {
        subtitle: "Proof Of Concept",
        text: [
          "We can also build a proof-of-concept. This is a simpler, shorter, and cheaper alternative to an MVP. It’s great to prove your idea in a high-risk area, if it will work, if people will like it, or if there’s any demand. But unlike an MVP, it won’t allow you to generate revenue for further development.",
        ],
      },
      continuousDev: {
        subtitle: "Continuous Development",
        text: [
          "Thanks to this strategy, you can react to your users’ feedback almost instantly. It’s a constant loop process that includes: analysis & research, discovery workshops, designing, developing, testing, and releasing the product to collect user data, which we'll use to determine what updates and features the app will need next.",
          "Even from one sprint to another, our team will be at your disposal to quickly introduce improvements. We prototype, test, and enhance your app to deliver the cutting-edge product you deserve. Every iteration brings new business value and pushes your application forward. You’ll always be involved in the development process, to ensure our work aligns with your vision.",
        ],
      },
      productEnhancement: {
        subtitle: "Product Enhancement",
        text: [
          "If you’d like to update, improve or further develop your existing web application, our strategies for refactoring and bringing legacy code applications up-to-date include: A thorough research of the industry to understand the evolution of the users and competitors, analysis of the features and updates needed, and getting familiar with your product, to how to work with it and change it without breaking it.",
          "We adjust to the coding standard of the current application, we build new features on top of it and integrate new tools. While introducing these updates, we won’t be causing any downtime on production servers, which means your application will continue to run and be used by the users while we modernize it piece by piece.",
        ],
      },
    }
  },

  computed: {
    sections() {
      return [this.mvp, this.poc, this.continuousDev, this.productEnhancement]
    },
  },
}
</script>

<style lang="scss" scoped>
section {
  background-image: url(~/assets/images/_4_alt.png);
  background-position: left;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: auto;
  background-color: transparent;
}
</style>
