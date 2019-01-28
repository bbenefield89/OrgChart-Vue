<template>
  <div>
    <router-link :to="link.url">
      {{ link.innerText }}
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'APIRoutesContainer',
    props: {
      link: Object
    }
  }
</script>

<style>

</style>
