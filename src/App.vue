<template>
  <div class="header-div">
    <Header></Header>
    <Logout></Logout>
  </div>
  <router-view/>
</template>

<script setup>
import {RouterView, RouterLink} from 'vue-router'
import Header from "./components/Header.vue";
import Logout from "./components/Logout.vue";
</script>

<style>
  .header-div {
    float: top;
    display: inline-block;
  }
</style>