<template>
  <div>
    <h3>New Tweet</h3>
      <form>
        <textarea id="tweetContent" placeholder="tweetContent"></textarea>
        <input @click="newTweets" type="button" id="addTweet" value="add" />
      </form>
    <h1>tweets</h1>
    <section id="createTweets">
      <article v-for="tweet in tweets" :key="tweet.id">
        <div>
          <h4>{{ tweet.username }}</h4>
          <p>{{ tweet.content }}</p>
          <p>{{ tweet.createdAt }}</p>
          <button>Like</button>
          <form id="tweetCommentContainer">
            <textarea id="commentOnTweets" placeholder="add comment"></textarea>
            <input type="button" value="add" id="addComment">
          </form>
        </div>
      </article>
    </section>  
    
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "tweets-component",
  data() {
    return {
      tweets: [],
      userId: cookies.get("userId"),
    };
  },
  created() {
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
        this.tweets = res.data;
      })
      .catch(() => {});
  },
  methods: {
    newTweets: function () {
      if (document.getElementById("tweetContent").value < 1) {
        alert("Please Insert Tweets");
      } else {
        axios
          .request({
            url: "https://tweeterest.ml/api/tweets",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-Api-Key": "FQm37KYwvV3yKH1Z9totE4fHWkXYQ1j5ILIz9oFWSYZgb",
            },
            data: {
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
form#tweetCommentContainer{
  width: 300px;
}
textarea#commentOnTweets{
  height: 100px;
  max-width: 200px;
  width: 200px;
  background: transparent;
  border: 1px solid #666;
  box-shadow: none;
  margin: 10px auto;
}
article{
  border: 1px solid black;
}
article div{
  width: 100%;
}
section{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
   grid-row-gap: 20px;
}
@media screen and (max-width:500px){
  section{
    grid-template-columns: repeat(1, 1fr);
  }
}

</style>