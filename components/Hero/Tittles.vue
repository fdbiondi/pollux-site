<template>
  <div class="hero--titles">
    <h2 class="hero--title" style="--order: 1">
      {{ uppertitle }}
    </h2>
    <h1 class="hero--title title-gradient tracking-wider" style="--order: 2">
      {{ title }}
    </h1>

    <p class="hero--title" style="--order: 3">
      {{ subtitle }}
    </p>

    <div class="flex flex-row gap-4">
      <div class="animate-in" style="--order: 1">
        <nuxt-link to="#services">
          <button class="button button--primary">{{ knowMore }}</button>
        </nuxt-link>
      </div>

      <div class="animate-in" style="--order: 2">
        <nuxt-link to="#contact">
          <button class="button button--secondary">{{ letsConnect }}</button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
const title = "Business Success"
const upperTitle = "Custom Software Solutions for"
const subtitle =
  "Innovative software development and consulting partner. We help products scale through the use of technology solutions to improve customer experience and internal processes."

const knowMore = "Know more"
const letsConnect = "Let's connect"

export default {
  data() {
    return {
      title,
      upperTitle,
      subtitle,
      knowMore,
      letsConnect,
    }
  },
}
</script>

<style lang="scss" scoped></style>
