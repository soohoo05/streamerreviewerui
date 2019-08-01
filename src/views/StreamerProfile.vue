<template>
  <div class="streamerProfile">
    <div class="topDiv">
    <div class="information">
      <h1>Username:{{this.$store.state.streamer.username}}</h1>
      <p>Link:<a :href="this.$store.state.streamer.url"> {{ this.$store.state.streamer.url }}</a></p>
      <p>Category: {{this.$store.state.streamer.category}}</p>
      <div class="buttons">
        <button v-on:click="openReviewModal()" class="blueButton probutton">Add a Review</button>
        <button v-if="!this.$store.state.streamer.picture" v-on:click="openPictureModal()" class="blueButton probutton">Add a picture</button>
      </div>
    </div>
      <img v-bind:src="this.$store.state.streamer.picture.url" class="profilePic" v-if="this.$store.state.streamer.picture">
      <img v-else src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" class="profilePic">
  </div>
    <div class="reviews">
      <div class="review" v-bind:key="review.id"  v-for="review in this.$store.state.streamer.reviews">
        <p>Description:{{review.description}}</p>
        <p>Rating:{{review.rating}}</p>
      </div>
    </div>
    <ReviewAdd/>
    <PictureAdd/>
  </div>
</template>

<script>
import axios from 'axios'
import ReviewAdd from '../components/ReviewAdd.vue'
import PictureAdd from '../components/PictureAdd.vue'
export default{
  name: 'StreamerProfile',
  components:{
    ReviewAdd,
    PictureAdd
  },
  mounted(){
    var theUsername= this.$route.params.username
    theUsername=theUsername.split('-').join(' ')

    axios.get(`https://streamer-reviewerapi.herokuapp.com/streamers/${theUsername}`,{
    })
    .then((res)=>{
      res.data.streamer.reviews=res.data.reviews
      if(res.data.picture){
      res.data.streamer.picture=res.data.picture.picture
    }
      this.$store.state.streamer=res.data.streamer
    })
  },
  computed:{
    streamer:function(){
      return this.$store.state.streamer
    },
    picture: function(){
      return this.$store
    }
  },
  methods:{
    openReviewModal(){
      this.$modal.show("ReviewModal");
    },
    openPictureModal(){
      this.$modal.show("PictureModal");
    }
  }
}
</script>

<style>
.profilePic{
  border-style: solid;
  border-color: #5cafcf;
  border-radius: 20px;
  margin: 0 auto;
  margin-top: 100px;
  height:20vh;

}
.topDiv{
  display: inline-flex;
  margin: 0 auto;
  margin-bottom: 50px;
  width:100vw;
}
.streamerProfile{
  width: 100vw;
  height: 100vh;
}
.information, .reviews{
  padding:20px;
  text-align: center;
  border-radius: 20px;
  border-style: solid;
  border-color: #5cafcf;
  margin: 0 auto;
  margin-top: 100px;
  background: white;

  -webkit-box-shadow: 0px 0px 28px 20px rgba(255,255,255,1);
  -moz-box-shadow: 0px 0px 28px 20px rgba(255,255,255,1);
  box-shadow: 0px 0px 28px 20px rgba(255,255,255,1);
}
.reviews{
  margin: 0 auto;
  border-style: solid;
  border-color: black;
  width:50vw;
  height:50vh;
  overflow-y: scroll;
}
a{
  text-decoration: none;
}
.buttons{
  display: inline-flex;
}
.probutton{
  margin: 20px;
}
.review{
  border-style: solid;
}
</style>
