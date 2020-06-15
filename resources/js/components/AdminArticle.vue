<template>
  <div>
    <h2>This is the article component</h2>
    <div class="box">
      <p class="subtitle">Ny Artikel</p>
      <div class="field">
        <label class="label">Titel</label>
        <div class="control">
          <input class="input" v-model="NewArticleTitle" type="text" placeholder="Titel" />
        </div>
      </div>
      <div class="field">
        <label class="label">Brødtekst</label>
        <div class="control">
          <input
            class="input"
            v-model="NewArticleDescription"
            type="text"
            placeholder="Description"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Billede</label>
        <div class="control">
          <input class="input" id="file" type="file" ref="file" v-on:change="handleFileUpload()" />
        </div>
      </div>
      <div class="field">
        <label class="label">Tags</label>
        <div class="control">
          <input
            class="input"
            v-model="NewArticleTags"
            type="text"
            placeholder="Tags, separated by a space"
          />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button" @click="uploadArticle">Offentliggør</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "AdminArticle",
  data: function() {
    return {
      NewArticleTitle: "",
      NewArticleDescription: "",
      NewArticleTags: "",
      file: ""
    };
  },
  methods: {
    handleFileUpload: function() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
    uploadArticle: function() {
      let formData = new FormData();
      formData.append("image", this.file);
      formData.append("title", this.NewArticleTitle);
      formData.append("description", this.NewArticleDescription);
      formData.append("tags", this.NewArticleTags);
      axios
        .post("/article/uploadArticle", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
          }
        })
        .then(response => {
          console.log(response.data);
          //this.$store.dispatch("requestAddons");
        })
        .catch(error => {
          console.log(error.message); // change to error message on screen
        });
    }
  }
};
</script>

<style>
</style>