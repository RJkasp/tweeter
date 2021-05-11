<template>
  <div>
    <h1>Follow</h1>
    <!-- loops -->
    <section v-for="user in users" v-bind:key="user.id" id="otherPeoples">
      <article v-for="item in user" v-bind:key="item.id">
        <!--  -->
        <h3>{{ item.username }}</h3>
        <p>{{ item.content }}</p>
        <p>{{item.createdAt}}</p>

        <div class="actionButton">
          <a v-bind:href="'#/friends?userid=' + item.userId">Visit</a>
          <button @click="follow(item.userId)">Follow</button>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "discover-component",
  data() {
    return {
      users: [],
    };
  },
  created() {
    let vm = this;
    axios
      .request({
        url: "https://tweeterest.ml/api/tweets",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "FQm37KYwvV3yKH1Z9totE4fHWkXYQ1j5ILIz9oFWSYZgb",
        },
      })
      .then((res) => {
        let apiUsers = res.data;
        console.log(res);

        apiUsers = apiUsers.filter((value) => {
          return value.userId != cookies.get("userId");
        });
        vm.users.push(apiUsers);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  methods: {
    follow: function (userId) {
      axios
        .request({
          url: "https://tweeterest.ml/api/follows",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "FQm37KYwvV3yKH1Z9totE4fHWkXYQ1j5ILIz9oFWSYZgb",
          },
          data: {
            loginToken: cookies.get("loginToken"),
            followId: userId,
          },
        })
        .then(() => {
          alert("Success!");
        })
        .catch(() => {
          alert("already following");
        });
    },
  },
};
</script>

<style scoped>
section#otherPeoples {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  width: 80%;
  margin: 30px auto;
  padding-bottom: 70px;
}
article {
  background: #eee;
  padding: 10px;
  border-radius: 20px;
}
article h3 {
  color: black;
}
article div.actionButton {
  display: flex;
  width: fit-content;
  margin: auto;
}
article div.actionButton button {
  background: black;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 15px;
  margin-left: 10px;
  padding: 6px;
}
article div.actionButton a {
  background: transparent;
  border: 1px solid black;
  color: black;
  text-decoration: none;
  font-size: 15px;
  padding: 6px;
}
article div.actionButton a:hover {
  background: black;
  color: white;
}
h1 {
  text-align: center;
  margin-top: 15px;
}
@media screen and (max-width: 900px) {
  section#otherPeoples {
    grid-template-columns: repeat(3, 1fr);
    width: 95%;
  }
}
@media screen and (max-width: 500px) {
  section#otherPeoples {
    grid-template-columns: repeat(2, 1fr);
  }
  h1 {
    font-size: 27px;
  }
  article h3 {
    font-size: 20px;
  }
  article p {
    font-size: 17px;
  }
  div.actionButton button,
  div.actionButton a {
    font-size: 16px;
    padding: 4px;
  }
}
@media screen and (max-width: 350px){
  section#otherPeoples{
    grid-template-columns: repeat(1, 1fr);

  }
}
</style>