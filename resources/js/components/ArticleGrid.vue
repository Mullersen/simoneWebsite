<template>
  <section class="section">
        <div class="container">
            <div class="tile is-ancestor">
                <div class="tile is-12 is-vertical is-parent">
                    <div class="tile box is-6 is-child" v-for="article in this.articles" :key="article.id">
                        <p>{{article.id}}</p>
                        <p>{{article.header}}</p>
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
}
.tile.is-parent{
    flex-wrap:wrap;
    justify-content: space-evenly;
    height: 150vh;
}
.articleGrid{
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    justify-content: flex-start;
    align-items: flex-start;
    height: 150vh;
}
.articleTile{
    width:50%;
}
</style>
