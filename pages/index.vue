<template>
  <div class="w-full">
    <!-- Our services -->
    <Services class="bg-gray-100 dark:bg-black-light" />

    <!-- Technologies that we use -->
    <Tools class="bg-gray-100 dark:bg-black-light" />

    <!-- Let's connect => to contact form -->
    <LetsConnectGradient />

    <!-- Other services -->
    <ServicesOthers class="bg-gray-100 dark:bg-black-light" />

    <!-- <Test /> -->

    <!-- <div class="ruler"></div> -->

    <!-- <ServicesProductDesign /> -->

    <!-- Our clients -->
    <Clients />

    <!-- Talk to us / Contact Form -->
    <Contact class="bg-gray-100 dark:bg-black-light" />

    <BackgroundCodeHtml />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.ruler {
  width: 100vw;
  position: fixed;
  height: 2px;
  background-color: white;
  transform: rotate(-8.5deg);
  bottom: 15%;
  z-index: 100;
}
</style>
