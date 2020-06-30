<template>
  <div>
    <div class="hero is-medium" v-bind:style="{ backgroundImage: 'url(' + image.image +')' }">
      <div class="hero-head">
        <NavigationBar v-bind:user="this.user"></NavigationBar>
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">{{subject}}</h1>
        </div>
      </div>
    </div>
    <ArticleGrid v-bind:subject="subject" />
  </div>
</template>

<script>
import NavigationBar from '../components/Navigation.vue'
import ArticleGrid from '../components/ArticleGrid.vue'
import subhomeDoc from '../subhome.js';

export default {
    Name: "SubHome",
    props: {
        user: {
            required: true,
            type: String
        },
        subject:{
            required: true,
            type: String
        },
    },
    components:{
        NavigationBar,
        ArticleGrid
    }, 
    computed: {
        image: function(){
            return subhomeDoc.pages.find(element => element.name === this.subject);
        }
    }
}
</script>

<style>
</style>
