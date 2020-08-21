<template>
  <div>
    <section
      class="hero is-medium heroBackgroundImage"
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
          <div class="container has-text-centered">
            <span class="tag is-medium is-white" v-for="tag in tags" :key="tag.id">{{tag.name}}</span>
          </div>
          <div class="container" v-html="article.content" style="margin-top: 3rem;"></div>
        </div>
      </div>
    </section>
    <section class="section is-small">
      <div class="container has-text-centered" v-if="this.comments.length >=1">
        <p class="subtitle" style="margin-bottom:3.5rem;">Kommentarer</p>
      </div>
      <div class="container">
        <div class="columns">
          <div class="column is-half">
            <div v-for="(comment, index) in comments" :key="index">
              <span>
                <h6 style="display:inline;">{{comment.user.name}}</h6>
                <button
                  v-if="comment.user.name === user"
                  class="button is-small"
                  @click.once="deleteComment(comment.id)"
                  style="float:right;"
                >Slet</button>
              </span>
              <p class="content">{{comment.content}}</p>
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
            <button id="commentButton" class="button subtitle" @click="sendComment">Kommenter</button>
          </div>
        </div>
      </div>
    </section>
    <section v-else>
      <div class="box">
        <p class="subtitle">Log ind for at kommentere</p>
      </div>
    </section>
    <div id="hidden" class="box">
      <p id="errorTitle" class="subtitle"></p>
      <p id="errorText" class="content"></p>
      <button @click="closeError()">Close</button>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
import NavigationBar from "../components/Navigation.vue";
import moment from "moment";

export default {
  name: "myarticle",
  components: {
    NavigationBar,
  },
  props: {
    header: {
      required: true,
      type: String,
    },
    user: {
      required: true,
      type: String,
    },
  },
  data: function () {
    return {
      article: [],
      comment: "",
      comments: [],
      tags: [],
    };
  },
  methods: {
    closeError: function () {
      document.getElementById("hidden").classList.remove("visible");
    },
    formatDate: function (value) {
      if (value) {
        moment.locale("da");
        return moment(value).format("L");
      }
    },
    getComments: function () {
      axios
        .post("/comment/getcomments", {
          header: this.header,
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.comments.length >= 1) {
            response.data.comments.forEach((element) => {
              this.comments.push(element);
            });
          }
        })
        .catch((error) => {
          console.log(error.message); // change to error message on screen
        });
    },
    sendComment: function () {
      //diable comment button
      document.getElementById("commentButton").disabled = true;

      //send the comment, and retrieve it for insertion
      axios
        .post("/comment/sendcomment", {
          content: this.comment,
          user: this.user,
          header: this.header,
        })
        .then((response) => {
          console.log(response.data.comment[0]);
          this.comment = "";
          this.comments.push(response.data.comment[0]);
        })
        .catch((error) => {
          console.log(error.message);
          document.getElementById("hidden").classList.add("visible");
          if (this.user == "") {
            document.getElementById("errorTitle").innerHTML =
              "Du er blevet logget ud";
            document.getElementById("errorText").innerHTML =
              "Prøv at logge ind igen.";
          } else {
            document.getElementById("errorTitle").innerHTML =
              "Der gik noget galt";
            document.getElementById("errorText").innerHTML =
              "Prøv at logge ind igen for at sende en kommentar";
          }
        });

      //enable button again
      setTimeout(function () {
        document.getElementById("commentButton").disabled = false;
      }, 3000);
    },
    deleteComment: function (comment_id) {
      axios
        .post("/comment/deleteComment", {
          comment_id: comment_id,
          user_name: this.user,
        })
        .then((response) => {
          console.log(response.data);
          this.getComments();
        })
        .catch((error) => {
          console.log(error.message); // change to error message on screen
        });
    },
    getArticle: function () {
      console.log(this.header);
      axios
        .post("/articles/getarticle", {
          header: this.header,
        })
        .then((response) => {
          console.log(response.data.tags);
          this.article = response.data.article;
          this.tags = response.data.tags;
        })
        .catch((error) => {
          console.log(error.message); // change to error message on screen
        });
    },
  },
  beforeMount() {
    this.getArticle();
    this.getComments();
  },
};
</script>

<style scoped>
.content {
  margin-bottom: 1.5rem;
}

.button {
  border: none !important;
}
#hidden {
  display: none;
}
</style>
