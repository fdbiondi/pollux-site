<template>
  <section class="py-4 lg:py-8 xl:py-16">
    <div class="container mx-auto px-6">
      <h2 class="title">Some of the clients we work with</h2>

      <div class="flex w-full p-0">
        <div
          v-for="client in Array.from(Array(10).keys())"
          :key="client"
          class="p-4 flex-grow-0 flex-shrink-0 max-h-full"
        >
          <fa-icon icon="users" class="text-7xl text-gray-200" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
