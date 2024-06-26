<template>
    <div class="container">
<div class="row">
    <div class="col">
        <img
          src="https://nusaibah01.github.io/all-images/images/Mylogo.png.png"
          alt="logo"
          class="img-fluid"
          loading="lazy"
        />
    </div>
    <div class="col">
        <div id="details">
            <h1 class="display-1">Nusaibah Charif</h1>
            <span>{{ jobTitle[0].titel }}</span>
        </div>
    </div>
</div>
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
const jobTitle = computed(() => this.$store.state.jobTitle)
onMounted(() => {
    this.$store.dispatch('fetchJobTitle')
})
</script>

<style scoped>
</style>
