export default {
  data() {
    return {
      moving: false,
      transform: 0,
      initialPosition: null,
      lastPageX: 0,
    }
  },

  computed: {
    track() {
      return document.querySelector(".slider--swipe-track")
    },

    trackNotExists() {
      return this.track === null
    },
  },

  methods: {
    gestureStart(event) {
      if (this.trackNotExists) {
        return
      }

      if (process.client) {
        event.preventDefault()

        this.initialPosition = event.pageX
        this.moving = true

        const transformMatrix = window
          .getComputedStyle(this.track)
          .getPropertyValue("transform")

        if (transformMatrix !== "none") {
          this.transform = parseInt(transformMatrix.split(",")[4].trim())
        }
      }
    },

    gestureMove(event) {
      if (this.trackNotExists) {
        return
      }

      if (process.client) {
        event.preventDefault()

        const maxTrackSize = this.images.length * 16 * (6 - 1 / 2) // count * 16[=>1rem] * (6 rem - 1/2)

        if (this.moving) {
          if (event.pageX - this.lastPageX < 0) {
            if (this.transform > 0) {
              return
            }
          } else if (Math.abs(this.transform) > maxTrackSize) {
            return
          }

          const diff = event.pageX - this.initialPosition

          if (this.track) {
            this.track.style.transform = `translateX(${
              this.transform - diff
            }px)`
          }
        }

        this.lastPageX = event.pageX
      }
    },

    gestureEnd(event) {
      if (this.trackNotExists) {
        return
      }

      if (process.client) {
        event.preventDefault()
        this.moving = false
      }
    },
  },
}
