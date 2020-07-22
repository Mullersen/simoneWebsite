<template>
  <div>
    <section
      class="hero is-medium"
      id="heroBackgroundImage"
      v-bind:style="{ backgroundImage: 'url(/' + article.header_image +')'}"
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
        <div class="columns is-centered">
          <div class="column is-7">
                <div class="container" v-html="article.content"></div>
          </div>
        </div>
    </section>
    <section class="section is-small">
      <div class="container" v-if="this.comments.length >=1">
          <p class="subtitle">Kommentarer</p>
        <div class="columns">
          <div class="column is-half">
            <div v-for="(comment, index) in comments" :key="index">
              <p>{{comment.content}}</p>
              <h6 class="cName">{{comment.user.name}}</h6>
              <div v-if="comment.user.name === user">
                  <button class="button is-small" @click.once="deleteComment(comment.id)">
                      Slet
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section is-small" v-if="user.length > 1">
      <div class="box">
        <div class="field">
          <div class="control">
            <textarea v-model="comment" class="textarea" rows="3" placeholder="Din kommentar"></textarea>
          </div>
        </div>
        <div>
          <div class="control">
            <button class="button is-link" @click.once="sendComment">Kommenter</button>
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
      comment: "",
      comments: []
    };
  },
  methods: {
    formatDate: function(value) {
      if (value) {
        moment.locale("da");
        return moment(value).format("L");
      }
    },
    getComments: function() {
      axios
        .post("/comment/getcomments", {
          header: this.header
        })
        .then(response => {
          console.log(response.data);
          if(response.data.comments.length >= 1){
              this.comments.push(response.data.comments[0]);
          }

        })
        .catch(error => {
          console.log(error.message); // change to error message on screen
        });
    },
    sendComment: function() {
      axios
        .post("/comment/sendcomment", {
          content: this.comment,
          user: this.user,
          header: this.header
        })
        .then(response => {
          console.log(response.data);
          this.comment = "";
        })
        .catch(error => {
          console.log(error.message); // change to error message on screen
        });
    },
    deleteComment: function(comment_id){
    axios
        .post("/comment/deleteComment", {
          comment_id: comment_id,
          user_name: this.user
        })
        .then(response => {
          console.log(response.data);
            this.getComments();
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
    this.getComments();
  }
};
</script>

<style scoped>
.cName{
    border-bottom: 1px black solid;
}
#heroBackgroundImage{
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
