<template>
  <div>
    <h1>Edit Tweets</h1>
    <section>
      <form>

        <textarea id="tweetContent" placeholder="tweetContent" v-model="tweets[0].content"></textarea>
   
        <input @click="editTweets" type="button" id="addTweet" value="edit" />
      </form>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "edit-my-tweets-component",
  data() {
    return {
      tweets: [],
      userId: cookies.get("userId"),
    };
  },
  created() {
      let url = location.href.split("tweetid=")
    axios
      .request({
        url: "https://tweeterest.ml/api/tweets",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "FQm37KYwvV3yKH1Z9totE4fHWkXYQ1j5ILIz9oFWSYZgb",
        },
        params:{ 
            tweetId: url[1],
            // userId: cookies.get("userId")

        }
      })
      .then((res) => {
        let tweet= res.data
        tweet=tweet.filter((v)=>v.userId==cookies.get('userId'))
        this.tweets = tweet;
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    editTweets: function () {
       let url = location.href.split("tweetid=")

      if (document.getElementById("tweetContent").value < 1) {
        alert("Please Insert Tweets");
      } else {
        axios
          .request({
            url: "https://tweeterest.ml/api/tweets",
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              "X-Api-Key": "FQm37KYwvV3yKH1Z9totE4fHWkXYQ1j5ILIz9oFWSYZgb",
            },
            data: {
              tweetId: url[1],
              loginToken: cookies.get("loginToken"),
              content: document.getElementById("tweetContent").value,
            },
          })
          .then(() => {
            alert("Success!!");
            location.reload();
          })
          .catch(() => {
            alert("Try again!");
          });
      }
    },
  },
};
</script>

<style scoped>
form {
  width: 80%;
  margin: 15px auto;
}
h3 {
  margin-top: 15px;
}
form textarea {
  width: 80%;
  resize: vertical;
  height: 200px;
  max-height: 600px;
  background: #eee;
  border: none;
  box-shadow: 3px 3px 3px #eee;
  padding: 6px;
  box-sizing: border-box;
}
input {
  background: black;
  color: white;
  border: none;
  padding: 6px;
  display: block;
  width: fit-content;
  margin: 15px auto;
}
</style>