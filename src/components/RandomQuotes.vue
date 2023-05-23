<template>
   <div class="d-flex flex-column align-self-center">
        <div class="align-self-end">
            <button @click="getQoute">random
                <v-icon size="x-small" icon="mdi-autorenew"></v-icon>
            </button>
        </div>

        <div class="mx-auto w-50 mt-16 pl-8 border-left" v-for="qoute in qoutes" :key="qoute.id">
            <p class="text-h6 text-sm ">"{{ qoute.quoteText }}"</p>
        </div>

        <router-link 
        :to="{name: 'CurrentAuthor', query: {author: qoute.quoteAuthor}}" class="w-50 mx-auto mt-16 btn text-decoration-none" 
        v-for="qoute in qoutes" :key="qoute.id">
            <button class="d-flex justify-space-between w-100" flat>
                <div class="d-flex flex-column">
                    <p class="text-capitalize text-body-1">{{ qoute.quoteAuthor }}</p>
                    <span class="text-caption text-left">{{ qoute.quoteGenre }}</span>
                </div>
                <div class="">
                    <v-icon size="x-small" icon="mdi-arrow-right-thin"></v-icon>
                </div>
            </button>
        </router-link>
   </div>
</template>

<script>
import QouteService from '../ApiServices/QouteService'
    export default {
        props: ['author'],
        data() {
            return {
                qoutes: []
            }
        },
        methods: {
            getQoute() {
                QouteService.getQoute()
                    .then(res => {
                        // console.log(res.data.data)
                        (this.qoutes = res.data.data)
                    })
                    .catch(err => console.log(err))
            },
        },

        created() {
            QouteService.getQoute()
                .then(res => (this.qoutes = res.data.data))
                .catch(err => console.log(err))
        }
    }
</script>

<style scoped>
.border-left {
    border-left: 4px solid #FBC02D;
}
.btn {
    padding: 20px 16px;
    /* color: black; */
}
.btn:hover {
    background-color: black;
    padding: 20px 16px;
    color: white;
}

.parent {
    position: relative;
}
.push-child {
    position: absolute;
    top: auto;
    bottom: auto;
    right: -250px;
}

@media only screen and (max-width: 768px){
    .text-sm {
        font-size: 10px;
    }
}
</style>