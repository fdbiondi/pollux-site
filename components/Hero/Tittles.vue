<template>
  <div class="hero--titles">
    <h2 class="hero--title" style="--order: 1">
      Custom Software Solutions for
    </h2>
    <h1 class="hero--title title-gradient" style="--order: 2">
      Business Success
    </h1>

    <p class="hero--title" style="--order: 3">
      Innovative software development and consulting partner. We help products
      scale through the use of technology solutions to improve customer
      experience and internal processes.
    </p>

    <div class="flex flex-row gap-4">
      <div class="animate-in" style="--order: 1">
        <nuxt-link to="#services">
          <button class="button button--primary">Know more</button>
        </nuxt-link>
      </div>

      <div class="animate-in" style="--order: 2">
        <nuxt-link to="#contact">
          <button class="button button--secondary">Let's connect</button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
