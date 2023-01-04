<template>
  <nav>
      <ul class="navigation">
        <li>
          <router-link :to="{name: 'home'}">Home</router-link>
        </li>
        <li>
          <router-link :to="{name: 'about'}">About</router-link>
        </li>
        <li v-if="this.$store.state.token === ''">
          <router-link :to="{name: 'login'}">Login</router-link>
        </li>
        <li>
          <router-link :to="{name: 'bus-stops'}">Bus Stops</router-link>
        </li>
        <li  v-if="this.$store.state.token !== ''">
          <router-link :to="{name: 'my-stops'}">My Stops</router-link>
        </li>
      </ul>
  </nav>
</template>

<style>
  .navigation {
    display: inline;
  }
  .navigation li {
    display: inline;
    margin-left: 20px;
    margin-right: 20px;
  }
</style>