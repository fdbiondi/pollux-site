<template>
  <Wrapper
    class="py-8 shadow-inner shadow-black-light/20 dark:shadow-gray-800/20 lg:py-16 xl:py-32"
  >
    <div class="container mx-auto px-4 font-serif sm:px-6">
      <div class="flex flex-wrap">
        <div class="mb-16 w-full 2xl:mb-0 2xl:w-1/2">
          <TalkWithUs />
        </div>

        <div class="w-full 2xl:w-1/2">
          <ContactForm />
        </div>
      </div>
    </div>
  </Wrapper>
</template>

<script setup>
import Wrapper from '~/components/Layout/Wrapper.vue';
import ContactForm from './Form.vue';
import TalkWithUs from './TalkWithUs.vue';
</script>
