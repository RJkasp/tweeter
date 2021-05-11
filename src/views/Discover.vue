<template>
    <div>
<header-component></header-component>
<discover-component></discover-component>
<footer-component></footer-component>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import DiscoverComponent from '@/components/DiscoverComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
    export default {
        name: 'discover',
        components:{
            HeaderComponent,
            FooterComponent,
            DiscoverComponent,
        }
    }
</script>

<style scoped>

</style>