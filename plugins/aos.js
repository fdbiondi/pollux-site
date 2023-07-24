import AOS from 'aos';
import { defineNuxtPlugin } from 'nuxt/app';

import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== 'undefined') {
    nuxtApp.AOS = AOS.init();
  }
});
