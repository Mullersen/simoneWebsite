<template>
  <div>
    <router-view :key="$route.path" v-bind:user="this.user" v-bind:csrf="this.csrf"></router-view>
  </div>
</template>

<script>


export default {
    name: "app",
    props: {
        user: "",
        csrf: ""
    }

//   created () {
//     console.log(this.authUser)

//   },

}
</script>

<style>
a {
    color: black;
}

a:hover {
    color: #d3bfa8;
}

</style>
