<template>
  <div class="Login">
    <login-component></login-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import LoginComponent from "@/components/LoginComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  name: "Login",
  components: {
    LoginComponent,
    FooterComponent,
  },
};
</script>
