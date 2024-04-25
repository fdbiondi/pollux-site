<template>
  <div class="card">
    <div
      v-if="$slots.label"
      class="card__label after:mt-6 after:block after:h-px after:w-20 after:bg-white after:content-['']"
    >
      <p>
        <slot name="label" />
      </p>
    </div>

    <div class="card__content">
      <slot />
    </div>
  </div>
</template>
