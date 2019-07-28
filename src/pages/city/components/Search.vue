<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="输入城市名或者拼音">
    </div>
</template>

<script>
export default {
    name:"CitySearch"
}
</script>

<style lang="stylus" scoped>
    .search
        background #00bcd4
        height:.72rem
        padding:0 .1rem
        .search-input
            width :100%
            height:.62rem
            line-height :.62rem
            border-radius:.06rem
            color:#666
            border:1px solid transparent
</style>
