<template>
  <div class="mt-3 w-90 mx-4">
    <div class="row">
      <div class="col-md-2">
        <ul class="list-group w-100 text-center">
          <li
            class="list-group-item mb-2"
            v-for="(item, index) in menuItems"
            :key="index + 1"
          >
            <router-link
              class="nav-link"
              :to="item.url"
              @click="changeComponent(item.value)"
              >{{ item.name }}</router-link
            >
          </li>
        </ul>
      </div>
      <div class="col-md-8">
        <component v-bind:is="component" />
      </div>
      <div class="card col-md-2">
        <div class="card-header">Database</div>
        <ul class="list-group list-group-flush">
          <li
            v-for="(subitem, index) in laravel"
            :key="index + 1"
            class="list-group-item"
          >
            <a
              @click="changeComponent(subitem.value)"
              class="link-success"
              style="cursor: pointer"
              >{{ subitem.name }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Intro from "@/components/Laravel/IntroComponent.vue";
import Insert from "@/components/Laravel/Database/InsertComponent.vue";
export default {
  name: "LaravelView",
  components: {
    Intro,
    Insert,
  },
  data() {
    return {
      menuItems: [
        {
          name: "Laravel",
          url: "/laravel",
          value: Intro,
        },
        {
          name: "Vuejs",
          url: "/vue",
        },
      ],

      laravel: [
        {
          name: "Insert",
          // url: "/laravel/insert",
          value: Insert,
        },
        {
          name: "Update",
        },
        {
          name: "Delete",
        },
      ],

      component: Intro,
    };
  },

  methods: {
    changeComponent(component) {
      this.component = component;
    },
  },
};
</script>
<style scoped>
</style>