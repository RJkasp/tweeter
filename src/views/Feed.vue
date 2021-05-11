<template>
    <div>
<header-component></header-component>
<tweets-component></tweets-component>
<footer-component></footer-component>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import TweetsComponent from '@/components/TweetsComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
    export default {
        name: 'feed',
        components:{
            HeaderComponent,
            TweetsComponent,
            FooterComponent,
        }
    }
</script>

<style scoped>

</style>