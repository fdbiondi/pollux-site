<template>
  <div
    class="flex min-h-screen flex-col items-center justify-evenly text-black-light dark:text-white"
  >
    <div
      class="container -mx-8 flex items-center justify-center custom-drop-shadow-lg"
    >
      <div class="mx-auto px-2 text-center font-mono">
        <h3 class="my-8 text-5xl font-bold">
          {{ title }}
        </h3>
        <h3 class="mb-8 text-xl">
          <span>
            {{ message }}
          </span>

          <nuxt-link
            to="/"
            class="mt-4 block cursor-pointer text-sm hover:underline"
          >
            Back to home
          </nuxt-link>
        </h3>
      </div>

      <div class="flex items-center gap-8 font-mono font-black">
        <span class="text-[200px]">&lt;</span>

        <div class="flex flex-col text-2xl text-gray-800 dark:text-gray-100">
          <span class="text-[200px]">
            {{ error.statusCode }}
          </span>
        </div>

        <span class="text-[200px]">/&gt;</span>
      </div>
    </div>

    <div
      v-if="showStackErrors"
      class="rounded-t-md flex-1 overflow-y-auto h-auto container mx-auto p-8 bg-gray-200/70 dark:bg-gray-800/70"
    >
      <div
        class="text-sm font-light leading-tight z-10 p-8 font-mono whitespace-nowrap"
      >
        <span
          v-for="(err, $errIndex) in stackErrors"
          :key="$errIndex"
          class="block"
        >
          at {{ err }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { shallowRef } from 'vue';

const title = shallowRef('');
const message = shallowRef('');

const error = useError();

switch (error.value.statusCode) {
  case 404:
    title.value = `Woops! Something's wrong.`;
    message.value = `It's just a 404 error! Page not found.`;
    break;
  case 500:
    title.value = 'Sorry, unexpected error';
    message.value =
      error.value.message ||
      'There seems to be a problem. Let me you find a way out.';
    break;
  default:
    title.value = 'Woops!';
    message.value = error.value.message;
    break;
}

const stackErrors = error.value.stack.split('    at ').slice(1, -1);
const showStackErrors = process.env.NODE_ENV !== 'production';
</script>
