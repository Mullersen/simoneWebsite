<template>
    <div>
        <NavigationBar v-bind:user="this.user" v-bind:csrf="this.csrf"></NavigationBar>
        <div>Hi there this is the subhome view for {{subject}}</div>
        <ArticleGrid v-bind:tag="subject"/>
    </div>
</template>

<script>
import NavigationBar from '../components/Navigation.vue'
import ArticleGrid from '../components/ArticleGrid.vue'


export default {
    Name: "SubHome",
    props: {
        user: "",
        csrf: "",
        subject:{
            required: true,
            type: String
        }
    },
    components:{
        NavigationBar,
        ArticleGrid
    },
}
</script>

<style>

</style>
