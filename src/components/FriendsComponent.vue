<template>
  <div>
    <ul>
      <li id="name">{{userData.username}}</li>
      <li id="email">{{userData.email}}</li>
      <li id="birthdate">{{userData.birthdate}}</li>
      <li id="bio">{{userData.bio}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "friends-component",
  data(){
      return{
          userData:{},
      }
  },
  created(){
      let url= location.href.split("userid=")
    
     
axios.request({
    url:"https://tweeterest.ml/api/users",
    method: "GET",
       headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "FQm37KYwvV3yKH1Z9totE4fHWkXYQ1j5ILIz9oFWSYZgb",
        },
        params:{
          userId: url[1]
        }
       
}).then((res)=>{
    this.userData=res.data[0]
}).catch((err)=>{console.log(err)});
  }
};
</script>

<style scoped>
ul{
  list-style:none;

}
ul li{
  text-align:left;
  padding: 6px;
}
#name{
  font-weight: bold;
  font-size: 1.5em;
}
#bio{
  border: 1px solid #ccc;
  padding: 20px;
  margin-top: 5px;
  width: fit-content;
  border-radius: 10px;
  box-shadow: 3px 3px 3px #eee;
  background: rgb(241, 241, 241);
}
</style>