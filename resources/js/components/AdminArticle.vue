<template>
  <div>
    <div class="box">
      <p class="subtitle">Artikel</p>
      <div class="field">
        <label class="label">Titel</label>
        <div class="control">
          <input class="input" v-model="NewArticleTitle" type="text" placeholder="Titel" />
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
             <editor api-key="kpj7rgac9iauixcrqhckw6w866lbc50kf0f7ei3xw1k9kseg" v-model="NewArticleDescription" output-format="html" :init="{plugins: ['wordcount lists autoresize'], content_css:'/css/app.css',  toolbar: ['undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent']}" />
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
          <button class="button is-centered" @click="uploadArticle">Offentliggør Artikel</button>
        </div>
      </div>
    </div>
     <div id="hidden" class="box">
        <p id="errorTitle" class="subtitle"></p>
        <p id="errorText" class="content"></p>
        <button @click="closeError()">Close</button>
    </div>
  </div>

</template>

<script>
const axios = require("axios");
import Editor from '@tinymce/tinymce-vue';

export default {
  name: "AdminArticle",
  components: {
     'editor': Editor
   },
  data: function() {
    return {
      NewArticleTitle: "",
      NewArticleDescription: "",
      NewArticleTags: "",
      selectedTags: [],
      firstFile: "",
      existingTags: [],
      articleTags: [],
    };
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
    uploadArticle: function() {
      let formData = new FormData();
      formData.append("header_image", this.firstFile);
      formData.append("title", this.NewArticleTitle);
      formData.append("description", this.NewArticleDescription);
      formData.append("tags", this.articleTags);
      axios
        .post("/article/uploadArticle", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
          }
        })
        .then(response => {
          console.log(response.data);
          this.firstFile = "";
          this.NewArticleTitle = "";
          this.NewArticleDescription = "";
          this.articleTags = [];
        })
        .catch(error => {
          console.log(error.message);
                    document.getElementById('hidden').classList.add('visible');
                    if(this.user == ""){
                        document.getElementById('errorTitle').innerHTML = 'You session has run out';
                        document.getElementById('errorText').innerHTML ='Try logging in again. Refresh to go to login page';
                    } else {
                        document.getElementById('errorTitle').innerHTML = 'There is something wrong with the article you are trying to upload';
                        document.getElementById('errorText').innerHTML ='Check if the image is a jpeg, png, jpg, at a maxium size of 7MB. Check and see if you added a title, and the according tags';
                    }
        });
    },
     closeError: function(){
            document.getElementById('hidden').classList.remove('visible');
        }
  },
  mounted() {
    this.getTags();
  }
};
</script>

<style scoped>
#hidden{
    display:none;
}
.visible{
    display:block !important;
    position: fixed;
    width: 50vw;
    height: 30vh;
    top: 25vh;
    left: 25vw;
    background-color: grey;
    z-index: 10000;
}
</style>
