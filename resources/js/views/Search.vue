<template>
  <div>
    <div class="hero is-large has-bg-img">
      <div class="hero-head">
        <NavigationBar v-bind:user="this.user"></NavigationBar>
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="myTitle">Søg</h1>
          <div class="field has-addons">
              <div class="control is-expanded">
                  <input class="input" v-model="search" type="text" placeholder="Søg artikler efter emne">
              </div>
              <div class="control">
                  <a class="button" @click="searchArticles"><img style="max-height: 100%;" src="/images/search.png" alt=""></a>
              </div>
          </div>
        </div>
      </div>
    </div>
    <section class="section is-small">
      <div class="container">
        <p
        id="citat"
          class="reveal subtitle is-italic has-text-weight-bold has-text-centered"
        >"At søge er at finde sig selv"</p>
      </div>
    </section>
    <ArticleGrid v-bind:subject="subject" :key="rerenderKey"/>
  </div>
</template>

<script>
const axios = require('axios');
import NavigationBar from '../components/Navigation.vue';
import ArticleGrid from '../components/ArticleGrid.vue';

export default {
    Name: "search",
    components: {
        NavigationBar,
        ArticleGrid,
    },
    props: {
        user : {
            required: true,
            type: String
        }
    },
    data: function(){
        return {
            search: "",
            searchClicked: false,
            subject: "",
            rerenderKey: 0,
        }
    },
    methods: {
        searchArticles: function(){
            var str = this.search.split(' ').join(',');
            console.log(str);
            this.subject = str;
            this.rerenderKey +=1;
        }
    },
     mounted(){
        document.getElementById('citat').classList.add('visible');
    }
}
</script>

<style scoped>
.has-bg-img {
  background: url("/images/jungle.jpg") center center;
  background-size: cover;
}

</style>
