<template>
    <div class="container">
        <div class="columns">
            <div class="column is-one-quarter" style="padding:2rem;">
                <aside class="menu">
                    <p class="menu-label">Admin arbejde</p>
                    <ul class="menu-list">
                        <li><a @click="articleToggle()">Opret Nye Artikler</a></li>
                        <li><a @click="imageToggle()">Rediger og Slet Artikler</a></li>
                    </ul>
                </aside>
            </div>
            <div class="column has-text-centered" >
                <p class="title has-text-primary" style="padding-top: 1rem;">Du er logget ind som admin</p>
                <div v-if="toggleArticles == true">
                    <AdminArticle/>
                </div>
                <div v-if="toggleImages == true">
                    <AdminArticles/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AdminArticle from "./AdminArticle.vue";
import AdminArticles from "./AdminArticles.vue";

export default {
 name: "Admin",
 components:{
     AdminArticle,
     AdminArticles,
 },
 props: {
        user: "",
    },
    data:function(){
        return{
            toggleImages: false,
            toggleArticles: false,
        }
    },
methods:{
        articleToggle: function(){
            if(this.toggleImages == true){
                this.toggleImages = false;
            }
            this.toggleArticles = true;
        },
        imageToggle: function(){
            if(this.toggleArticles == true){
                this.toggleArticles = false;
            }
            this.toggleImages = true;
        }
    }
}
</script>

<style>

</style>
