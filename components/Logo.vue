<template>
  <div class="container">
    <div class="font-pollux text-white">
      <div class="px-1 tracking-wider text-7xl">Pollux</div>
      <div class="text-rose-500 text-2xl">Software Engineering</div>
    </div>
    <div class="overlay"></div>
  </div>
</template>

<script>
export default {

}
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
