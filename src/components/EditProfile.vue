<template>
  <modal class="editModal" name="EditModal" height="auto">
    <div class="editFormDiv">
      <h1>Edit Profile</h1>
      <form class="editForm" @submit.prevent="editProfile">
          <label>Name</label>
          <input v-model="name" type="text" name="name" placeholder="name" class="name">
        <br class="break" />
        <label>Email</label>
        <input v-model="email" type="text" name="email" placeholder="email" class="email">


          <br class="break" />
        <input class="myButton" type="submit" value="submit" />
      </form>

      <button v-on:click="close()" class="blueButton">Close</button>
    </div>
  </modal>
</template>
<script>
import axios from "axios";
export default {
  name: "EditProfile",
  data() {
    return {
      email:"",
      name:""
    };
  },
  methods: {
    close() {
      this.$modal.hide("EditModal");
    },
    editProfile(e) {
      e.preventDefault();
      const newedit = {
        email:this.email,
        name:this.name
      };
      axios
        .put(`https://streamer-reviewerapi.herokuapp.com/users/${this.$store.state.user.user_id}`, {
          user: newedit,
        })
        .then(json => {
          this.$store.state.user=json.data
          this.$modal.hide('EditModal')
        });
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
.editFormDiv {
  text-align: center;
}
.input {
  height: 30px;
  width: 200px;
}
</style>
