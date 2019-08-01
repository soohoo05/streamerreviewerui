<template>
  <div class="signin">
    <h1>Sign In</h1>
    <form class="signinform" @submit.prevent="signIn">
      <label>Username</label>

      <input
        type="text"
        v-model="username"
        class="input"
        name="username"
        placeholder="username"
      />
      <br class="break" />
      <label>Password</label>

      <input
        type="password"
        v-model="password"
        class="input"
        name="password"
        placeholder="password"
      />
      <br class="break" />
      <input class="myButton" type="submit" value="submit" />
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "home",
  mounted(){
    if(this.$store.state.user.username){
      this.$router.push('/')
    }
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    signIn(e) {
      e.preventDefault();
      const theUser = {
        username: this.username,
        password: this.password
      };
      axios
        .post(`https://streamer-reviewerapi.herokuapp.com/login`, {
          user: theUser
        })
        .then(json => {
          localStorage.setItem("token", json.data.jwt);
          this.$store.state.user = json.data.user;

          this.$router.push(`/users/${json.data.user.username}`);
        })
        .catch(error => alert(error));
    }
  }
};
</script>

<style>
.input {
  height: 30px;
}
.break {
  margin: 20px;
}
.signin {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);
  padding: 40px;
  border-radius: 20px;
}
</style>
