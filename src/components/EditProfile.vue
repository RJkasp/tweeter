<template>
  <div>
    <h3>Edit Profile</h3>
    <form @submit="editProfile">
      <input
        type="text"
        :value="profileData.username"
        placeholder="username"
        id="profileUserName"
      />
      <input
        type="email"
        :value="profileData.email"
        placeholder="example@domain.com"
        id="profileEmail"
      />
      <input
        type="password"
        :value="profileData.password"
        placeholder="new password"
        id="profileNewPassword"
      />
      <input
        type="text"
        :value="profileData.bio"
        placeholder="bio"
        id="profileEditBio"
      />
      <input type="date" :value="profileData.birthdate" id="profileBirthdate" />
      <input type="submit" value="Update Profile" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
import cookie from "vue-cookies";
export default {
  name: "edit-profile",
  data() {
    return {
      profileData: {
        username: "",
        email: "",
      },
    };
  },
  methods: {
    editProfile: function (event) {
      event.preventDefault();

      let data = {
        loginToken: cookie.get("loginToken"),
        email: document.getElementById("profileEmail").value,
        username: document.getElementById("profileUserName").value,
        bio: document.getElementById("profileEditBio").value,
        birthdate: document.getElementById("profileBirthdate").value,
      };

      if (document.getElementById("profileNewPassword").value.length > 0) {
        data.password = document.getElementById("profileNewPassword").value;
      }

      axios
        .request({
          url: "https://tweeterest.ml/api/users",
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "FQm37KYwvV3yKH1Z9totE4fHWkXYQ1j5ILIz9oFWSYZgb",
          },
          data: JSON.stringify(data)
        })
        .then(() => {location.href='#/profile'})
        .catch((err) => {console.log(err)});
    },
  },
  created() {
    axios
      .request({
        url: "https://tweeterest.ml/api/users",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "FQm37KYwvV3yKH1Z9totE4fHWkXYQ1j5ILIz9oFWSYZgb",
        },
        data: JSON.stringify({ userId: cookie.get("userId") }),
      })
      .then((res) => {
        this.profileData = res.data[0];
        console.log(res);
      })
      .catch(() => {
        location.href = "";
      });
  },
};
</script>

<style scoped>
</style>