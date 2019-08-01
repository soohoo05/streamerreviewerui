<template>
  <div class="home">
    <div class="addStream">
      <button class="myButton" v-on:click="openModal()">Add a Streamer</button>
      <StreamerCardContainer />
      <StreamerAdd />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import StreamerCardContainer from "../containers/StreamerCardContainer";
import StreamerAdd from "../components/StreamerAdd.vue";
export default {
  name: "home",
  components: {
    StreamerCardContainer,
    StreamerAdd
  },
  methods: {
    openModal() {
      if(!this.$store.state.user.username){
        alert("You need to sign in or sign up!")
      }
      else{
        this.$modal.show("streamerModal");
      }
    }
  }
};
</script>

<style>
.addStream {
  background-color: black;
  width: 100vw;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.router {
  color: red;
  text-decoration: none;
}
.router:hover {
  color: white;
}
</style>
