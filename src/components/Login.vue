<template id="login_input_id">
  <h2>Login</h2>
  <input type="text" v-model="username"/>
  <input type="password" v-model="password"/>
  <input type="button" v-on:click="submitCredentials(username, password)" value="Login">
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    submitCredentials(username, password) {
      console.log(username);
      console.log(password);
    }
  }
}

</script>

<style>
input {
  margin: auto;
  display: block;
}
</style>