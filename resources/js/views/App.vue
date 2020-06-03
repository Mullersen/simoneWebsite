<template>
<div>
    <h2>this is the app component</h2>
    <router-view></router-view>
    <NavigationBar/>
</div>
</template>

<script>
import NavigationBar from '../components/Navigation.vue'

export default {
    name: "app",
    components:{
        NavigationBar
    }

}
</script>

<style>

</style>
