<template>
  <div class="container">
    <div class="row">
      <h1>About Me:</h1>

      <div v-if="aboutMe">
        <img src="https://nusaibah01.github.io/all-images/images/about.jpg" class="img-fluid" alt="aboutimg">
        <p class="lead" v-for="(about, index) in aboutMe" :key="index">{{ about }}</p>
      </div>
      <Spinner v-else />
    </div>
  </div>
</template>

<script setup>
import Spinner from "./Spinner.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const aboutMe = computed(() => store.state.about);

onMounted(() => {
  store.dispatch("fetchAbout");
});
</script>

<style scoped>
</style>