<template>
  <div
    class="container -mx-8 flex items-center justify-center text-black-light drop-shadow-lg filter dark:text-white"
  >
    <div class="mx-auto px-2 text-center font-mono">
      <h3 class="my-8 text-5xl font-bold">Woops! Something's wrong.</h3>
      <h3 class="mb-8 text-2xl">It's just a 404 error! Page not found.</h3>
    </div>

    <div class="flex items-center gap-8 font-mono font-black">
      <span class="text-[200px]">&lt;</span>

      <div class="flex flex-col text-2xl text-gray-800 dark:text-gray-100">
        <span class="-mb-[5px]">░░██╗██╗░█████╗░░░██╗██╗</span>
        <span class="-mb-[5px]">░██╔╝██║██╔══██╗░██╔╝██║</span>
        <span class="-mb-[5px]">██╔╝░██║██║░░██║██╔╝░██║</span>
        <span class="-mb-[5px]">███████║██║░░██║███████║</span>
        <span class="-mb-[5px]">╚════██║╚█████╔╝╚════██║</span>
        <span class="-mb-[5px]">░░░░░╚═╝░╚════╝░░░░░░╚═╝</span>
      </div>

      <span class="text-[200px]">/&gt;</span>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'simple',
}
</script>
