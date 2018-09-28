<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="columns">
      <div class="column is-8 is-offset-2">
        <MainTable/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainTable from '@/components/MainTable.vue'

export default {
  name: 'home',
  components: {
    MainTable
  }
}
</script>
