<template>
  <div class="signup">
    <h1>Sign Up</h1>
    <form class="signupform" @submit.prevent="signUp">
      <label>Email</label>

      <input
        type="text"
        v-model="email"
        class="input"
        name="email"
        placeholder="email"
      />
      <br class="break" />
      <label>Name</label>

      <input
        type="text"
        v-model="name"
        class="input"
        name="name"
        placeholder="name"
      />
      <br class="break" />
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
  components: {},
  data() {
    return {
      email: "",
      name: "",
      username: "",
      password: ""
    };
  },
  mounted(){
    if(this.$store.state.user.username){
      this.$router.push('/')
    }
  },
  methods: {
    signUp(e) {
      e.preventDefault();
      const newUser = {
        email: this.email,
        name: this.name,
        username: this.username,
        password: this.password
      };
      return axios
        .post(`https://streamer-reviewerapi.herokuapp.com/users`, {
          user: newUser
        })
        .then(json => {
          localStorage.setItem("token", json.data.jwt);
          this.$store.state.user = json.data.user;
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
.signup {
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
