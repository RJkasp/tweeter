<template>
  <div>
 <sign-up-component></sign-up-component>
 <footer-component></footer-component>
  </div>
</template>

<script>

import SignUpComponent from "@/components/SignUpComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  name: "signup",
  components: {
   SignUpComponent,
   FooterComponent,
},
};
</script>

<style scoped>
</style>
