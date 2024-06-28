<template>
    <div class="container">
<div class="row vh-100 align-items-center">
    <div class="col">
        <img
          src="https://nusaibah01.github.io/all-images/images/Mylogo.png.png"
          alt="logo"
          class="img-fluid w-75 shadow rounded-top border-top"
          loading="lazy"
        />
    </div>
    <div class="col">
        <div id="details">
            <h1 class="display-1" id="text">Nusaibah Charif</h1>
           <p v-if="title" id="text">
            I am an
            <span>{{ title}}</span>
        </p>
       <Spinner v-else />
        </div>
    </div>
</div>
    </div>
</template>

<script setup>
import Spinner from './Spinner.vue'
import { computed, onMounted, ref} from 'vue'
import  { useStore } from 'vuex'
const store =  useStore()
const jobTitle = computed(() => store.state.jobTitle)
const title = ref('Aspring Full Stack Developer and Cyber Security Analyst')
const cnt = ref(-1)

function repeat() {
    try{
        if(cnt.value == jobTitle.value?.length) cnt.value = 0;
        title.value = jobTitle.value?.at(cnt.value)?.titel;
        setTimeout(repeat, 2000)
        cnt.value++
    } catch(e) {
        // 
    }
}
onMounted(() => {
store.dispatch('fetchJobTitle')
repeat()
})
</script>

<style scoped>
</style>
