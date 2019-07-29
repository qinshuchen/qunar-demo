<template>
    <div class="header">
       城市选择
       <router-link to="/">
         <div class='iconfont header-back'></div>
       </router-link>
    </div>
</template>

<script>
export default {
    name:'CityHeader'
}
</script>

<style lang="stylus" scoped>
    .header
        position relative
        overflow hidden
        height :0.86rem;
        line-height: 0.86rem;
        text-align center
        background #00bcd4
        color:#fff
        background #00bcd4
        font-size .32rem
        .header-back
            position absolute
            width .64rem
            text-align center
            font-size .4rem
            color #fff
</style>
