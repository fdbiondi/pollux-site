<template>
  <div class="w-full">
    <!-- Our services -->
    <Services class="bg-secondary" />

    <!-- Technologies that we use -->
    <Tools class="bg-secondary" />

    <!-- Let's connect => to contact form -->
    <LetsConnectGradient />

    <!-- Other services -->
    <ServicesOthers class="bg-secondary__alt shadow-inner shadow-black-light/40" />

    <!-- Our clients -->
    <Clients class="shadow-md shadow-black-light/20" />

    <!-- Talk to us / Contact Form -->
    <Contact class="bg-secondary__alt" />

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
