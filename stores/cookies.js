import { ref } from 'vue';
import { acceptHMRUpdate, defineStore } from 'pinia';
import { getStore, setStore } from '~/support/storage';

const STORE_NAME = 'cookies';

export const useCookies = defineStore(STORE_NAME, () => {
  const accepted = ref(false);

  function accept() {
    setStore(`${STORE_NAME}.accepted`, true);

    accepted.value = true;
  }

  function reject() {
    setStore(`${STORE_NAME}.rejected`, true);

    accepted.value = true;
  }

  if (process.client) {
    accepted.value = Boolean(getStore(`${STORE_NAME}.accepted`));
  }

  return { accept, reject, accepted };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCookies, import.meta.hot));
}
