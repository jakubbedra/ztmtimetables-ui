<template>
  <h2><button v-if="this.$store.state.token !== ''" v-on:click="doLogout()">Logout</button></h2>
</template>

<script>
export default {
  methods: {
    doLogout(){
      this.$store.commit('logout');
    }
  }
}
</script>

<style>
button {
  float: right;
  display: inline-block;
}
</style>