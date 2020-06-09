<template>
  <section class="section">
        <div class="container">
            <div class="tile is-ancestor">
                <div class="tile is-12 is-vertical is-parent">
                    <div class="tile is-4 is-child" v-for="article in this.articles" :key="article.id">
                        <img :src="'/images/'+article.image" alt="">
                        <p class="subtitle">{{article.header}}</p>
                        <p>{{article.content}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
const axios = require('axios');

export default {
    name:"ArticleGrid",
    data: function(){
        return{
            articles: [],
        }
    },
    methods:{
        getArticles: function(){
            axios.get('/article/getarticles/')
                .then(response => {
                    console.log(response.data.articles);
                    this.articles = response.data.articles;
                })
                .catch(error => {
                    console.log(error.message); // change to error message on screen
                });
        }
    },
    mounted(){
        this.getArticles();
    }
}
</script>

<style scoped>

.tile{
    word-break: break-all;
    padding: 0.75rem;
    /* flex-basis: auto; */
    position: relative;
}
.tile.is-parent{
    flex-wrap:wrap;
    justify-content: flex-start;
    /* size the tile after the size of the content */
    flex-basis: content;
    align-items: flex-start;
    height:400vh;
    width:100%;
    overflow-x:hidden;

}
</style>
