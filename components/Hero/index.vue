<template>
  <main class="hero__wrapper mt-8 lg:mt-16 xl:mt-32 min-h-[70vh]">
    <section class="container mx-auto px-6 pb-16">
      <div class="w-full lg:flex items-center">
        <div class="w-full lg:w-1/2">
          <HeroTittles />
        </div>

        <div class="w-full lg:w-1/2 lg:pl-24">
          <div class="flex justify-center float-content">
            <img src="https://cdn.polkastarter.com/packs/media/images/hero/visual-atf-optimized-3d58fb22c924a0145d3a82bfbbd8af95.png" alt="pollux nodes test images">
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.float-content {
  overflow: hidden;
  transform: translatey(0px);
  box-sizing: border-box;
  animation: float 10s ease-in-out infinite;

  img {
    width: 100%;
    height: auto;
  }
}
</style>
