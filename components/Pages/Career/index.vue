<template>
  <section class="py-8 font-stylish lg:py-12 xl:py-16">
    <div class="container mx-auto px-32 text-center">
      <h2 class="title">Career / Get On Board</h2>

      <h4 class="subtitle">
        We have a passion for the digital world. Enthusiasm for technology. And
        a really great team. We are Pollux.
        <span class="font-bold">Nice to meet you!</span>
      </h4>

      <div class="mb-4 px-8 pt-6 pb-8">
        <form class="flex flex-row justify-center">
          <FileInput
            :value="curriculum"
            name="curriculum"
            accept=".pdf"
            :can-load="notLoaded"
            @selected="selected"
          >
            <div class="flex flex-col flex-wrap items-start">
              <input
                name="name"
                type="text"
                :readonly="notLoaded"
                maxlength="20"
                :placeholder="placeholder"
                :value="name"
                @input="name = $event.target.value"
              />
            </div>
          </FileInput>

          <button class="button button--secondary" type="button" @click="send">
            Send
          </button>
        </form>

        <div v-if="curriculum" class="mt-2 text-gray-200 transition-opacity">
          <span class="cursor-pointer hover:text-white" @click="clearFile">
            <fa-icon icon="xmark" />
          </span>
          <span>{{ filename }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FileInput from '~/components/Common/Inputs/FileInput'

export default {
  components: {
    FileInput,
  },

  data() {
    return {
      curriculum: null,
      name: null,
    }
  },

  computed: {
    notLoaded() {
      return !this.curriculum
    },

    filename() {
      return this.curriculum?.name
    },

    placeholder() {
      return this.notLoaded ? 'Send us your cv' : 'Tell us your name'
    },
  },

  methods: {
    clearFile() {
      this.curriculum = null
      this.name = null
    },

    send() {
      // TODO: implement validation and return
      // if (!this.curriculum || !this.name) {}
      // TODO: implement send form
    },

    selected(file, ...[, type]) {
      if (!type.includes('pdf')) {
        return
      }

      this.curriculum = file
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  @apply mx-2 px-12;
}

.subtitle {
  @apply text-4xl font-normal leading-relaxed;
}
</style>
