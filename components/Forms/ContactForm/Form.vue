<template>
  <form
    :action="formUrl"
    method="POST"
    class="mx-auto flex max-w-3xl flex-col sm:px-16"
  >
    <textarea
      v-model="description"
      name="description"
      cols="30"
      rows="10"
      placeholder="Brief Project Description"
      class="mb-4 max-h-48 w-full sm:max-h-96"
      required
    />

    <input
      v-model="fullname"
      name="fullname"
      type="text"
      placeholder="Full Name"
      class="mb-4 w-full"
    />

    <input
      v-model="email"
      name="email"
      type="email"
      placeholder="Email"
      class="mb-4 w-full"
      required
    />

    <input
      v-model="phone"
      name="phone"
      type="text"
      placeholder="Phone"
      class="mb-4 w-full"
    />

    <div class="mb-4 flex flex-col gap-4 sm:flex-row">
      <input
        v-model="startDate"
        type="text"
        name="estimated-start-date"
        placeholder="Estimated Start Date"
        onfocus="(this.type='date')"
        class="w-full"
      />

      <select
        v-model="budget"
        name="budget"
        placeholder="Budget Size"
        class="w-full"
      >
        <option
          v-for="option in options"
          :key="option.value"
          :disabled="option.value === null"
          :selected="option.value === budget"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
    </div>

    <div
      v-if="false"
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
        <span
          class="ml-2"
          @click="nda = !nda"
        >
          Get an NDA
        </span>
      </label>

      <FileInput
        v-model="files"
        name="files"
        label="Attach Files"
      />
    </div>

    <div class="mt-8 flex flex-wrap sm:mt-0">
      <button
        class="button button-outline dark:button-outline-dark m-auto w-full sm:w-1/2"
        type="submit"
      >
        Contact Us
      </button>

      <span class="w-full sm:w-1/2 sm:p-8">
        I consent to Pollux processing my personal data according to the
        <nuxt-link
          to="privacy-policy"
          class="text-pollux-pink"
        >
          Privacy Policy
        </nuxt-link>
      </span>
    </div>
  </form>
</template>

<script setup>
import FileInput from '~/components/Common/FileInput';

const config = useRuntimeConfig();

const budget = null;
const description = null;
const email = null;
const files = null;
const fullname = null;
const phone = null;
const nda = false;
const startDate = null;
const formUrl = config.public.contactFormURL;

const options = [
  {
    value: null,
    label: 'Budget Size',
  },
  {
    value: '1000-5000',
    label: '$1,000 - $5,000',
  },
  {
    value: '5000-25000',
    label: '$5,000 > $25,000',
  },
  {
    value: '25000-100000',
    label: '$25,000 > $100,000',
  },
  {
    value: '+100000',
    label: '+ $100,000',
  },
];
</script>
