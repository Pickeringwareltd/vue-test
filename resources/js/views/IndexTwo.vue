<template>
    <div>
        <h1>I am the second index page</h1>
        <p>Message: {{ message }}</p>
    </div>
</template>

<script>
    export default {
        name: 'index-two',

        data() {
            return {
            }
        },

        mounted() {
        },
        methods: {
            goTo(name) {
                this.$router.push(name);
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
