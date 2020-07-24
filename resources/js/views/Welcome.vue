<template>
  <div>
    <div class="hero is-fullheight has-bg-img">
      <div class="hero-head">
        <NavigationBar v-bind:user="this.user"></NavigationBar>
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="myTitle"></h1>
          <div class="arrow bounce" style="margin-top:60vh;"></div>
        </div>
      </div>
    </div>
    <section class="section is-small">
      <div class="container">
        <p
          class="reveal title citat is-italic has-text-weight-bold has-text-centered"
        >Tag en dyb indånding.</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-8">
            <div class="columns is-centered">
              <div class="column reveal" id="masonContainer">
                <div class="card" v-for="article in articles.slice(0,2)" :key="article.id">
                  <router-link :to="{ name: 'article', params:{header:article.header} }">
                    <img :src=" '/'+article.header_image" alt="artikel" />
                    <h2 class="title">{{article.header}}</h2>
                    <p class="subtitle">{{formatDate(article.created_at)}}</p>
                    <p class="content" v-html="article.content.slice(0,180)  + '...'"></p>
                  </router-link>
                </div>
              </div>
              <div class="column reveal" id="secondColumn">
                <div class="card" v-for="article in articles.slice(2,3)" :key="article.id">
                  <router-link :to="{ name: 'article', params:{header:article.header, user:user} }">
                    <img :src=" '/'+article.header_image" alt="artikel" />
                    <h2 class="title">{{article.header}}</h2>
                    <p class="subtitle">{{formatDate(article.created_at)}}</p>
                    <p class="content" v-html="article.content.slice(0,180)  + '...'"></p>
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
          class="reveal title citat is-italic has-text-weight-bold has-text-centered"
        >Bliv bevidst om dine behov, vælg det til som giver værdi og vær tålmodig med processen.</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-8">
            <div class="columns is-centered">
              <div class="column reveal" id="secondColumn">
                <div class="card" v-for="article in articles.slice(3,4)" :key="article.id">
                  <router-link :to="{ name: 'article', params:{header:article.header, user:user} }">
                    <img :src=" '/'+article.header_image" alt="artikel" />
                    <h2 class="title">{{article.header}}</h2>
                    <p class="subtitle">{{formatDate(article.created_at)}}</p>
                    <p class="content" v-html="article.content.slice(0,180)  + '...'"></p>
                  </router-link>
                </div>
              </div>
              <div class="column reveal">
                <div class="card" v-for="article in articles.slice(4,6)" :key="article.id">
                  <router-link :to="{ name: 'article', params:{header:article.header, user:user} }">
                    <img :src=" '/'+article.header_image" alt="artikel" />
                    <h2 class="title">{{article.header}}</h2>
                    <p class="subtitle">{{formatDate(article.created_at)}}</p>
                    <p class="content" v-html="article.content.slice(0,180)  + '...'"></p>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <InstagramGrid class="reveal"/>
  </div>
</template>

<script>
const axios = require("axios");
import NavigationBar from "../components/Navigation.vue";
import InstagramGrid from "../components/InstagramGrid.vue";
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
    NavigationBar,
    InstagramGrid
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
          console.log(error.message);
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
  background: url("/images/sky1.jpg") center center;
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

.arrow
{
  position: relative;
  bottom: -2rem;
  left: 50%;
  margin-left:-20px;
  width: 40px;
  height: 40px;

  /**
   * Dark Arrow Down
   */
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4=);
  background-size: contain;
}
.bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
</style>
