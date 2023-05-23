<template>
        <v-navigation-drawer
          v-model="drawer"
          temporary
        >
          <v-list-item
            prepend-avatar="/src/assets/me.jpg"
            title="Agu O. Wisdom"
          ></v-list-item>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <v-list-item class="mouse-1" color="primary">
            <router-link class="text-decoration-none text-col" to="/"  title="random qoutes">Random qoute</router-link>
            </v-list-item>

            <div class="mouse d-flex justify-space-between">
            <v-list-item class="mouse w-75">
                    Select author
                    <v-menu activator="parent">
                        <v-list>
                            <v-list-item
                                v-for="(qoute, index) in qoutes"
                                :key="qoute.id"
                                :value="index"
                            >
                                <router-link :to="{name: 'Authors', query: {author: qoute.quoteAuthor}}">{{ qoute.quoteAuthor }}</router-link>
                            </v-list-item>
                        </v-list>
                    </v-menu>
            </v-list-item>
            <v-icon size="large" class="pr-8 pt-4" @click="moreAuthors" title="shuffle" icon="mdi-autorenew"></v-icon>
          </div>
          </v-list>
          
        </v-navigation-drawer>
          <div class="d-flex flex-row justify-space-between px-6 pt-2 bg-indigo">
            <div class="d-flex">
              <v-btn
              class="mt-2"
              @click.stop="drawer = !drawer"
              flat
              color="indigo"
              >
              <v-icon icon="mdi-backburger" size="x-large"></v-icon>
            </v-btn>
            <v-switch title="switch theme" @click="switchTheme" class="mb-0 pb-0"/>
            </div>

            <h3 class="text-heading-2 mt-2">RQG</h3>
          </div>
  </template>

<script>
import axios from 'axios';
import { useTheme } from 'vuetify/lib/framework.mjs';
    export default {
      props: ['author'],
        data() {
            return {
                drawer: null,
                qoutes: [
                ],
                
            }
        },

        methods: {
          moreAuthors() {
          const random = Math.floor(Math.random() * 500) + 1
          axios.get("https://quote-garden.onrender.com/api/v3/quotes?limit=10&page=" + random)
            .then(res => {
            (this.qoutes = res.data.data);
        })
            .catch(err => console.log(err));
    },
        },

        created() {
          const random = Math.floor(Math.random() * 500) + 1
          axios.get("https://quote-garden.onrender.com/api/v3/quotes?limit=10&page=" + random)
            .then(res => {
            (this.qoutes = res.data.data);
        })
            .catch(err => console.log(err));
    },

        setup() {
          const theme = useTheme()
          return {
            theme,
            switchTheme: () => {
              theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
            }
          }
        }
    }
    
</script>

<style scoped>
.mouse {
    cursor: pointer;
}

.mouse:hover {
    background-color: #F5F5F5;
    color: black;
}

.mouse-1 {
    cursor: pointer;
}

.cl {
  color: black;
}

.mouse-1:hover {
    color: black;
    background-color: #F5F5F5;
}
</style>