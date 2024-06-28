<template>
    <div class="container">
      <div class="row">
        <h1>My Resume</h1>
      </div>
  
      <div class="row">
        <h2>Education</h2>
        <div v-if="myEducation">
        <img class="img-fluid" src=https://nusaibah01.github.io/all-images/images/lca.png loading="lazy" alt="LCA">
        <img class="img-fluid" src="https://nusaibah01.github.io/all-images/images/harvard.jpg" loading="lazy" alt="Harvard">
        <img class="img-fluid" src="https://nusaibah01.github.io/all-images/images/ka.png" loading="lazy" alt="ka">
        <img class="img-fluid" src="https://nusaibah01.github.io/all-images/images/tlc.jpg" loading="lazy" alt="tlc">

          <p class="lead" v-for="(education, id) in myEducation" :key="id">{{ education.School}}</p>
          <p class="lead" v-for="(education, id) in myEducation" :key="id">{{ education.Year }}</p>
          <p class="lead" v-for="(education, id) in myEducation" :key="id">{{ education.Experiance}}</p>
          
          

        </div>
        <Spinner v-else />
      </div>
  
      <div class="row">
        <h2>Skills</h2>
        <div v-if="mySkills">
            <h3>Soft Skills</h3>
          <p class="lead" v-for="(skill, id) in mySkills" :key="id">{{ skill.softSkill1 }}</p>
          <p class="lead" v-for="(skill, id) in mySkills" :key="id">{{ skill.softSkill2 }}</p>
          <p class="lead" v-for="(skill, id) in mySkills" :key="id">{{ skill.softSkill3 }}</p>
        <h3>Languages</h3>
        <p class="lead" v-for="(skill, id) in mySkills" :key="id">{{ skill.polyglotSkill1 }}</p>
        <p class="lead" v-for="(skill, id) in mySkills" :key="id">{{ skill.polyglotSkill2 }}</p>
        <p class="lead" v-for="(skill, id) in mySkills" :key="id">{{ skill.polyglotSkill3 }}</p>
        <p class="lead" v-for="(skill, id) in mySkills" :key="id">{{ skill.polyglotSkill4 }}</p>
        <p class="lead" v-for="(skill, id) in mySkills" :key="id">{{ skill.polyglotSkill }}</p>

        </div>
        <Spinner v-else />
      </div>
  
      <div class="row">
        <h2>Experience</h2>
        <div v-if="myExperience">
          <p class="lead" v-for="experience in myExperience" :key="experience.id">{{ experience }}</p>
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
  const myEducation = computed(() => store.state.education);
  const myExperience = computed(() => store.state.experiance); // Corrected typo from your original "experiance"
  const mySkills = computed(() => store.state.skills);
  
  // Fetch data on component mount
    onMounted(() => {
    store.dispatch("fetchEducation");
    store.dispatch("fetchExperience"); // Corrected action name to match Vuex action
    store.dispatch("fetchSkills");
  })
  </script>
  
  <style scoped>
  /* Add any necessary scoped styles here */
  </style>
  
