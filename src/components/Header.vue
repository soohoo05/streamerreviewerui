<template>
  <div class="header">
    <router-link class="homeLink" to="/">Streamer Reviewer</router-link>
    <div class="signLinks" v-if="user.username === undefined">
      <router-link class="sign" to="/signin">Sign In</router-link>
      <router-link class="sign" to="/signup">Sign Up</router-link>
    </div>
    <div class="signLinks" v-else>
      <router-link class="sign" to="/profile">Profile</router-link>
      <router-link class="sign" to="/" v-on:click.native="handleClick()">Logout</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    handleClick() {
      localStorage.clear();
      this.$store.state.user = {};
    }
  },
  computed: {
    user: function() {
      return this.$store.state.user;
    }
  }
};
</script>

<style>
.header {
  background-color: #5cafcf;
  height: 50px;
  line-height: 50px;
  border-style: solid;
}
.homeLink {
  text-decoration: none;
  position: absolute;
  left: 2%;
  color: blue;
}
.homeLink:hover {
  color: black;
}
.signLinks {
  position: absolute;
  right: 2%;
  display: inline-flex;
}
.sign {
  margin-left: 20px;
  text-decoration: none;
  color: blue;
}
.sign:hover {
  color: black;
}
</style>
