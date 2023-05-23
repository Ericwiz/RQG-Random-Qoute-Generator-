<template>
    <div class="d-flex justify-center">
        <router-link title="generate another qoute" to="/">
            <v-icon icon="mdi-arrow-left-box" size="x-large" class="pt-2"></v-icon>
        </router-link>
        
        <h3 class="text-center text-h4 pl-6">Qoutes from <span class="font-italic">{{ author }}</span></h3>
    </div>
    <div v-for="qoute in qoutes" :key="qoute.id">
        <div class="mx-auto w-50 mt-16 pl-8 border-left">
            <p class="text-h6">"{{ qoute.quoteText }}"</p>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios'
    export default {
    props: ["author"],
    data() {
        return {
            qoutes: []
        };
    },
    // methods: {
    //     getAuthorQoutes(author) {
    //         axios.get('https://quote-garden.onrender.com/api/v3/quotes?limit=3&author=' + author)
    //         .then(res => {
    //                 console.log(res.data)
    //                 (this.qoutes = res.data.data)
    //             })
    //             .catch(err => console.log(err))
    //     }
    // },
    created() {
        axios.get("https://quote-garden.onrender.com/api/v3/quotes?limit=5&page=1&author=" + this.author)
            .then(res => {
            // console.log(res.data)
            (this.qoutes = res.data.data);
        })
            .catch(err => console.log(err));
    },
}
</script>

<style scoped>
.border-left {
    border-left: 4px solid #FBC02D;
}
</style>