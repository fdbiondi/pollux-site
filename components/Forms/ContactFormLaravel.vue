<template>
  <div class="container mx-auto px-4 font-serif sm:px-6">
    <div class="flex">
      <div v-if="$slots.default" class="mb-16 w-full 2xl:mb-0 2xl:w-1/2">
        <slot />
      </div>

      <div class="w-50 xl:w-1/2">
        <form>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="firstname" class="block">First Name</label>
              <input
                v-model="firstname"
                name="firstname"
                type="text"
                placeholder="First Name"
                class="mb-4"
              />
            </div>

            <div>
              <label for="lastname" class="block">Last Name</label>
              <input
                v-model="lastname"
                name="lastname"
                type="text"
                placeholder="Last Name"
                class="mb-4"
              />
            </div>

            <div>
              <label for="company" class="block">Company</label>
              <input
                v-model="company"
                name="company"
                type="text"
                placeholder="Company"
                class="mb-4"
              />
            </div>

            <div>
              <label for="email" class="block">E-mail</label>
              <input
                v-model="email"
                name="email"
                type="email"
                placeholder="E-mail"
                class="mb-4"
              />
            </div>

            <div>
              <label for="startDate" class="block"
                >Estimated project start date</label
              >
              <input
                v-model="startDate"
                name="startDate"
                type="text"
                :placeholder="new Date().toLocaleDateString('es-AR')"
                class="mb-4"
              />
            </div>

            <div>
              <label for="budget" class="block">Budget</label>
              <select v-model="budget" name="budget" class="mb-4 w-80">
                <option value="1000-4999">$1,000-$4,999</option>
                <option value="5000-24999">$5,000-$24,999</option>
                <option value="25000-99999">$25,000-$99,999</option>
                <option value="+100000">$100,000+</option>
              </select>
            </div>

            <div class="col-span-2">
              <label for="description" class="block"
                >Brief project description</label
              >
              <textarea
                v-model="description"
                name="description"
                cols="30"
                rows="10"
                placeholder="Project Description"
                class="mb-4 max-h-64 w-full sm:max-h-56"
              />
            </div>

            <p class="text-left italic text-black-light dark:text-white sm:p-8">
              I consent to Pollux processing my personal data according to the
              <a href="" class="text-pollux-pink">Privacy Policy</a>
            </p>
            <FileInput
              v-model="files"
              class="italic text-black-light dark:text-white"
              name="files"
              label="Attach Files"
            />

            <div class="col-span-2">
              <button
                class="button button--outline dark:button--outline-dark w-1/1 sm:w-1/2"
              >
                Send
              </button>
            </div>
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
      budget: '1000-4999',
      email: null,
      files: null,
      description: null,
      firstname: null,
      lastname: null,
      company: null,
      startDate: null,
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
