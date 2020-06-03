<template>
    <div class="container">
        <router-link :to="{ name: 'home' }">Home</router-link> |
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
