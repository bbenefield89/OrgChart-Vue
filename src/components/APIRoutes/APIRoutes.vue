<template>
  <div>
    <APIRoutesContainer
      v-for="link of links"
      :key="link.url"
      :link="link"
    />
  </div>
</template>

<script>
  import APIRoutesContainer from './components/APIRoutesContainer/APIRoutesContainer'

  export default {
    name: 'APIRoutes',
    components: { APIRoutesContainer },
    data() {
      return {
        links: [
          {
            url: '/jobtitles',
            innerText: 'Job Titles'
          },
          {
            url: '/departments',
            innerText: 'Departments'
          },
          {
            url: '/employees',
            innerText: 'Employees'
          }
        ]
      }
    }
  }
</script>

<style>

</style>
