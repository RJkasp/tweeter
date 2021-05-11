<template>
  <div>
    <h3>Login</h3>
    <p>
      If you Dont have an account<router-link to="../signup">SignUp</router-link>
    </p>
    <form @submit="login">
      <input
        id="loginEmailInput"
        type="email"
        placeholder="example@domain.com"
      />
      <input id="loginPasswordInput" type="password" placeholder="password" />
      <input type="submit" value="login" />
      <p id="resultText"></p>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "login-component",
  methods: {
    login: function (event) {
      event.preventDefault();
      let data = {
        email: document.getElementById("loginEmailInput").value,
        password: document.getElementById("loginPasswordInput").value,
      };
      axios
        .request({
          url: "https://tweeterest.ml/api/login",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "FQm37KYwvV3yKH1Z9totE4fHWkXYQ1j5ILIz9oFWSYZgb",
          },
          data: JSON.stringify(data),
        })
        .then((res) => {
          document.getElementById("resultText").innerText =
            "Logging you in!";
          cookies.set("loginToken", res.data.loginToken);
          cookies.set("userId", res.data.userId);
          setTimeout(function () {
            location.href = "#/profile";
          }, 3000);
        })
        .catch((err) => {
          console.log(err);
          document.getElementById("resultText").innerText =
            "Something went wrong!";
        });
    },
  },
};
</script>

<style scoped>
form {
  width: 50%;
  background: white;
  display: block;
  margin: 15px auto;
}
form input {
  padding: 6px;
  display: block;
  width: 100%;
  margin-bottom: 10px;
}
input[type="submit"] {
  background: black;
  color: white;
  width: fit-content;
  margin: auto;
}
</style>