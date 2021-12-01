<template>
  <div class="line-section">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.line-section {
  pointer-events: none;
  width: 1536px;
  max-width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  opacity: 0.24;
  z-index: 0;
}

.line-section .line {
  display: none;
}

@media only screen and (min-width: 1600px) {
  .line-section .line {
    display: block;
  }
}

.line-section .line:nth-child(2) {
  left: calc(25% + 5px);
}
.line-section .line:nth-child(3) {
  left: calc(50% - 1px);
}
.line-section .line:nth-child(4) {
  left: calc(75% - 6px);
}
.line-section .line:nth-child(5) {
  left: calc(100% - 10px);
}

.line-section .line {
  position: absolute;
  height: 100%;
  border-left-width: 1px;
  border-style: dashed;
  border-color: #ffffff;
}
</style>
