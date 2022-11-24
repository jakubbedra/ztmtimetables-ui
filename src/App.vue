<template>
  <Header></Header>
  <router-view/>
</template>

<script setup>
import {RouterView, RouterLink} from 'vue-router'
import Header from "./components/Header.vue";
</script>