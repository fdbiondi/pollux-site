export default {
  data() {
    return {
      activePage: 0,
    }
  },

  computed: {
    imagesToList() {
      if (process.client) {
        const start = this.activePage * this.imagesOnScreen

        return [...this.images].slice(start, start + this.imagesOnScreen)
      }

      return []
    },

    imagesOnScreen() {
      const width = window.innerWidth
      const imageSize = 7 * 16

      return width / imageSize
    },

    pages() {
      return Math.ceil(this.images.length / this.imagesOnScreen)
    },
  },
}
