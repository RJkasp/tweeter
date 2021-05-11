<template>
  <div>
    <footer>
      <p>copyright reserved for tweeter 2021-2022</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "footer-component",
};
</script>

<style scoped>
footer {
  background: #eee;
  width: 100%;
  /* The border box dont let the padding increase the width and height values inside box */
  box-sizing: border-box;
  padding: 6px;
  margin-top: 20px;
  position:fixed;
  bottom: 0;
  left: 0;
}
@media screen and (max-width: 400px){
  footer p{
    font-size: 16px;
  }
}


</style>