<template>
    <ul class="list">
        <li class="item">A</li>
        <li class="item">B</li>
        <li class="item">C</li>
        <li class="item">D</li>
        <li class="item">E</li>
        <li class="item">F</li>
    </ul>
</template>

<script>
export default {
    name:"CityAlphabet"
}
</script>

<style lang="stylus" scoped>
    .list
        display flex
        flex-direction column
        justify-content center
        position absolute
        top 1.58rem
        right 0
        bottom 0
        width .4rem
        .item
            text-align:center
            line-height .4rem
            color #00bcd4
</style>
