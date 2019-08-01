<template>
  <modal class="reviewModal" name="DeleteModal" height="auto">
    <div class="reviewFormDiv">
      <h1>Are you sure?</h1>
      <button v-on:click="deleteProfile()" class="blueButton">Yes</button>
      <button v-on:click="close()" class="blueButton">No/Close</button>
    </div>
  </modal>
</template>
<script>
import axios from "axios";
export default {
  name: "DeleteProfile",

  methods: {
    close() {
      this.$modal.hide("DeleteModal");
    },
    deleteProfile(){
      axios.delete(`https://streamer-reviewerapi.herokuapp.com/users/${this.$store.state.user.user_id}`)
      .then((res)=>{
        this.$store.state.user={}
        this.$router.push('/')

      })
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
.description{
  width:20vw;
  height:20vh;
}
.break {
  margin: 20px;
}
.reviewFormDiv {
  text-align: center;
}
.input {
  height: 30px;
  width: 200px;
}
</style>
