<template>
  <section class="section">
        <div class="container" >
            <div class="columns is-centered">
                <div class="column is-8" id="masonContainer">
                    <div class="card" v-for="article in articles" :key="article.id">
                        <img :src="'/'+article.image" alt="artikel billede">
                        <p class="subtitle">{{article.header}}</p>
                        <p class="content">{{article.content}}</p>
                    </div>
                </div>
            </div>
        </div>
        <button class="button"
            @click="getArticles(paginationCollection.articles.current_page+1)">Flere Artikler</button>
    </section>
</template>

<script>
const axios = require('axios');
const Macy = require('macy');

export default {
    name:"ArticleGrid",
    props: {
        tagSelection: {
            required: true,
            type: Array,
        }
    },
    data: function(){
        return{
            articles: [],
            paginationCollection: {}
        }
    },
    methods:{
        getArticles: function(index){
            axios.post("/article/getarticles/?page="+ index, {
                    tagselection: this.tagSelection,
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
                        y: 60,
                    },
                    breakAt: {
                        1040: 1,
                    },

                });
            },1000)

            // setTimeout(function(){
            //     console.log("timeout called");
            //     macyInstance.recalculate(true, true);
            // }, 2000)

        }
    },
    beforeMount(){
        this.getArticles(1);
    }
}
</script>

<style scoped>
.card{
    word-break: break-all;
    padding: 1rem;
    box-shadow: none !important;
}
</style>
