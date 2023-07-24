import { defineNuxtPlugin } from 'nuxt/app';

import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowRight,
  faPaperclip,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

library.add(faLinkedinIn, faInstagram, faArrowRight, faPaperclip, faXmark);

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('fa-icon', FontAwesomeIcon, {});
});
