l<template>
<div class="container">
    <div class="row">
        <h1>My Resume</h1>
</div>

    <div class="row">
        <h2>Education</h2>
        <div v-if="myEducation">
            <p class="lead" v-for="(education, index) in myEducation" :key="index ">{{ myEducation }}</p>
     
        </div>
        <Spinner v-else />
    </div>
    <div class="row">
        <h2>Skills</h2>
        <div v-if="mySkills">
          
     
        <p class="lead" v-for="(skill, index) in mySkills" :key="index">{{ mySkills }}</p>
        <p class="lead" v-for="(about, index) in aboutMe" :key="index">{{ about }}</p>
   
   
    </div>
    <Spinner v-else />
 </div>
 <div class="row">
    <h2>Experiance</h2>
    <div v-if="myExperiance">
        <p class="lead" v-for="experiance in myExperiance" :key="experiance.id ">{{ myExperiance }}</p>
</div>
<Spinner v-else />
</div>
</div>

      
 
 
</template>

<script setup>
import Spinner from "./Spinner.vue"
// import Card from './Card.vue'
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const myEducation = computed(() => store.state.education)
const myExperiance = computed(() => store.state.experiance)
const mySkills = computed(() => store.state.skills)

onMounted(() => {
  store.dispatch("fetchEducation");
  store.dispatch("fetchExperiance");
  store.dispatch("fetchSkills")
});
</script>
