<template>
    <div>
        <NavigationBar v-bind:user="this.user"></NavigationBar>
        <div>Hi there this is the subhome view for {{subjectName}}</div>
        <ArticleGrid v-bind:tagSelection="subject"/>
    </div>
</template>

<script>
import NavigationBar from '../components/Navigation.vue'
import ArticleGrid from '../components/ArticleGrid.vue'


export default {
    Name: "SubHome",
    props: {
        user: "",
        subject:{
            required: true,
            type: Array
        },
        subjectName:{
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
