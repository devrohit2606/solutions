<template>
  <Header-view />
  <router-view />
  <Footer-view />
</template>

<script>
import HeaderView from "./views/layout/HeaderView.vue";
import FooterView from "./views/layout/FooterView.vue";
export default {
  components: {
    HeaderView,
    FooterView,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  /* color: #2c3e50; */
}

nav a.router-link-exact-active {
  color: #42b983;
}
h3 {
  text-align: center;
}
</style>
