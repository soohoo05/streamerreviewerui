<template>
  <table class="table">
    <thead>
      <tr>
        <th>Username</th>
        <th>URL to stream</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="tr"
        v-bind:key="streamer.id"
        v-for="streamer in this.$store.state.streamers"
      >
        <td class="username">
          <router-link
            :to="`/streamers/${streamer.username.split(' ').join('-')}`"
            >{{ streamer.username }}</router-link
          >
        </td>
        <td>
          <a :href="streamer.url">{{ streamer.url }}</a>
        </td>
        <td>{{ streamer.category }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";

export default {
  name: "StreamerCardContainer",
  mounted() {
    this.retrieve();
  },
  methods: {
    retrieve() {
      axios
        .get("https://streamer-reviewerapi.herokuapp.com/streamers")
        .then(resp => {
          this.$store.state.streamers = resp.data;
        })
        .catch(error => alert(error));
    },

  }
};
</script>

<style>
.table {
  margin: 0 auto;
  margin-top: 100px;
  background-color: white;
  table-layout: fixed;
}

.table tbody {
  display: block;
  width: 100%;
  overflow: auto;
  height: 50vh;
}

.table thead tr {
  display: block;
}

.table thead {
  background: black;
  color: #fff;
}

.table th,
.table td {
  padding: 20px;
  text-align: left;
  width: 200px;
}
</style>
