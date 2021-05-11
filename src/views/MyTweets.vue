<template>
  <div>
    <header-component></header-component>
    <my-tweets-component></my-tweets-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import MyTweetsComponent from "@/components/MyTweetsComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  name: "my-tweets",
  components: {
    HeaderComponent,
    MyTweetsComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
</style>