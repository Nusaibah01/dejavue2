<template>
<div class="container">
  <div class="row">
    <UserDetail firstName="Nusaibah" lastName="Charif"></UserDetail>
    <UserDetail firstName="Rahmah"></UserDetail>
  </div>
  <div class="row">
    
<h2>App Component</h2>
  </div>
  <div class="row">
<Card v-for="(friend, index) in friends" :key="index">
  <template #cardHeader>
   <img class="img-fluid" :src="friend.profile" :alt="friend.firstName" loading="lazy">
  </template>
  <template #cardBody>
     <p>{{ friend.firstName }} {{ friend.lastName }}</p>
  </template>
</Card>
  </div>


</div>
</template>

<script>
import UserDetail from '@/components/UserDetail.vue'
import Card from '@/components/Card.vue';
export default {
  name: 'App',
  components: {
  UserDetail,
  Card
  
  },
  data() {
    return{
      friends: [
{
  firstName: 'Rahmah',
  lastName: 'Charif', 
  profile: 'https://nusaibah01.github.io/all-images/images/icon1.jpg'
},
{
  firstName: 'Abdurahman',
  lastName: 'Charif', 
  profile: 'https://nusaibah01.github.io/all-images/images/✰ 𝖱𝗈𝗋𝗈𝗇𝗈𝖺 𝖹𝗈𝗋𝗈 𝗂𝖼𝗈𝗇.jpg'
},
{
  firstName: 'Ayesha',
  lastName: 'Conlon', 
  profile: 'https://nusaibah01.github.io/all-images/images/Hijabicon2.jpg'
},
{
  firstName: 'Aqeelah',
  lastName: 'Abrahams', 
  profile: 'https://nusaibah01.github.io/all-images/images/hijabicon4.jpg'
},

    

      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
