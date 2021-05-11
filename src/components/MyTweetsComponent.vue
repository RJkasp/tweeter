<template>
  <div>
    <h1>tweets</h1>
    <section id="createTweets">
      <article v-for="tweet in tweets" :key="tweet.id">
          <h4>{{ tweet.username }}</h4>
          <p>{{ tweet.content }}</p>
          <p>{{ tweet.createdAt }}</p>
             <a v-bind:href="'#/editmytweets?tweetid='+tweet.tweetId">Edit</a>
             <a @click="deleteTweet(tweet.tweetId)">Delete</a>
        </article>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "my-tweets-component",
  data() {
    return {
      tweets: [],
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
        params:{
            userId: cookies.get('userId')
        }
      })
      .then((res) => {
        this.tweets = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods:{
    deleteTweet:function(tweetId){
        axios.request({
          url: "https://tweeterest.ml/api/tweets",
          method: "DELETE",
          data:{
            loginToken: cookies.get('loginToken'),
            tweetId: tweetId
          },
          headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "FQm37KYwvV3yKH1Z9totE4fHWkXYQ1j5ILIz9oFWSYZgb",
        },
        }).then(()=>{
          alert('Success')
          location.reload()
        }).catch(()=>{
          alert('Something went wrong!')
        })
    }
  }
 
};
</script>

<style scoped>
a{
  display: inline-block;
  padding: 5px;
  background:black;
  color: white;
  border: none;
  text-decoration: none;
  margin-right: 5px;
}
a:nth-of-type(1){
    background: transparent;
    border: 1px solid black;
    color:black;

}
article{
  margin-bottom: 15px;
  border-bottom: 1px solid #eee;
}
</style>