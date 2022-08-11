<template>
  <div class="container">
    <h3>{{ $t("vuejs.titel") }}</h3>
    <p>{{ $t("vuejs.description") }}</p>
  </div>
</template>
<script>
export default {
  name: "VueView", // This is the name of the component.
};
</script>

<style scoped>
aside {
  /* display: none; */
  width: 200px;
  height: 100vh;
}
</style>