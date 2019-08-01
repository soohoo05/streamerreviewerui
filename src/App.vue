<template>
  <div id="app">
    <Header user="this.user" />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import axios from "axios";
export default {
  name: "app",
  components: {
    Header
  },
  mounted() {
    let token = localStorage.getItem("token");
    if (token) {
      axios
        .get("https://streamer-reviewerapi.herokuapp.com/current_user", {
          headers: {
            "Content-Type": "application/json",
            Accepts: "application/json",
            Authorization: token
          }
        })
        .then(resp => {
          resp.data.user.reviews=resp.data.reviews
          this.$store.state.user = resp.data.user;
        });
    } else {
      this.$router.push("/signup");
    }
  }
};
</script>
<style>
#app {
  height: 100vh;
  background-image: url("assets/screen.jpg");
  background-repeat: no-repeat;
  background-size: 100% auto;
}
.myButton {
  -moz-box-shadow: 3px 3px 4px -1px #ffffff;
  -webkit-box-shadow: 3px 3px 4px -1px #ffffff;
  box-shadow: 3px 3px 4px -1px #ffffff;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0.05, #ffffff),
    color-stop(1, #f6f6f6)
  );
  background: -moz-linear-gradient(top, #ffffff 5%, #f6f6f6 100%);
  background: -webkit-linear-gradient(top, #ffffff 5%, #f6f6f6 100%);
  background: -o-linear-gradient(top, #ffffff 5%, #f6f6f6 100%);
  background: -ms-linear-gradient(top, #ffffff 5%, #f6f6f6 100%);
  background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#f6f6f6',GradientType=0);
  background-color: #ffffff;
  -moz-border-radius: 6px;
  -webkit-border-radius: 6px;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: #666666;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;
}
.myButton:hover {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0.05, #f6f6f6),
    color-stop(1, #ffffff)
  );
  background: -moz-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
  background: -webkit-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
  background: -o-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
  background: -ms-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
  background: linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f6f6f6', endColorstr='#ffffff',GradientType=0);
  background-color: #f6f6f6;
}
.myButton:active {
  position: relative;
  top: 1px;
}
.blueButton {
  -moz-box-shadow: 3px 3px 4px -1px #29bbff;
  -webkit-box-shadow: 3px 3px 4px -1px #29bbff;
  box-shadow: 3px 3px 4px -1px #29bbff;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0.05, #2dabf9),
    color-stop(1, #0688fa)
  );
  background: -moz-linear-gradient(top, #2dabf9 5%, #0688fa 100%);
  background: -webkit-linear-gradient(top, #2dabf9 5%, #0688fa 100%);
  background: -o-linear-gradient(top, #2dabf9 5%, #0688fa 100%);
  background: -ms-linear-gradient(top, #2dabf9 5%, #0688fa 100%);
  background: linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#2dabf9', endColorstr='#0688fa',GradientType=0);
  background-color: #2dabf9;
  -moz-border-radius: 6px;
  -webkit-border-radius: 6px;
  border-radius: 6px;
  border: 1px solid #0b0e07;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #263666;
}
.blueButton:hover {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0.05, #0688fa),
    color-stop(1, #2dabf9)
  );
  background: -moz-linear-gradient(top, #0688fa 5%, #2dabf9 100%);
  background: -webkit-linear-gradient(top, #0688fa 5%, #2dabf9 100%);
  background: -o-linear-gradient(top, #0688fa 5%, #2dabf9 100%);
  background: -ms-linear-gradient(top, #0688fa 5%, #2dabf9 100%);
  background: linear-gradient(to bottom, #0688fa 5%, #2dabf9 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0688fa', endColorstr='#2dabf9',GradientType=0);
  background-color: #0688fa;
}
.blueButton:active {
  position: relative;
  top: 1px;
}
</style>
