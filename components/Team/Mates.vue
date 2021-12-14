<template>
  <section class="py-4 lg:py-8 xl:py-16">
    <div class="container mx-auto px-6">
      <h2 class="title">Our Team</h2>

      <p class="text-xl text-gray-200 mb-4 text-justify leading-relaxed">
        Technology alone is not enough to succeed, every product needs a team of
        passionate people who will give it their best.
      </p>

      <div class="flex flex-wrap">
        <div
          v-for="(avatar, index) in apes"
          :key="index"
          class="p-4 mx-auto my-2 flex flex-col items-center"
        >
          <img
            :src="avatar.pathLong"
            :alt="`${alt} - ${avatar.name}`"
            class="rounded-[100%] border-4 border-gray-100 border-solid w-32 h-32"
          />
          <h4 class="font-title text-gray-200 text-center text-2xl mt-2">
            {{ avatar.name }}
          </h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    avatarType: {
      default: "apes",
      type: String,
      validator: (value) => ["apes", "astronauts", "punks"].includes(value),
    },
  },

  data() {
    return {
      apes: [],
      alt: "",
      alts: {
        apes: "Bored Ape Yacht Club",
        astronauts: "Bored Ape Astronaut",
        punks: "CryptoPunks",
      },
      names: [
        "Fabian",
        "Federico",
        "Gino",
        "Guido",
        "Juan",
        "Lucas",
        "Pablo",
        "Santiago",
        "Sergio",
      ],
    }
  },

  mounted() {
    this.alt = this.alts[this.avatarType]
    if (this.avatarType === "apes") {
      this.getAll(require.context("@/assets/images/apes/", true, /\.png$/))
    }
    if (this.avatarType === "astronauts") {
      this.getAll(
        require.context("@/assets/images/astronauts/", true, /\.png$/)
      )
    }
    if (this.avatarType === "punks") {
      this.getAll(require.context("@/assets/images/punks/", true, /\.png$/))
    }
  },

  methods: {
    getAll(r) {
      const names = this.shuffle(this.names)
      const images = this.shuffle(r.keys()).splice(0, this.names.length)

      images.forEach((key, index) =>
        this.apes.push({
          pathLong: r(key),
          pathShort: key,
          name: names[index],
        })
      )
    },

    shuffle(array) {
      let currentIndex = array.length
      let randomIndex

      // While there remain elements to shuffle...
      while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        // And swap it with the current element.
        ;[array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ]
      }

      return array
    },
  },
}
</script>

<style lang="scss" scoped>
img {
  &:hover {
    @apply transform scale-105 transition-all border-0;
  }
}
</style>
