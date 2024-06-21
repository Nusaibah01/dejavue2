<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2">Best Friends</h2>
        </div>
        <div class="row gap-2 justify-content-center" v-if="friends.length">
            <Card v-for="friend in friends" :key="friend.id" :class="{
            male: friend.gender.toLowerCase() == 'male',
            female: friend.gender.toLowerCase() == 'female'
        }">
                <template #cardHeader>
                    <img :src="friend.profile" :alt="friend.firstName" class="img-fluid" loading="lazy">
                </template>
                <template #cardBody>
                    <p class="lead">{{ friend.firstName }} {{ friend.lastName }}</p>
                </template>

            </Card>
        </div>
        <div class="d-flex justify-content-center" v-else>
            <div class="spinner-border" role="status">
            </div>
        </div>
    </div>
</template>


<script>

import Card from './Card.vue'
export default {
name:'FriendComp',
components: {
    Card
}
}
data() {
    return {
        friends: [
            {
                id:1,
                firstName: 'Rahmah',
                lastName: 'Charif',
                gender: 'female',
                profile: 'https://nusaibah01.github.io/all-images/images/icon1.jpg'
            },
            {
                id:2,
                firstName: 'Ayesha',
                lastName: 'Conlon',
                gender: 'female',
                profile: 'https://nusaibah01.github.io/all-images/ayesha.jpg'
            },
            {
                id:3,
                firstName: 'Junay',
                lastName: 'Williams',
                gender: 'female',
                profile: 'https://nusaibah01.github.io/all-images/images/junay.jpg'
            },
            {
                id:4,
                firstName: 'Aqeelah',
                lastName: 'Abrahams',
                gender: 'female',
                profile: 'https://nusaibah01.github.io/all-images/aqeelah.jpg'
            },
            {
                id:5,
                firstName: 'Abdurahman',
                lastName: 'Charif',
                gender: 'male',
                profile: 'https://nusaibah01.github.io/all-images/images/✰ 𝖱𝗈𝗋𝗈𝗇𝗈𝖺 𝖹𝗈𝗋𝗈 𝗂𝖼𝗈𝗇.jpg'
            },
            {
                id:6,
                firstName: 'John',
                lastName: 'Doe',
                gender: 'male',
                profile: 'https://nusaibah01.github.io/all-images/images/johndoe.jpg.jpg'
            },
        ]
    }
}
</script>

<style>
.male {
    border: 2px solid gold;
    box-shadow: .3vw .2vw .5vw lightgoldenrodyellow;
}
.female {
    border: 2px solid pink;
    box-shadow: .3vw .2vw .5vw darkred;
}
</style>