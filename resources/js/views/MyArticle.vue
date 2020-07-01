<template>
  <div>
    <section
      class="hero is-medium"
      v-bind:style="{ backgroundImage: 'url(/' + article.image +')' }"
    >
      <div class="hero-head">
        <NavigationBar v-bind:user="this.user"></NavigationBar>
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">{{article.header}}</h1>
          <h2 class="subtitle">{{formatDate(article.created_at)}}</h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">{{article.content}}</div>
    </section>
    <section class="section is-small" v-if="user.length > 1">
      <div class="box">
        <div class="field">
          <label class="label">Kommenter</label>
          <div class="control">
            <textarea v-model="comment" class="textarea" rows="3" placeholder="Din kommentar"></textarea>
          </div>
          <div class="control">
            <button class="button is-link" @click="sendComment">Indsend</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const axios = require("axios");
import NavigationBar from "../components/Navigation.vue";
import moment from "moment";

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
      required: true,
      type: String
    }
  },
  data: function() {
    return {
      article: [],
      comment: ""
    }
  },
  methods: {
    formatDate: function(value) {
      if (value) {
        moment.locale("da");
        return moment(value).format("L");
      }
    },
    getComment: function(){
        axios.post('/comment/getcomments', {
            header: this.header
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error.message); // change to error message on screen
        });
    },
    sendComment: function(){
        axios.post('/comment/sendcomment', {
            content: this.comment,
            user: this.user,
            header: this.header
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error.message); // change to error message on screen
        });
    },
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
