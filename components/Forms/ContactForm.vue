<template>
  <div class="container mx-auto px-4 font-serif sm:px-6">
    <div class="flex flex-wrap">
      <div
        v-if="$slots.default"
        class="mb-16 w-full 2xl:mb-0 2xl:w-1/2"
      >
        <slot />
      </div>

      <div class="w-full 2xl:w-1/2">
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

          <div class="flex flex-col sm:flex-row gap-4 mb-4">
            <input
              v-model="fullname"
              name="fullname"
              type="text"
              placeholder="Full Name"
              class="w-full"
            />

            <input
              v-model="phone"
              name="phone"
              type="text"
              placeholder="Phone"
              class="w-full"
            />
          </div>

          <input
            v-model="email"
            name="email"
            type="email"
            placeholder="Email"
            class="mb-4 w-full"
            required
          />

          <div class="flex flex-col sm:flex-row gap-4 mb-4">
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
                value="null"
                selected
                disabled
              >
                Budget Size
              </option>
              <option value="1000-5000">
                $1,000 - $5,000
              </option>
              <option value="5000-25000">
                $5,000 > $25,000
              </option>
              <option value="25000-100000">
                $25,000 > $100,000
              </option>
              <option value="+100000">
                + $100,000
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
              CONTACT US
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
      </div>
    </div>
  </div>
</template>

<script setup>
import FileInput from '~/components/Common/Inputs/FileInput';

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
</script>
