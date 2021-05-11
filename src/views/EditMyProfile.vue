<template>
  <div>
    <header-component></header-component>
    <edit-profile></edit-profile>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import EditProfile from "@/components/EditProfile.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  name: "update-profile",
  components: {
    HeaderComponent,
    EditProfile,
    FooterComponent,
  },
};
</script>

<style scoped>
</style>