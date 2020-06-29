<template>
  <div >
    <section class="hero is-medium" v-bind:style="{ backgroundImage: 'url(/' + article.image +')' }">
        <div class="hero-head">
             <NavigationBar v-bind:user="this.user"></NavigationBar>
        </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">{{article.header}}</h1>
          <h2 class="subtitle">{{article.created_at}}</h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
          {{article.content}}
      </div>
    </section>
  </div>
</template>

<script>
const axios = require("axios");
import NavigationBar from '../components/Navigation.vue';
export default {
  name: "myarticle",
  components: {
      NavigationBar
  },
  props: {
    header: {
      required: true,
      type: String
    },
    user: {
        required:true,
        type:String
    }
  },
  data: function() {
    return {
      article: [],
    };
  },
  methods: {
    getArticle: function() {
      console.log(this.header);
      axios
        .post("/articles/getarticle", {
          header: this.header
        })
        .then(response => {
          console.log(response.data.article[0]);
          this.article = response.data.article[0];
        })
        .catch(error => {
          console.log(error.message); // change to error message on screen
        });
    }
  },
  beforeMount() {
    this.getArticle();
  }
};
</script>

<style>
</style>
