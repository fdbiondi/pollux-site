<template>
  <div class="card">
    <div class="card__intro-label">
      <p class="intro-label__label">
        <slot name="label" />
      </p>
    </div>

    <div class="card__content">
      <h2 class="card__heading text-5xl font-extrabold mt-6 mb-4">
        <slot name="heading" />
      </h2>
    </div>
  </div>
</template>

<style scoped>
.intro-label {
  &__label {
    ::after {
      content: '';
      height: 1px;
      margin-top: 1.5rem;
      background-color: #eee;
      display: block;
      width: 5rem;
    }
  }
}
</style>
