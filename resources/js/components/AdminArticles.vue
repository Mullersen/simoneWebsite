<template>
<div>
    <div class="columns is-multiline">
      <div
        id="cardContainer"
        class="column is-one-quarter"
        v-for="(article, index) in this.articles"
        :key="article.id"
      >
        <div class="card" :id="'article' + index">
          <div class="id" style="display:none">{{article.id}}</div>
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="'/'+article.header_image" alt="essou artikel"/>
            </figure>
          </div>
          <div class="card-content">
            <p class="title is-4 has-text-dark">{{article.header}}</p>
            <!-- <p class="content">{{description}}</p> -->
            <button @click="promptQuestion(index)" class="button is-primary">Slet artikel</button>
          </div>
        </div>
      </div>
    </div>
    <div id="hidden" class="box">
      <p class="title">Er du sikker på du vil slette denne artikel?</p>
      <button class="button" @click.once="deleteArticle">Ja</button>
      <button class="button" @click="goBack">Nej, tag mig retur</button>
    </div>
</div>

</template>

<script>
const axios = require("axios");
export default {
    name: "AdminArticles",
    data: function(){
        return{
            articles: [],
        }
    },
    methods: {
        getArticles: function(){
         axios.get("/article/getAllArticles")
                .then(response => {
                    this.articles = response.data.articles;
                    console.log(response.data.articles);
                })
                .catch(error => {
                    console.log(error.message); // change to error message on screen
                    //this.loading = false;
                });
    },
    promptQuestion: function(index) {
      this.id = document.getElementById("article" + index).firstChild.innerHTML;
      document.getElementById("hidden").classList.add("visible");
    },
    goBack: function() {
      document.getElementById("hidden").classList.remove("visible");
    },
    deleteArticle: function() {
      axios
        .post("/addons/deleteArticle", {
          id: this.id
        })
        .then(response => {
          console.log(response.data);
          this.goBack();
          this.getArticles();
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
#hidden {
  display: none;
}
.visible {
  display: block !important;
  position: fixed;
  width: 50vw;
  height: 25vh;
  top: 25vh;
  left: 25vw;
  background-color: grey;
}
</style>
