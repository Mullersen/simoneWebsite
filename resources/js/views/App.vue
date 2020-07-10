<template>
  <div>
    <transition name="fade" mode="out-in">
      <router-view :key="$route.path" v-bind:user="this.user" v-bind:csrf="this.csrf" />
    </transition>
    <footer class="footer" id="footer">
      <div class="container">
        <div class="content">
          <p class="content footerContent">
            <strong>© essou 2020</strong>
          </p>
          <p class="content footerContent">kontakt@essou.dk</p>
          <p class="content footerContent">Design og webudvikling: Mariann Haugland</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "app",
  props: {
    user: "",
    csrf: ""
  }
};
</script>

<style>
a {
  color: black;
}

a:hover {
  color: #d3bfa8;
}
.reveal {
  opacity: 0;
  -webkit-transform: translateY(60px);
  -moz-transform: translateY(60px);
  -ms-transform: translateY(60px);
  -o-transform: translateY(60px);
  transform: translateY(60px);
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -ms-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
}
.reveal.visible {
  opacity: 1;
  -webkit-transform: none;
  -moz-transform: none;
  -ms-transform: none;
  -o-transform: none;
  transform: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
#footer {
  background-color: #e0d7c8;
}
.footerContent {
  color: #36453b;
}
.citat {
  color: #955748;
  font-size: 2.5rem;
}
</style>
