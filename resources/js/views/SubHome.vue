<template>
  <div>
    <div class="hero is-medium" v-bind:style="{ backgroundImage: 'url(' + subjectPage.image +')' }">
      <div class="hero-head">
        <NavigationBar v-bind:user="this.user"></NavigationBar>
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">{{subject}}</h1>
        </div>
      </div>
    </div>
    <section class="section is-medium has-text-centered">
        <p id="citat" class="subtitle reveal">"{{subjectPage.citation}}"</p>
    </section>
    <div v-if="subject == 'Om'">
        <h2>
            her skal der stå noget om essou
        </h2>
    </div>
    <ArticleGrid v-bind:subject="subject" />
    <InstagramGrid/>
  </div>
</template>

<script>
import NavigationBar from '../components/Navigation.vue'
import ArticleGrid from '../components/ArticleGrid.vue'
import InstagramGrid from "../components/InstagramGrid.vue";
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
        ArticleGrid,
        InstagramGrid
    },
    computed: {
        subjectPage: function(){
            return subhomeDoc.pages.find(element => element.name === this.subject);
        }
    },
    mounted(){
        document.getElementById('citat').classList.add('visible');
    }
}
</script>

<style>
</style>
