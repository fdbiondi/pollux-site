<template>
  <div class="tools-slider relative overflow-hidden w-full p-0">
    <div class="slide-track">
      <div
        v-for="{ pathLong, pathShort } in images"
        :key="pathShort"
        class="p-4 flex-grow-0 flex-shrink-0 max-h-full"
      >
        <img :src="pathLong" :alt="pathShort" class="w-24 h-24" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [],
    }
  },

  mounted() {
    this.getAll(require.context("@/assets/images/tools/", true, /\.svg$/))
  },

  methods: {
    getAll(r) {
      r.keys().forEach((key) =>
        this.images.push({ pathLong: r(key), pathShort: key })
      )
    },
  },
}
</script>

<style lang="scss" scoped>
@-webkit-keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-50vw * 3));
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-50vw * 3));
  }
}

.tools-slider .slide-track {
  -webkit-animation: scroll 40s linear infinite;
  animation: scroll 20s linear infinite;
  display: flex;
  flex-direction: row;
}
</style>
