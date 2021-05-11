<template>
  <div>
    <header-component></header-component>
    <edit-my-tweets-component></edit-my-tweets-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import EditMyTweetsComponent from "@/components/EditMyTweetsComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  name: "my-tweets",
  components: {
    HeaderComponent,
    EditMyTweetsComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
</style>