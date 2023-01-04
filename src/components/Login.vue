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
    submitCredentials(username, password ) {
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
        return response.json();
      }).then( data => {
        console.log(data);
        this.$store.commit('saveUsername', username);
        this.$store.commit('saveToken', data);
        console.log(this.$store.state.username);
        console.log(this.$store.state.token);
        this.$router.replace({ path: '/' });
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