<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand title" href="#">solution</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menubar"
        aria-controls="menubar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="menubar">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5 fw-bolder">
          <li
            class="nav-item"
            v-for="(item, index) in menuItems"
            :key="index + 1"
          >
            <router-link class="nav-link" :to="item.url">{{
              item.name
            }}</router-link>
          </li>
        </ul>
        <div class="d-flex">
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="$i18n.locale"
          >
            <option
              v-for="(lang, i) in langs"
              :key="`lang-${i}`"
              :value="lang.value"
            >
              {{ lang.flag }}
              {{ lang.name }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderView",
  data() {
     return {
      langs: [
        {
          name: "English",
          value: "en",
          flag: "🇺🇸",
        },
        {
          name: "Hindi",
          value: "hi",
          flag: "🇮🇳",
        },
        // {
        //   name: "French",
        //   value: "fr",
        //   flag: "🇫🇷",
        // }
      ],
      menuItems: [
        {
          name: "Home",
          url: "/",
        },
        {
          name: "About",
          url: "/about",
        },
        {
          name: "Laravel",
          url: "/laravel",
        },
        {
          name: "Vuejs",
          url: "/vue",
        },
      ],
    };
  },
};
</script>

<style scoped>
.title {
  font-family: "Sofia";
  font-size: 1.6rem;
  color: #00c781;
}
</style>