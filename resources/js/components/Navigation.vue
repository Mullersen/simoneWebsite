<template>
    <div id="myNavBar" class="container">
        <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="/images/bird.png" alt="Logo">
                </a>
                <a role="button" class="navbar-burger has-text-white" aria-label="menu" aria-expanded="false" data-target="navMenu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navMenu" class="navbar-menu">
                    <div class="navbar-end">
                        <router-link class="navbar-item" :to="{ name: 'subHome', params:{subject:'Stress'} }">Stress</router-link>
                        <router-link class="navbar-item" :to="{ name: 'subHome', params:{subject:'Balance'}}">Balance</router-link>
                        <router-link class="navbar-item" :to="{ name: 'subHome', params:{subject:'Selvudvikling'}}">Selvudvikling</router-link>
                        <a v-if="user.length > 1" class="navbar-item" href="logout" @click.prevent="submitLogoutForm">Log ud</a>
                        <div v-else class="navbar-item">
                            <a class="navbar-item" href="/login" >Log ind</a>
                            <a class="navbar-item" href="/register">Tilmeld</a>
                        </div>
                        <a class="navbar-item" target="_blank" href="https://www.instagram.com/simoneloekke/?hl=da"><img src="/images/glyph-logo_May2016.png" alt="Instagram logo"></a>
                        <!-- <router-link class="navbar-item" :to="{ name: 'subHome' }">Om</router-link> -->
                    </div>
                    <form id="logout-form" action="/logout" method="POST" style="display: none;">
                        <input type="hidden" name="_token" :value="csrf">
                    </form>
            </div>
        </div>
    </nav>

    </div>
</template>

<script>
    export default {
        name: "Navigation",
        props: {
            user: "",
            csrf:"",
        },
        data: function(){
            return{
            }
        },
        methods: {
            submitLogoutForm: function(){
                console.log("submitLogoutForm entered with" + this.csrf);
                document.getElementById('logout-form').submit();
            }
        },
        mounted(){
        console.log("navigation component mounted");
        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
        console.log($navbarBurgers);

            // Check if there are any navbar burgers
            if ($navbarBurgers.length > 0) {

                // Add a click event on each of them
                $navbarBurgers.forEach( el => {
                el.addEventListener('click', () => {

                    // Get the target from the "data-target" attribute
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);

                    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                    el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');

                    });
                });
            }
        }
    }
</script>

<style>

</style>
