<template>
  <section id="contact" class="font-stylish py-8 lg:py-16 xl:py-32">
    <div class="container mx-auto px-6">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="talk-with-us font-light">Talk to us and</h2>
          <h2 class="talk-with-us font-bold">get your</h2>
          <h2 class="talk-with-us font-bold">
            <span class="text-pollux-pink">project</span> moving!
          </h2>

          <span class="text-gray-200 text-xl p-8">
            Simply fill out the form or email us at
            <a href="mailto: hello@polluxcoop.com" class="text-pollux-pink">
              hello@polluxcoop.com
            </a>
          </span>
        </div>

        <div class="w-1/2">
          <form class="flex flex-col px-16">
            <textarea
              v-model="description"
              name="description"
              cols="30"
              rows="10"
              placeholder="Project Description"
              class="mb-4 w-full"
            ></textarea>

            <select
              v-model="budget"
              name="budget"
              placeholder="Budget Size"
              class="mb-4 w-full"
            >
              <option value="null" selected disabled>Budget Size</option>
              <option value="-5000">- 5k</option>
              <option value="5000-20000">5k > 20k</option>
              <option value="+20000">+ 20K</option>
            </select>

            <input
              v-model="name"
              name="name"
              type="text"
              placeholder="Name"
              class="mb-4 w-full"
            />

            <input
              v-model="email"
              name="email"
              type="email"
              placeholder="Email"
              class="mb-4 w-full"
            />

            <div
              class="flex flex-row wrapper justify-between text-white italic"
            >
              <label class="flex items-center">
                <input
                  ref="nda"
                  name="nda"
                  type="checkbox"
                  :value="nda"
                  @input="nda = !nda"
                />
                <span class="ml-2" @click="nda = !nda"> Get an NDA </span>
              </label>

              <File v-model="files" name="files" label="Attach Files"></File>
            </div>

            <div class="flex">
              <button class="w-1/2 button button--outline m-auto">
                BOOK A CALL
              </button>

              <span class="w-1/2 text-gray-200 p-8">
                I consent to Pollux processing my personal data according to the
                <a href="" class="text-pollux-pink">Privacy Policy</a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import File from "~/components/Shared/InputFile"

export default {
  components: {
    File,
  },

  data() {
    return {
      budget: null,
      description: null,
      email: null,
      files: null,
      name: null,
      nda: false,
    }
  },

  methods: {
    checkNDA() {
      this.nda = !this.nda
    },
  },
}
</script>

<style lang="scss" scoped>
.talk-with-us {
  @apply text-8xl text-gray-200 my-16 px-8 uppercase cursor-default;

  &:hover {
    text-shadow: 0 0 1.5rem hsl(0deg 0% 100% / 0.5);
  }
}
</style>
