<template>
    <div>
        <h1>I am the index page</h1>
        <p>Message: {{ message }}</p>
        <button @click="goTo('index-two')">Go to other page</button>
        <button @click="changeMessage">Change message</button>
    </div>
</template>

<script>
    export default {
        name: 'index',

        data() {
            return {
            }
        },

        methods: {
            goTo(name) {
                this.$router.push(name);
            },
            changeMessage() {
                this.$store.commit('store/setMessage', 'Ho');
            }
        },

        computed: {
          message() {
              return this.$store.state.store.store.message;
          }
        },

        watch: {

        }

    }

</script>
