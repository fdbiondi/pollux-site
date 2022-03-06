<template>
  <div class="container mx-auto px-6 font-serif">
    <div class="flex">
      <div v-if="$slots.default" class="w-1/2">
        <slot />
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
            class="flex flex-row justify-between italic text-black-light dark:text-white"
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

            <FileInput
              v-model="files"
              name="files"
              label="Attach Files"
            ></FileInput>
          </div>

          <div class="flex">
            <button
              class="button button--outline dark:button--outline-dark m-auto w-1/2"
            >
              BOOK A CALL
            </button>

            <span class="w-1/2 p-8">
              I consent to Pollux processing my personal data according to the
              <a href="" class="text-pollux-pink">Privacy Policy</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import FileInput from '~/components/Common/Inputs/FileInput'

export default {
  components: {
    FileInput,
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
