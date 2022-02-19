<template>
  <div class="text-black-light dark:text-white">
    <div class="flex h-screen w-full items-center justify-center">
      <div class="flex w-1/2 flex-col flex-wrap justify-center">
        <Logo class="mx-auto my-4" size="small" />
        <Logo class="mx-auto my-4" size="medium" />
        <Logo class="mx-auto my-4" size="large" />
      </div>

      <div class="flex w-1/2 justify-center">
        <h4 class="route--underline font-pollux">Pollux fonts samples</h4>
      </div>
    </div>

    <div class="container mx-auto flex flex-wrap items-center py-12">
      <div class="w-full">
        <div class="text-right font-mono" data-aos="zoom-in-up">
          <h2>Pollux</h2>

          <p>
            Scale fast your business with expert software engineering teams.
          </p>
        </div>

        <div class="text-right font-serif" data-aos="zoom-in-up">
          <h2>Pollux</h2>

          <p>
            Scale fast your business with expert software engineering teams.
          </p>
        </div>

        <div class="text-right font-pollux" data-aos="zoom-in-up">
          <h2>Pollux</h2>

          <p>
            Scale fast your business with expert software engineering teams.
          </p>
        </div>
      </div>

      <div class="flex w-full flex-row flex-wrap justify-end">
        <div class="p-6 text-white">
          <a target="_blank" href="https://icons8.com/icon/HKUjzhHqqOJK/client">
            Client
          </a>
          icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Common/Logo'

export default {
  components: {
    Logo,
  },
}
</script>

<style lang="scss" scoped>
h2 {
  font-size: 132px;
}

h4 {
  font-size: 50px;
  margin-bottom: 1.5rem;
}

p {
  font-size: 28px;
  margin-bottom: 1rem;
}
</style>
