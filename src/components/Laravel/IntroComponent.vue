<template>
  <span>
    <h3>{{ $t("laravel.titel") }}</h3>
    <p class="fw-bolder">{{ $t("laravel.description") }}</p>
    <h4 class="fw-bolder">Why Laravel?</h4>
    <P>
      {{ $t("laravel.why") }}
    </P>
    <h4 class="fw-bolder">Installation</h4>
    <p class="p">{{ $t("laravel.inastallation") }} <br /></p>
    <Markdown :source="source" />
  </span>
</template>

<script>
import Markdown from "vue3-markdown-it";
export default {
  name: "IntroView",
  components: {
    Markdown, 
  },
  data() {
    return {
      source: "```npm run dev```",
    };
  },
  computed: {},
};
</script>