<template>
  <div class="hero is-large has-bg-img">
      <div class="hero-head">
        <NavigationBar></NavigationBar>
      </div>
      <div class="hero-body">
          <div class="container has-text-centered">
            <h2 class="myTitle">Velkommen til Essou</h2>
          </div>
      </div>
 </div>
</template>

<script>
import NavigationBar from '../components/Navigation.vue'
export default {
    name:"welcome",
    components:{
        NavigationBar
    },
    methods:{

    }

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
