<template>
  <div class="card">
    <div
      class="card__label after:mt-6 after:block after:h-px after:w-20 after:bg-white after:content-['']"
    >
      <p>
        <slot name="label" />
      </p>
    </div>

    <div class="card__content">
      <h2 class="mb-4 mt-6 text-5xl font-extrabold">
        <slot name="heading" />
      </h2>
    </div>
  </div>
</template>
