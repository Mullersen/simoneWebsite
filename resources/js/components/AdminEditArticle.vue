<template>
  <div>
    <div class="box">
      <p class="subtitle">Rediger Artikel</p>
      <div class="field">
        <label class="label">Titel</label>
        <div class="control">
          <input class="input" v-model="chosenArticle.header" type="text" placeholder="Titel" />
        </div>
      </div>
      <div class="field">
        <label class="label">Header billede - vil forblive det samme med mindre det ændres</label>
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
          <editor api-key="kpj7rgac9iauixcrqhckw6w866lbc50kf0f7ei3xw1k9kseg" v-model="chosenArticle.content" output-format="html" :init="{plugins: ['wordcount lists autoresize'], content_css:'/css/app.css',  toolbar: ['undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent']}" />
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
        <div><span v-for="(articleTag, index) in articleTags" :key="index" class="content">{{articleTag}} <a class="delete" @click.once="deleteTag(index)"></a></span></div>
      </div>
      <div v-else>
        <h2 class="subtitle">Der er endnu ingen tags tilføjet til denne artikel</h2>
      </div>
    </div>
    <div class="box">
      <div class="field">
        <div class="control">
          <button id="editButton" class="button is-centered" @click="editArticle">Opdater Artikel</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
const axios = require("axios");
import Editor from '@tinymce/tinymce-vue';

export default {
name : "AdminEditArticle",
components: {
    'editor': Editor
},
  props: {
      chosenArticle: {
          type: Object,
          required:true
      },
  },
  data: function(){
      return{
      NewArticleTags: "",
      selectedTags: [],
      firstFile: "",
      existingTags: [],
      articleTags: [],
      }
  },
  methods: {
      deleteTag: function(index){
          this.articleTags.splice(index, 1);
      },
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
    editArticle: function(){
        let formData = new FormData();

        if(this.firstFile == ""){
            formData.append("header_image", this.chosenArticle.header_image);
        } else {
            formData.append("header_image", this.firstFile);
        }

      formData.append("title", this.chosenArticle.header);
      formData.append("description", this.chosenArticle.content);
      formData.append("tags", this.articleTags);
      formData.append("id", this.chosenArticle.id);

        axios
        .post("/article/editArticle", formData, {
             headers: {
            "Content-Type": "multipart/form-data",
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
          },
        })
        .then(response => {
          console.log(response.data);
          this.chosenArticle.header = "";
          this.chosenArticle.content = "";
          this.articleTags = [];
          document.getElementById('editButton').disabled = true;
          this.$emit('promptGetArticles');
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
      var res = str.toLowerCase();
      var tagsArray = res.split(",");
      var finalTags = this.articleTags.concat(tagsArray);
      this.articleTags = finalTags;
      console.log(this.articleTags);
    },
    autofillTags: function(){
        axios.post("/article/getArticleTags", {
                    tagid: this.chosenArticle.id,
            })
                .then(response => {
                    console.log(response.data.tags);
                    response.data.tags.forEach(element => {
                    this.articleTags.push(element.name);
                });
                })
                .catch(error => {
                    console.log(error.message); // change to error message on screen
                    //this.loading = false;
                });
    },
  },
  mounted(){
      this.autofillTags();
      this.getTags();
  }
}
</script>

<style>

</style>
