<template>
  <div>
    <h3>SignUp</h3>
    <form @submit="signUp">
      <input
        id="emailInput"
        type="email"
        placeholder="example@domain.com"
        name="email"
      />
      <input
        id="usernameInput"
        type="text"
        placeholder="username"
        name="username"
      />
      <input
        id="passwordInput"
        type="password"
        placeholder="password"
        name="password"
      />
      <input id="bioInput" type="text" placeholder="bio" name="bio" />
      <input id="birthdateInput" type="date" name="birthdate" />
      <input type="submit" value="signup" />
    </form>
    <p id="resultText"></p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "sign-up-component",
  methods: {
    signUp: function (event) {
      event.preventDefault()
      let data= {
            email: document.getElementById("emailInput").value,
            username: document.getElementById("usernameInput").value,
            password: document.getElementById("passwordInput").value,
            bio: document.getElementById("bioInput").value,
            birthdate: document.getElementById("birthdateInput").value,
          }
      axios
        .request({
          url: "https://tweeterest.ml/api/users",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "FQm37KYwvV3yKH1Z9totE4fHWkXYQ1j5ILIz9oFWSYZgb",
          },
          data: JSON.stringify(data) 
        })
        .then(() => {
          
          document.getElementById('resultText').innerText = 'succesful operation!'
          setTimeout(function(){ location.href= "#/login"},3000)
        })
        .catch((err) => {
         console.log(err)
          document.getElementById('resultText').innerText = 'Something went wrong!'
        });
    },
  },
};
</script>

<style scoped>
form {
  width: 300px;
  /* auto divides the freespace between margin left and margin right which centers the element */
  margin: auto;
}
div{
  margin-top: 50px ;
  
}

input {
  padding: 6px;
  margin-bottom: 10px;
  display: block;
  width: 100%;
}
input[type="submit"] {
  background: black;
  color: white;
  border: none;
  cursor: pointer;
  width: fit-content;
  margin: auto;
}

@media screen and (max-width:400px) {
    form{
      width: 100%;
      padding: 0;

    }
    input{
      padding: 5px;
      width: 90%;
      margin: 10px auto;
    }
    h3{
      font-size: 23px;
    }
}
</style>