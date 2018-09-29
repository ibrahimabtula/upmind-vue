<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="columns">
      <div class="column is-8 is-offset-2">
        <Clients/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Clients from '@/components/Clients.vue'

export default {
  name: 'home',
  components: {
    Clients
  }
}
</script>
