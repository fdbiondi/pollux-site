<template>
  <div class="container">
    <div class="font-fredoka-one text-white pl-2">
      <div class="tracking-wider text-5xl">Pollux</div>
      <div class="text-pollux-cyan text-md">Software Engineering</div>
    </div>
    <div class="overlay"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: auto;
  height: auto;
  margin: auto;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  cursor: pointer;
}
</style>
