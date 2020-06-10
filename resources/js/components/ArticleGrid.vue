<template>
  <section class="section">
        <div class="container" id="masonContainer">
            <div class="card" v-for="article in articles" :key="article.id">
                <img :src="'/images/'+article.image" alt="">
                <p class="subtitle">{{article.header}}</p>
                <p>{{article.content}}</p>
            </div>
        </div>
        <button
            @click="getArticles(this.paginationCollection.articles.current_page+1)">Flere Artikler</button>
    </section>
</template>

<script>
const axios = require('axios');
const Macy = require('macy');

export default {
    name:"ArticleGrid",
    data: function(){
        return{
            articles: [],
            paginationCollection: {}
        }
    },
    methods:{
        getArticles: function(index){
            axios.get("/article/getarticles/?page="+ index)
                .then(response => {
                    console.log(response.data);
                    this.paginationCollection = response.data;
                    this.articles = response.data.articles.data;
                    this.buildMasonry();
                })
                .catch(error => {
                    console.log(error.message); // change to error message on screen
                });
        },
        buildMasonry: function(){
            setTimeout(function(){
                console.log("masonry is being built");
                var macyInstance = Macy({
                    container: '#masonContainer',
                    columns: 3,
                    waitForImages: true,
                    trueOrder: true,
                    margin: {
                        x: 20,
                        y: 30,
                    },
                    breakAt: {
                        1040: 2,
                        850: 1
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
    padding: 0.75rem;
}
</style>
