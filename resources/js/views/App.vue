<template>
<div>
    <NavigationBar></NavigationBar>
    <router-view></router-view>
</div>
</template>

<script>
import NavigationBar from '../components/Navigation.vue'

export default {
    name: "app",
//     props: ['authUser'],

//   created () {
//     console.log(this.authUser)

//   },
    components:{
        NavigationBar
    }, 
}
</script>

<style>

</style>
