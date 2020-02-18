<template>
    <div>
        <component :is="layout">
            <router-view></router-view>
        </component>
    </div>
</template>

<script>
    const default_layout = "default";

    export default {
        data() {
            return {}
        },

        computed: {
            layout() {
                return (this.$route.meta.layout || default_layout) + "-layout";
            }
        },

        mounted () {},

        methods: {}
    }

</script>
