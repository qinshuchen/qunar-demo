<template>
    <div class="list">
        <div class="area">
            <div class="title">您的位置</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">北京</div> 
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title">热门城市</div>
        </div>
        <div class="area">
            <div class="title">A</div>
        </div>
    </div>
</template>

<script>
export default {
    name:"CityList"
}
</script>

<style lang="stylus" scoped>
    .title
        line-height:.4rem
        background :#eee
        padding-left:.2rem
        color:#666
        font-size:.26rem
    .button-list
        overflow:hidden
        padding:.1rem
        .button-wrapper
            width:33.33%
            float:left
            .button
                text-align:center
                margin:.1rem
                border: .02rem solid #ccc

</style>
