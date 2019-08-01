<template>
  <div class="profile">
    <div class="information">
      <h1>{{user.username}}</h1>
        <h2>{{user.name}}</h2>
        <h2>{{user.email}}</h2>
        <button class="blueButton" v-on:click="openEdit()">Edit Profile</button>
        <button class="blueButton" v-on:click="openDelete()">Delete Profile</button>
    </div>
    <div class="reviews">
        <div class="review" v-bind:key="review.id" v-for="review in this.$store.state.user.reviews">
          <h1>{{review.description}}</h1>
          <p>{{review.rating}}</p>
        </div>
    </div>
    <DeleteProfile/>
    <EditProfile/>
  </div>
</template>

<script>
import DeleteProfile from '../components/DeleteProfile'
import EditProfile from '../components/EditProfile'
export default{
  name: 'Profile',
  components:{
    DeleteProfile,
    EditProfile
  },
  computed: {
    user: function() {
      return this.$store.state.user;
    }
  },
  methods:{
    openDelete(){
      this.$modal.show('DeleteModal')
    },
    openEdit(){
      this.$modal.show('EditModal')
    }
  }
}
</script>

<style>
  .profile{
    height: 100vh;
    width:100vw;
  }
  .information, .reviews{
    padding: 20px;
    text-align: center;
    margin: 0 auto;
    border-radius: 20px;
    border-style: solid;
    border-color: #5cafcf;
    margin-top: 100px;
    background: white;
    width:20vw;
    -webkit-box-shadow: 0px 0px 28px 20px rgba(255,255,255,1);
    -moz-box-shadow: 0px 0px 28px 20px rgba(255,255,255,1);
    box-shadow: 0px 0px 28px 20px rgba(255,255,255,1);
  }
  .reviews{
    border-style: solid;
    border-color: black;
    width:50vw;
    height:50vh;
    overflow-y: scroll;
  }
  .review{
    border-style: solid;
  }
</style>
