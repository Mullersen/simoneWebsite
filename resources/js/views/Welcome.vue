<template>
<div>
    <div class="hero is-fullheight has-bg-img">
        <div class="hero-head">
            <NavigationBar v-bind:user="this.user" v-bind:csrf="this.csrf"></NavigationBar>
        </div>
        <div class="hero-body">
            <div class="container has-text-centered">
                <h2 class="myTitle">Velkommen til Essou</h2>
            </div>
        </div>
    </div>
    <ArticleGrid/>
</div>
</template>

<script>
const axios = require('axios');
import NavigationBar from '../components/Navigation.vue'
import ArticleGrid from '../components/ArticleGrid.vue'

export default {
    name:"welcome",
    props: {
        user: "",
        csrf: ""
    },
    components:{
        NavigationBar,
        ArticleGrid
    },

}
</script>

<style>
.myTitle{
    font-size:4rem !important;
}
.has-bg-img
 {
    background: url('/images/jungle.jpg')center center; background-size:cover;
    }
</style>
