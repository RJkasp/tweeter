<template>
  <div>
    <header>
      <div id="phone-navbar">
        <img
          src="http://cdn.onlinewebfonts.com/svg/img_246283.png"
          alt="logo"
        />
        <p @click="openMenuBar">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
            alt="hamburger logo"
          />
        </p>
      </div>
      <!-- navigation bar -->
      <ul>
        <li id="closeWindow" @click="closeNavBar">
          <p>
            <img
              src="data:image/png;base64,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"
              alt="closing icon"
            />
          </p>
        </li>
        <li id="logo">
          <a href=""
            ><img
              src="http://cdn.onlinewebfonts.com/svg/img_246283.png"
              alt="black tweeter logo"
          /></a>
        </li>
        <li id="profile"><router-link to="../profile">Profile </router-link></li>
        <li id="discover"><router-link to="../discover">Discover</router-link></li>
        <li id="feed"><router-link to="../feed">Feed</router-link></li>
        <li id="myTweets"><router-link to="../mytweets">My Tweets</router-link></li>
        <li @click='logout'>logout</li>
      </ul>
    </header>
  </div>
</template>

<script>
import cookies from 'vue-cookies'
export default {
  name: "Header-component",
  methods: {
    openMenuBar: function () {
      document.querySelector("ul").classList.add("menuBarToggle");
    },
    closeNavBar: function () {
      document.querySelector("ul").classList.remove("menuBarToggle");
    },
    logout:function(event){
      event.preventDefault()
      cookies.remove('loginToken')
      location.href='#/'
    }
  },
  created(){
    if(!cookies.get('loginToken')){
      location.href= "#/"
    }
  }
};
</script>
<style scoped>
ul {
  list-style: none;
  display: flex;
  width: 90%;
  margin: auto;
}
ul li:nth-of-type(3) {
  margin-left: auto;
}
ul li {
  margin: 15px 30px;
}
#closeWindow {
  display: none;
}
ul li a {
  text-decoration: none;
  color: black;
}
img {
  width: 50px;
  height: 50px;
}
#login {
  background: black;
  padding: 6px;
  height: fit-content;
}
#login a {
  color: white;
}
#logo {
  margin-top: 0;
}
#phone-navbar {
  display: none;
}

@media screen and (max-width: 700px) {
  #phone-navbar {
    display: flex;
    justify-content: space-between;
    width: 95%;
    padding-top: 0;
  }
  #phone-navbar img {
    width: 60px;
    height: 60px;
  }
  #phone-navbar p img {
    width: 40px;
    height: 40px;
  }
  #phone-navbar ul li{
    margin-top: 0;
  }
  ul li:nth-of-type(3) {
    margin-left: 16px;
    
  }
  #closeWindow {
    display: block;
    float: right;
    margin-top: -10px;
  }
  #closeWindow img {
    width: 20px;
    height: 20px;
    float: right;
    display: block;
  }
  #closeWindow p {
    text-align: right;
  }
  ul li {
    margin: 30px 0;
  }
  ul {
    display: none;
    flex-direction: column;
    align-items: center;
    background: #eee;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    align-items: flex-start;
  }
  #logo img {
    display: none;
  }
  #login {
    background: transparent;
    padding: 0px;
    height: fit-content;
  }
  #login a {
    color: black;
  }
}

.menuBarToggle {
  display: block;
}

</style>