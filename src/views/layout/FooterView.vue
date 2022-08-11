<template>
  <!-- Footer -->
  <footer class="text-center text-lg-start text-white bg-dark">
    <!-- Copyright -->
    <div class="text-center">
      Copyright &copy; {{ getYear() }} and Designed by
      <b class="name">Rohit kumar</b>.
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>

<script>
export default {
  name: "FooterView",
  data() {
    return {
      year: "",
    };
  },
  methods: {
    // goToHome(){
    //   this.$router.push({ name: "home" });
    // },
    // goToAbout(){
    //   this.$router.push({ name: "about" });
    // },
    getYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  z-index: 1;
}

.name {
  font-family: "Beau Rivage";
  font-size: 22px;
  color: #da1e4d;
}
</style>

