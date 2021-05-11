<template>
  <div>
    <header-component></header-component>
    <friends-component></friends-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FriendsComponent from "@/components/FriendsComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  name: "friends",
  components: {
    HeaderComponent,
    FriendsComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
</style>