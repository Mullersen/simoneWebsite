<template>
    <div class="container">
        <nav id="myNavbar" class="navbar is-primary" role="navigation" aria-label="main navigation">
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
                    <div v-if="authUser == null" class="navbar-end">
                        <a class="navbar-item" href="login">Login</a>
                        <a class="navbar-item" href="register">Register</a>
                        <router-link class="navbar-item" :to="{ name: 'subHome' }">Stress</router-link>
                    </div>
                    <div v-if="authUser == !null" class="navbar-end">
                        <p>logout</p>
                        <!-- <a class="navbar-item" href="logout"
                            onclick="event.preventDefault();
                            document.getElementById('logout-form').submit();">
                            {{ __('Logout') }}
                        </a>

                        <form id="logout-form" action="logout" method="POST" style="display: none;">
                            @csrf
                        </form> -->
                    </div>
            </div>
        </div>
    </nav>
        
    </div>
</template>

<script>
    export default {
        name: "Navigation",
        props: {
            authUser: String,
        }
    }
</script>
