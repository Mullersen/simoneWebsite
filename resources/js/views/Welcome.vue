<template>
  <div>
    <div class="hero is-fullheight has-bg-img">
      <div class="hero-head">
        <NavigationBar v-bind:user="this.user"></NavigationBar>
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="myTitle">Velkommen til essou</h1>
        </div>
      </div>
    </div>
    <section class="section is-small">
      <div class="container">
        <p
          class="content is-italic has-text-weight-bold has-text-centered"
        >"Det her er et citat som skal inspirere og få besøgeren til at få lyst til at scrolle længere ned og opdage hvad der er på siden."</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-8">
            <div class="columns is-centered is-8 is-variable">
              <div class="column" id="masonContainer">
                <div class="card" v-for="article in articles.slice(0,2)" :key="article.id">
                  <router-link :to="{ name: 'article', params:{header:article.header} }">
                    <img :src=" '/'+article.image" alt="artikel" />
                    <h2 class="title">{{article.header}}</h2>
                    <p class="subtitle">{{formatDate(article.created_at)}}</p>
                    <p class="content">{{article.content}}</p>
                  </router-link>
                </div>
              </div>
              <div class="column" id="secondColumn">
                <div class="card" v-for="article in articles.slice(2,3)" :key="article.id">
                  <router-link :to="{ name: 'article', params:{header:article.header, user:user} }">
                    <img :src=" '/'+article.image" alt="artikel" />
                    <h2 class="title">{{article.header}}</h2>
                    <p class="subtitle">{{formatDate(article.created_at)}}</p>
                    <p class="content">{{article.content}}</p>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section is-small">
      <div class="container">
        <p
          class="content is-italic has-text-weight-bold has-text-centered"
        >"Det her er et mere citat som skal inspirere og få besøgeren til at få lyst til at scrolle længere ned og opdage hvad der er på siden."</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-8">
            <div class="columns is-centered is-8 is-variable">
              <div class="column" id="secondColumn">
                <div class="card" v-for="article in articles.slice(3,4)" :key="article.id">
                  <router-link :to="{ name: 'article', params:{header:article.header, user:user} }">
                    <img :src=" '/'+article.image" alt="artikel" />
                    <h2 class="title">{{article.header}}</h2>
                    <p class="subtitle">{{formatDate(article.created_at)}}</p>
                    <p class="content">{{article.content}}</p>
                  </router-link>
                </div>
              </div>
              <div class="column">
                <div class="card" v-for="article in articles.slice(4,6)" :key="article.id">
                  <router-link :to="{ name: 'article', params:{header:article.header, user:user} }">
                    <img :src=" '/'+article.image" alt="artikel" />
                    <h2 class="title">{{article.header}}</h2>
                    <p class="subtitle">{{formatDate(article.created_at)}}</p>
                    <p class="content">{{article.content}}</p>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const axios = require("axios");
import NavigationBar from "../components/Navigation.vue";
import moment from 'moment'

export default {
  name: "welcome",
  props: {
    user: {
      required: true,
      type: String
    }
  },
  components: {
    NavigationBar
  },
  data: function() {
    return {
      articles: []
    };
  },
  methods: {
      formatDate: function(value){
            if(value){
                moment.locale('da');
                return moment(value).format('L');
            }
        },
    getFPArticles: function() {
      axios
        .get("/articles/getfpArticles")
        .then(response => {
          console.log(response.data.fparticles);
          this.articles = response.data.fparticles;
        })
        .catch(error => {
          console.log(error.message); // change to error message on screen
        });
    }
  },
  mounted() {
    this.getFPArticles();
  }
};
</script>

<style scoped>
.myTitle {
  font-size: 4rem !important;
  font-family: "Playfair Display", serif;
}
.has-bg-img {
  background: url("/images/jungle.jpg") center center;
  background-size: cover;
}
.card {
  box-shadow: none;
  padding: 1rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
}
#secondColumn {
  margin-top: 15rem;
}
.title{
    margin-top:none;
}

/* a.router-link-exact-active{
    color:black;
} */
</style>
