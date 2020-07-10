<template>
<div>
    <section id="hiddenSection" class="section hidden">
        <div class="container" >
            <div class="columns is-centered">
                <div class="column is-8" id="masonContainer">
                    <div class="card" v-for="article in articles" :key="article.id">
                        <router-link :to="{ name: 'article', params:{header:article.header} }">
                        <img :src="'/'+article.header_image" alt="artikel billede">
                        <p class="title">{{article.header}}</p>
                        <p class="subtitle">{{formatDate(article.created_at)}}</p>
                        <p class="content">{{article.content.slice(0,180)}}...</p>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="articles.length >= 1" class="columns is-centered">
            <button class="button subtitle"
            @click="getArticles(paginationCollection.articles.current_page+1)">Læs mere</button>
        </div>
        
    </section>
</div>
</template>

<script>
const axios = require('axios');
const Macy = require('macy');

import subhomeDoc from '../subhome.js';
import moment from 'moment'


export default {
    name:"ArticleGrid",
    props: {
        subject: {
            required: true,
            type: String,
        }
    },
    data: function(){
        return{
            articles: [],
            paginationCollection: {},
        }
    },
    methods:{
        formatDate: function(value){
            if(value){
                moment.locale('da');
                return moment(value).format('L');
            }
        },
        getArticles: function(index){
            axios.post("/article/getarticles/?page="+ index, {
                    tagselection: this.subject,
            })
                .then(response => {
                    console.log(response.data.articles.data);
                    this.paginationCollection = response.data;
                    response.data.articles.data.forEach(element => {
                        this.articles.push(element);
                    });
                    this.buildMasonry();

                })
                .catch(error => {
                    console.log(error.message); // change to error message on screen
                    //this.loading = false;
                });
        },
        buildMasonry: function(){
            setTimeout(function(){
                //console.log("masonry is being built");
                var macyInstance = Macy({
                    container: '#masonContainer',
                    columns: 2,
                    waitForImages: true,
                    trueOrder: true,
                    margin: {
                        x: 40,
                        y: 70,
                    },
                    breakAt: {
                        1040: 1,
                    },
                });
                setTimeout(function(){
                    var section = document.getElementById("hiddenSection")
                    section.classList.remove('hidden');
                }, 500)
            },500)


            // setTimeout(function(){
            //     console.log("timeout called");
            //     macyInstance.recalculate(true, true);
            // }, 2000)

        }
    },
    beforeMount(){
        this.getArticles(1);
    },
}
</script>

<style scoped>
.card{
    word-break: break-all;
    padding: 1rem;
    box-shadow: none !important;
}
.hidden{
    visibility:hidden;
}
.button{
    border: none !important;
}
</style>
