<template>
  <div>
    <header-component></header-component>
    <profile-component></profile-component>
    <my-followers-component></my-followers-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import ProfileComponent from "@/components/ProfileComponent.vue";
import MyFollowersComponent from "@/components/MyFollowersComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  name: "profile",
  components: {
    HeaderComponent,
    ProfileComponent,
    MyFollowersComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
</style>