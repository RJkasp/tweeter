<template>
  <div>
    <section id="myProfile">
      <h1>My Profile</h1>
      <ul>
        <li>{{ myData.username }}</li>
        <li>{{ myData.email }}</li>
        <li>{{ myData.birthdate }}</li>
        <li>{{ myData.bio }}</li>
        <li>
          <input
            type="password"
            placeholder="enter your password"
            id="password"
          />
          <button @click="deleteProfile">DeleteProfile</button>
        </li>
        <li><button><router-link to="../editmyprofile">Edit Profile</router-link></button></li>
      </ul>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "profile-component",
  data() {
    return {
      myData: {},
    };
  },
  created() {
    let vm = this;
    axios
      .request({
        url: "https://tweeterest.ml/api/users",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "FQm37KYwvV3yKH1Z9totE4fHWkXYQ1j5ILIz9oFWSYZgb",
        },
       params: {
          userId: cookies.get("userId"),
        },
      })
      .then((res) => {
        vm.myData = res.data[0];
      })
      .catch(() => {});
  },
  methods: {
    deleteProfile: function () {
      let myPassword = document.getElementById("password").value;
      if (myPassword.length<1) {
        alert("Please enter your password before deleting your account");
      } else {
        axios
          .request({
            url: "https://tweeterest.ml/api/users",
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "X-Api-Key": "FQm37KYwvV3yKH1Z9totE4fHWkXYQ1j5ILIz9oFWSYZgb",
            },
            data: {
              loginToken: cookies.get("loginToken"),
              password: myPassword,
            },
          })
          .then(() => {cookies.remove("loginToken")
          cookies.remove("userId")
          location.href="#/"})
          .catch((err) => {console.log(err)});
      }
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  text-align: left;
}
ul li {
  padding: 6px 0;
  
}
input{
  padding: 5px;
  background: #eee;
  border: 1px solid #eee;
  
  }
  button{
    padding: 5px;
    background: rgb(253, 88, 88);
    color: white;
    border: 1px solid rgb(253, 88, 88);
  }
  @media screen and (max-width: 300px){
    ul {
      width:100%;
      padding: 10px;
    }
    ul li{
      font-size: 18px;
    }
  h1{
    font-size: 24px;
  }
 

    #myProfile{
      width: 100%;
      padding: 0;
    }
  }
</style>