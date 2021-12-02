<template>
  <section class="relative py-8 lg:py-16 xl:py-32">
    <div class="container mx-auto px-6">
      <h2 class="title">Our Team</h2>

      <p class="text-xl text-gray-200 mb-4 text-justify">
        Technology alone is not enough to succeed, every product needs a team of
        passionate people who will give it their best.
      </p>

      <div class="flex flex-wrap">
        <div
          v-for="(ape, index) in apes"
          :key="index"
          class="w-1/5 p-8 mx-auto my-6"
        >
          <img
            :src="ape.pathLong"
            :alt="`Bored Ape Yacht Club ${ape.name}`"
            class="rounded-[100%] border-4 border-gray-100 border-solid"
          />
          <h4 class="font-title text-gray-200 text-center text-2xl mt-2">
            {{ ape.name }}
          </h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      apes: [],
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
    this.getAll(require.context("@/assets/images/apes/", true, /\.png$/))
  },

  methods: {
    getAll(r) {
      const names = this.shuffle(this.names)
      const images = this.shuffle(r.keys())

      images.pop()

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

<style lang="scss" scoped></style>
