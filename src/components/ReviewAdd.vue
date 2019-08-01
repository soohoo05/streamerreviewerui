<template>
  <modal class="reviewModal" name="ReviewModal" height="auto">
    <div class="reviewFormDiv">
      <h1>Add a Review</h1>
      <form class="reviewForm" @submit.prevent="reviewAdd">
          <label>Description</label>
          <input v-model="description" type="text" name="description" placeholder="description" class="description">
        <br class="break" />
        <label>Rating</label>

          <select name="rating" v-model="rating">
            <option value="*">*</option>
            <option value="**">**</option>
            <option value="***">***</option>
            <option value="****">****</option>
            <option value="*****">*****</option>
          </select>
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
  name: "reviewAdd",
  data() {
    return {
      description:"",
      rating:""
    };
  },
  methods: {
    close() {
      this.$modal.hide("ReviewModal");
    },
    reviewAdd(e) {
      e.preventDefault();
      const newreview = {
        description:this.description,
        rating:this.rating
      };
      axios
        .post("https://streamer-reviewerapi.herokuapp.com/reviews", {
          review: newreview,
          streamer_id:this.$store.state.streamer.id,
          user_id:this.$store.state.user.user_id
        })
        .then(json => {
          this.$store.state.streamer.reviews.push(json.data);
          this.$modal.hide('ReviewModal')
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
.reviewFormDiv {
  text-align: center;
}
.input {
  height: 30px;
  width: 200px;
}
</style>
