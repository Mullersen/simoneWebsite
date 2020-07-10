<template>
  <div class="container" >
    <nav id="myNavbar" class="navbar is-fixed-top is-transparent" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img
              id="logo"
              src="/images/logo.png"
              alt="essou.dk - skift stress ud med selvindsigt, balance og ro"
            />
          </a>
          <a
            role="button"
            class="navbar-burger has-text-white"
            aria-label="menu"
            aria-expanded="false"
            data-target="navMenu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navMenu" class="navbar-menu">
          <div class="navbar-end">
            <router-link
              class="navbar-item"
              v-for="subhome in subhomes"
              :key="subhome.name"
              :to="{ name: 'subHome', params:{ subject: subhome.name } }"
            >{{subhome.name}}</router-link>
            <a
              v-if="user.length > 1"
              class="navbar-item"
              href="logout"
              @click.prevent="submitLogoutForm"
            >LOG UD</a>
              <a v-if="user.length <1" class="navbar-item" href="/login">LOG IND</a>
              <a v-if="user.length <1" class="navbar-item" href="/register">TILMELD</a>
            <router-link class="navbar-item" :to="{ name: 'search' }">
              <img src="/images/search.png" alt="Søg på essou om stress eller balance" />
            </router-link>
            <a
              class="navbar-item"
              target="_blank"
              href="https://www.instagram.com/essou___official/"
            >
              <img src="/images/glyph-logo_May2016.png" alt="Instagram logo" />
            </a>
          </div>
          <form id="logout-form" action="/logout" method="POST" style="display: none;">
            <input type="hidden" name="_token" :value="csrf" />
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import subhomeDoc from "../subhome.js";
export default {
  name: "Navigation",
  props: {
    user: ""
  },
  data: function() {
    return {
      subhomes: subhomeDoc.pages,
      csrf: ""
    };
  },
  methods: {
    submitLogoutForm: function() {
      console.log("submitLogoutForm entered with" + this.csrf);
      document.getElementById("logout-form").submit();
    }
  },
  mounted() {
    this.csrf = document
      .querySelector('meta[name="csrf-token"]')
      .getAttribute("content");
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    console.log($navbarBurgers);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
    var navBar = document.getElementById("myNavbar");
    window.addEventListener("scroll", event => {
      event.preventDefault();
      if (window.scrollY >= 150) {
        navBar.classList.remove("is-transparent");
        navBar.classList.add('navbar-background');
      } else {
        navBar.classList.add("is-transparent");
        navBar.classList.remove('navbar-background');
      }
    });
  },
};
</script>

<style scoped>
#logo {
  max-height: 3.2rem;
}
.container {
  min-height: 6rem;
}
.navbar-background{
    background-color: #E0D7C8 !important;
    opacity:.93;
}
.navbar-item img{
    max-height: 1rem;
}


</style>
