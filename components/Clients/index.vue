<template>
  <section class="my-4 lg:my-8 xl:my-16">
    <div class="container mx-auto px-6">
      <h2 class="title">Some of the clients we work with</h2>

      <div class="flex w-full p-0">
        <div
          v-for="client in Array.from(Array(10).keys())"
          :key="client"
          class="p-4 flex-grow-0 flex-shrink-0 max-h-full"
        >
          <img
            src="~/assets/images/icons/icons8-anmeld-64.png"
            alt="Pollux client"
            class="w-24 h-24"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
