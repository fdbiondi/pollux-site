<template>
  <main class="hero__wrapper py-8 lg:py-16 xl:py-24 min-h-[70vh]">
    <section class="container mx-auto px-6 pb-16">
      <div class="w-full lg:flex items-center">
        <div class="w-full lg:w-1/2">
          <HeroTittles />
        </div>

        <div class="w-full lg:w-1/2 lg:pl-24">
          <div class="flex justify-center float-content">
            <img src="~/assets/images/_1_alt.png" alt="pollux test image" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.float-content {
  overflow: hidden;
  transform: translatey(0px);
  box-sizing: border-box;
  animation: float 7s ease-in-out infinite;

  img {
    width: 100%;
    height: auto;
  }
}
</style>
