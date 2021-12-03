<template>
  <div class="py-8 lg:py-12 xl:py-16">
    <div class="container mx-auto px-32 text-center">
      <h1 class="title">Career / Get On Board</h1>

      <h4 class="subtitle">
        We have a passion for the digital world. Enthusiasm for technology. And
        a really great team. We are Pollux.
        <span class="font-bold">Nice to meet you!</span>
      </h4>

      <form class="flex flex-col items-center px-8 pt-6 pb-8 mb-4">
        <div class="w-1/2 mb-4">
          <input name="curriculum" type="text" placeholder="Send us your cv" />
          <button class="button--secondary" type="button">Send</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
button {
  @apply px-12 mx-2;
}

.subtitle {
  @apply text-4xl font-normal leading-relaxed;
}
</style>
