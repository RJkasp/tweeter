<template>
  <div class="mainContainer">
    <div class="likeUnlike like">
      <p>Liked</p>
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.CMb-tshEpejdzVj15IjKSwHaHa&pid=Api&P=0&w=300&h=300"
        alt="thumbs up black and white in color"
      />
    </div>
    <div class="likeUnlike unlike">
      <p>unlike</p>
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.eIka4UQoFkpMoTGKMmp0AAHaHa&pid=Api&P=0&w=300&h=300"
        alt="thumbs down black and white in color"
      />
    </div>

    <h3>New Tweet</h3>
    <form>
      <textarea id="tweetContent" placeholder="tweetContent"></textarea>
      <input @click="newTweets" type="button" id="addTweet" value="add" />
    </form>
    <h1>tweets</h1>
    <section id="createTweets">
      <article v-for="tweet in tweets" :key="tweet.id">
        <div @load="getComments(tweet.tweetId)">
          <h4>{{ tweet.username }}</h4>
          <p>{{ tweet.content }}</p>
          <p>{{ tweet.createdAt }}</p>
          <button @click="likes(tweet.tweetId)">Like</button>
          <button @click="unlike(tweet.tweetId)">Unlike</button>
          <form id="tweetCommentContainer">
            <textarea :data-tweetid="tweet.tweetId" id="commentOnTweets" placeholder="add comment"></textarea>
            <input 
           @click='addComment(tweet.tweetId)' type="button" value="add" id="addComment" />
          </form>
          <div class="tweetComments">
            <button @click="getComments(tweet.tweetId)">Comments</button>
              <article :data-tweetid="tweet.tweetId">
              </article>
          </div>
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
    //(not string a variable)
    likes: function (tweetId) {
      axios
        .request({
          // property and value is : (string)
          url: "https://tweeterest.ml/api/tweet-likes",
          method: "POST",
          //Property and value is object
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "FQm37KYwvV3yKH1Z9totE4fHWkXYQ1j5ILIz9oFWSYZgb",
          },
          data: {
            loginToken: cookies.get("loginToken"),
            tweetId: tweetId,
          },
        })
        .then(() => {
          let likeThumbsUp = document.querySelector('.likeUnlike .like');
          likeThumbsUp.style.display = "block";
          setTimeout(() => {
            likeThumbsUp.style.display = "none";
          }, 30000);
          location.reload();
        })
        .catch(() => {
          alert("Liked Already");
        });
    },
    //(not string a variable)
    unlike: function (tweetId) {
      axios
        .request({
          // property and value is : (string)
          url: "https://tweeterest.ml/api/tweet-likes",
          method: "DELETE",
          //Property and value is object
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "FQm37KYwvV3yKH1Z9totE4fHWkXYQ1j5ILIz9oFWSYZgb",
          },
          data: {
            loginToken: cookies.get("loginToken"),
            tweetId: tweetId,
          },
        })
        .then(() => {
          let likeThumbsDown = document.querySelector('.likeUnlike .unlike');
          likeThumbsDown.style.display = "block";
          setTimeout(() => {
            likeThumbsDown.style.display = "none";
          }, 6000);
          location.reload();
        })
        .catch(() => {
          alert('unliked');
        });
    },
    addComment:function(tweetId){
      axios.request({
        url: "https://tweeterest.ml/api/comments",
        method: "POST",
         headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "FQm37KYwvV3yKH1Z9totE4fHWkXYQ1j5ILIz9oFWSYZgb",
          },
          data:{
            loginToken: cookies.get('loginToken'),
            tweetId: tweetId,
            content:document.querySelector(`textarea[data-tweetid='${tweetId}']`).value
          }
      }).then(()=>{
        alert('successful')
        location.reload()
      }).catch((err)=>{

        console.log(err)
      });
    },
    getComments:function(tweetId){
       axios.request({
        url:'https://tweeterest.ml/api/comments',
        method: 'GET',
         headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "FQm37KYwvV3yKH1Z9totE4fHWkXYQ1j5ILIz9oFWSYZgb",
        },
       params:{
          tweetId: tweetId,
        }
        
      }).then((res)=>{
       let comments= res.data 
       //
       var text = ""
       
       for (var e=0; e<comments.length; e++){
         text+="<p>"+comments[e].content+"</p></br>"
       }
       document.querySelector(`article[data-tweetid='${tweetId}']`).innerHTML=text
      }).catch(()=>{});
    }
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
form#tweetCommentContainer {
  width: 300px;
}
textarea#commentOnTweets {
  height: 100px;
  max-width: 200px;
  width: 200px;
  background: transparent;
  border: 1px solid #666;
  box-shadow: none;
  margin: 10px auto;
}
article {
  border: 1px solid black;
}
article div {
  width: 100%;
}
section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
div.likeUnlike {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  background: white;
  border: 1px solid #ccc;
  transform: translate(-50%, -50%);
  display: none;
}
div.likeUnlike img {
  width: 100px;
  height: 100px;
  display: block;
  margin: 15px auto;
}
div.tweetComments{
  width: 90%; 
  margin: auto;
  border: none;
  border-top: 1px solid #eee;  
  display: flex;
  flex-direction: column;

}
div.tweetComments article{
  margin-bottom: 10px;  

}
div.tweetComments article p{
  font-size: 16px;
  color: #666;
}
.mainContainer{
 padding-bottom: 100px;
}

@media screen and (max-width: 500px) {
  section {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>