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
      let dto = JSON.stringify({
        "username": username,
        "password": password
      });
      fetch("http://localhost:5044/api/login", {
        method: 'post',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: dto
      }).then(response => {
        console.log(response.json());
        this.$store.commit('login', username, response);
        console.log(this.$store.state.response);
      });
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