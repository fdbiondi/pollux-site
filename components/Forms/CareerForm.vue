<template>
  <div class="mb-4 px-8 pb-8 pt-6">
    <form
      :action="formUrl"
      method="POST"
      enctype="multipart/form-data"
      class="flex flex-row justify-center"
    >
      <FileInput
        name="curriculum"
        accept=".pdf"
        :value="curriculum"
        :can-load="notLoaded"
        @selected="selected"
      >
        <div class="flex flex-col flex-wrap items-start">
          <input
            name="name"
            type="text"
            maxlength="20"
            :readonly="notLoaded"
            :placeholder="placeholder"
            :value="name"
            @input="name = $event.target.value"
          />
        </div>
      </FileInput>

      <button
        class="button button-secondary dark:button-secondary-dark"
        :disabled="sendDisabled"
      >
        Send
      </button>
    </form>

    <div
      v-if="curriculum"
      class="mt-2 text-gray-900 dark:text-gray-200 transition-opacity"
    >
      <span
        class="cursor-pointer hover:text-white"
        @click="clearFile"
      >
        <fa-icon icon="xmark" />
      </span>

      <span>{{ filename }}</span>
    </div>
  </div>
</template>

<script>
import FileInput from '~/components/Common/Inputs/FileInput';

export default {
  components: {
    FileInput,
  },

  data() {
    return {
      curriculum: null,
      name: null,
      formUrl: this.$config.CAREER_FORM_URL,
    };
  },

  computed: {
    filename() {
      return this.curriculum?.name;
    },

    notLoaded() {
      return !this.curriculum;
    },

    placeholder() {
      return this.notLoaded ? 'Send us your cv' : 'Tell us your name';
    },

    sendDisabled() {
      return !this.curriculum || !this.name;
    },
  },

  methods: {
    clearFile() {
      this.curriculum = null;
      this.name = null;
    },

    selected(file, ...[, type]) {
      if (!type.includes('pdf')) {
        return;
      }

      this.curriculum = file;
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  @apply mx-2 px-12 py-3;
}
</style>
