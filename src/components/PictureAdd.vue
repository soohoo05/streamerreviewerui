<template>
  <modal class="pictureModal" name="PictureModal" height="auto">
    <div class="pictureFormDiv">
      <h1>Add a Picture</h1>
      <form class="PictureForm" >
            <input type="file" @change="onFileChanged">
        <br class="break" />

        <input class="myButton" type="submit" value="submit" @click="onUpload"/>
      </form>
      <button v-on:click="close()" class="blueButton">Close</button>
    </div>
  </modal>
</template>
<script>
import axios from "axios";
export default {
  name: "PictureAdd",
  data() {
    return {
      file:""
    };
  },
  methods: {
    onFileChanged (event) {
    this.file = event.target.files[0]
  },
  onUpload() {
    // upload file
    let formData = new FormData();
    formData.append('image',this.file)
    axios.post(`https://streamer-reviewerapi.herokuapp.com/newPhoto/${this.$store.state.streamer.id}`,formData,{
      headers: {
          'Content-Type': 'multipart/form-data',
        }
    })
    .then((res)=>{
      this.$store.state.streamer.picture=res.data.picture
      alert("picture added, refresh the page")
    })
  },
    close() {
      this.$modal.hide("PictureModal");
    },

  }
};
</script>
<style>
.break {
  margin: 20px;
}
.pictureFormDiv {
  text-align: center;
}
.input {
  height: 30px;
  width: 200px;
}
</style>
