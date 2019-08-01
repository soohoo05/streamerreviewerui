<template>
  <modal class="streamerModal" name="streamerModal" height="auto">
    <div class="streamerFormDiv">
      <h1>Add a Streamer</h1>
      <form class="StreamerForm" @submit.prevent="StreamerAdd">
        <label>Username</label>
        <input
          type="text"
          v-model="username"
          class="input"
          name="username"
          placeholder="username"
        />
        <br class="break" />
        <label>URL</label>

        <input
          type="text"
          v-model="url"
          class="input"
          name="url"
          placeholder="url"
        />
        <br class="break" />
        <label>Category</label>

        <input
          type="text"
          v-model="category"
          class="input"
          name="category"
          placeholder="category"
        />
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
  name: "StreamerAdd",
  data() {
    return {
      username: "",
      url: "",
      category: ""
    };
  },

  methods: {
    close() {
      this.$modal.hide("streamerModal");
    },
    StreamerAdd(e) {
      e.preventDefault();
      const newStreamer = {
        username: this.username,
        url: this.url,
        category: this.category
      };
      axios
        .post("https://streamer-reviewerapi.herokuapp.com/streamers", {
          streamer: newStreamer
        })
        .then(json => {
          this.$store.state.streamers.push(json.data);
          var username = json.data.username.split(" ").join("-");
          this.$router.push(`/streamers/${username}`);
        });
    }
  }
};
</script>
<style>
.break {
  margin: 20px;
}
.streamerFormDiv {
  text-align: center;
}
.input {
  height: 30px;
  width: 200px;
}
</style>
