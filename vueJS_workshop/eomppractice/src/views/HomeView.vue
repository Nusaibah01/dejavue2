<template>
  <div class="container">
   <div class="row">
    <LandingSection/>
    <section class="row" id="landing">
 
    </section>

    <section class="row" id="about">
<About/>
    </section>
    <section class="row" id="resume">
     <MyResume/>
    </section>
    <section class="row" id="project">
    </section>
    <section class="row" id="testimonials">

    </section>
    <section class="row" id="reachMe">

    </section>
   </div>
  </div>
</template>

<script>

import LandingSection from '@/components/LandingSection.vue'
import About from '@/components/AboutMe.vue'
import MyResume from '@/components/MyResume.vue'

export default {
  name: 'HomeView',
components: {
  LandingSection,
  About,
  MyResume,
  

}
  }

</script>
