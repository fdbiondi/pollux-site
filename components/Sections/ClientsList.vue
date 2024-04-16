<template>
  <div>
    <ImageList
      class="clients mb-6"
      :images="clients"
      :has-link="true"
    />

    <hr class="mx-16 border-t border-solid border-gray-800 dark:border-white" />
  </div>
</template>

<script setup>
import ImageList from '~/components/Common/ImageList';

import { getFromContext } from '~/support/files';

const glob = import.meta.glob('~/assets/images/clients/*.*', { eager: true });

const clients = getFromContext(glob, '.*', (src) => {
  return {
    src: glob[src].default,
  };
});
</script>

<style lang="scss" scoped>
.clients :deep(img) {
  @apply scale-110 brightness-200 drop-shadow-none;

  /* fix for classes -> grayscale drop-shadow-tight */
  filter: grayscale(1) invert(0.2) drop-shadow(0 2px 1px rgb(0 0 0 / 20%))
    drop-shadow(0 2px 2px rgb(0 0 0 / 50%));

  &:hover {
    /* filter: saturate(1.5) drop-shadow(0 2px 1px rgb(0 0 0 / 20%))
      drop-shadow(0 2px 2px rgb(0 0 0 / 50%)); */
    transform: scaleX(1.2) scaleY(1.2);
  }
}
</style>
