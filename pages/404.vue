<template>
  <div class="flex min-h-screen flex-col items-center justify-evenly">
    <div
      class="container -mx-8 flex items-center justify-center text-black-light drop-shadow-lg filter dark:text-white"
    >
      <div class="mx-auto px-2 text-center font-mono">
        <h3 class="my-8 text-5xl font-bold">Woops! Something's wrong.</h3>
        <h3 class="mb-8 text-2xl">
          <span>It's just a 404 error! Page not found.</span>

          <nuxt-link
            to="/"
            class="mt-1 block cursor-pointer text-sm hover:underline"
          >
            Back to home
          </nuxt-link>
        </h3>
      </div>

      <div class="flex items-center gap-8 font-mono font-black">
        <span class="text-[200px]">&lt;</span>

        <div class="flex flex-col text-2xl text-gray-800 dark:text-gray-100">
          <span class="-mb-[5px]">░░██╗██╗░█████╗░░░██╗██╗</span>
          <span class="-mb-[5px]">░██╔╝██║██╔══██╗░██╔╝██║</span>
          <span class="-mb-[5px]">██╔╝░██║██║░░██║██╔╝░██║</span>
          <span class="-mb-[5px]">███████║██║░░██║███████║</span>
          <span class="-mb-[5px]">╚════██║╚█████╔╝╚════██║</span>
          <span class="-mb-[5px]">░░░░░╚═╝░╚════╝░░░░░░╚═╝</span>
        </div>

        <span class="text-[200px]">/&gt;</span>
      </div>
    </div>

    <div class="text-center font-mono uppercase">
      <div class="flex gap-1">
        <nuxt-link to="#" class="hover:underline">
          {{ PRIVACY_POLICY }}
        </nuxt-link>
        <span>•</span>
        <span>{{ CITY }}</span>
        <span>•</span>
        <span>{{ STATE }}</span>
      </div>
      <span>{{ COPYRIGHT_SHORT }} {{ POLLUX_COOP }}</span>
    </div>
  </div>
</template>

<script>
import {
  COPYRIGHT_SHORT,
  PRIVACY_POLICY,
  POLLUX_COOP,
  CITY,
  STATE,
} from '~/support/constants/info'

export default {
  layout: 'simple',

  data() {
    return {
      COPYRIGHT_SHORT,
      PRIVACY_POLICY,
      POLLUX_COOP,
      CITY,
      STATE,
    }
  },
}
</script>
