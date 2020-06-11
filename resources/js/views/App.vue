<template>
  <div>
    <router-view :key="$route.path" v-bind:user="this.user"></router-view>
  </div>
</template>

<script>


export default {
    name: "app",
    props: {
        user: "",
    }

//   created () {
//     console.log(this.authUser)

//   },

}
</script>

<style>

</style>
