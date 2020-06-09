<template>
    <div>
        <NavigationBar></NavigationBar>
        <div>Hi there this is the subhome view!</div>
        <ArticleGrid/>
    </div>
</template>

<script>
import NavigationBar from '../components/Navigation.vue'
import ArticleGrid from '../components/ArticleGrid.vue'

export default {
    Name: "SubHome",
    components:{
        NavigationBar,
        ArticleGrid
    },
}
</script>

<style>

</style>
