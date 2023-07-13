<template>
  <div>Privacy Policy</div>
</template>
<script>
export default {
  middleware({ redirect }) {
    redirect('/404')
  },
}
</script>
