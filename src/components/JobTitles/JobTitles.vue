<template>
  <div>
    <h1>Job Titles</h1>

    <h1 v-if="isFetchingJobTitles">
      Fetching List of Active Job titles...
    </h1>

    <ul v-else>
      <li v-for="jobTitle of jobTitles" :key="jobTitle.id">
        <p>ID: {{ jobTitle.id }}</p>
        <p>Name: {{ jobTitle.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'JobTitles',
    data() {
      return {
        isFetchingJobTitles: true,
        jobTitles: []
      }
    },
    created() {
      const showLoadingText = this.showLoadingTextIfFetchTakesTooLong()
      
      fetch('http://localhost:8080/api/orgchart/titles')
        .then(data => data.json())
        .then(data => {
          this.jobTitles = data
          this.isFetchingJobTitles = false
          clearInterval(showLoadingText)
        })
    },
    methods: {
      showLoadingTextIfFetchTakesTooLong() {
        return setTimeout(() => {
          if (this.isFetchingJobTitles === true) {
            this.showLoadingText = true
          }
        }, 1000)
      }
    }
  }
</script>

<style>

</style>
