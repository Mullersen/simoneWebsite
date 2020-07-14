<template>
  <div>
    <div class="box">
      <p class="subtitle">Rediger Artikel</p>
      <div class="field">
        <label class="label">Titel</label>
        <div class="control">
          <input class="input" v-model="this.chosenArticle.header" type="text" placeholder="Titel" />
        </div>
      </div>
      <div class="field">
        <label class="label">Header billede</label>
        <div class="control">
          <input
            class="input"
            id="file"
            type="file"
            ref="firstFile"
            v-on:change="handleFileUpload()"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Brødtekst</label>
        <div class="control">
          <textarea
            class="textarea"
            v-model="this.chosenArticle.content"
            type="text"
            placeholder="Artiklens Brødtekst"
            rows="15"
          ></textarea>
        </div>
      </div>
    </div>
    <div class="box">
      <p class="subtitle">Artikel Tags</p>
      <label class="label">Tilføj eksisterende tag til Artikel</label>
      <div class="field is-grouped">
        <div class="control is-expanded">
          <div class="select">
            <select v-model="selectedTags">
              <option v-for="tag in existingTags" :key="tag.id" :value="tag.name">{{tag.name}}</option>
            </select>
          </div>
        </div>
        <div class="control">
          <button class="button" @click="addExistingTag()">Tilføj</button>
        </div>
      </div>
      <label class="label">Tilføj nyt/nye tag til Artikel</label>
      <div class="field is-grouped">
        <div class="control is-expanded">
          <input
            class="input"
            v-model.trim="NewArticleTags"
            type="text"
            placeholder="Tags separeret med et komma"
          />
        </div>
        <div class="control">
          <button class="button" @click="addNewTag()">Tilføj</button>
        </div>
      </div>
      <div v-if="articleTags.length >= 1" class="field">
        <h2 class="subtitle">Tilføjede tags til denne artikel</h2>
        <p v-for="(articleTag, index) in articleTags" :key="index" class="content">{{articleTag}}</p>
      </div>
      <div v-else>
        <h2 class="subtitle">Der er endnu ingen tags tilføjet til denne artikel</h2>
      </div>
    </div>
    <div class="box">
      <div class="field">
        <div class="control">
          <button class="button is-centered" @click="uploadArticle">Offentliggør Artikel</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
const axios = require("axios");
export default {
name : "AdminEditArticle",
  props: {
      chosenArticle: {
          type: Object,
          required:true
      },
  },
  data: function(){
      return{
        NewArticleTitle: "",
      NewArticleDescription: "",
      NewArticleTags: "",
      selectedTags: [],
      firstFile: "",
      existingTags: [],
      articleTags: [],
      }
  },
  methods: {
      handleFileUpload: function() {
      this.firstFile = this.$refs.firstFile.files[0];
      console.log(this.firstFile);
    },
    getTags: function() {
      axios
        .get("/article/getTags")
        .then(response => {
          console.log(response.data.tags);
          this.existingTags = response.data.tags;
        })
        .catch(error => {
          console.log(error.message);
        });
    },
    addExistingTag: function() {
      this.articleTags.push(this.selectedTags);
      console.log(this.articleTags);
    },
    addNewTag: function() {
      var str = this.NewArticleTags.replace(/\s+/g, "");
      var tagsArray = str.split(",");
      var finalTags = this.articleTags.concat(tagsArray);
      this.articleTags = finalTags;
      console.log(this.articleTags);
    },
    autofillTags: function(){
        console.log(this.chosenArticle.id);
        axios
        .post("/article/getAutofillTags", {
            id: this.chosenArticle.id
        })
        .then(response => {
          console.log(response.data.tags);
          this.articleTags = response.data.tags;
        })
        .catch(error => {
          console.log(error.message);
        });
    },
  },
  mounted(){
      this.autofillTags();
  }
}
</script>

<style>

</style>
