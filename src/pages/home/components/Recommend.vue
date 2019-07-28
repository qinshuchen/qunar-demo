<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul v-for="(item, index) in reList" :key="index"> 
            <li class="item">
                <img class="item-img" :src="item.imgUrl" alt="">
                <div class='item-info'>
                    <p class='item-title'>{{item.title}}</p>
                    <p class='item-desc'>{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'HomeRecommend',
    data() {
        return {
            reList:[
            {
                id:"0001",
                imgUrl:"https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg",
                title:"[北京]【中高考生专享】北京杜莎夫人...",
                desc:"中轴线上的巨星之旅"
            }
            ,{
                 id:"0001",
                imgUrl:"https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg",
                title:"[北京]【中高考生专享】北京杜莎夫人...",
                desc:"中轴线上的巨星之旅"
            }
            ,{
                 id:"0001",
                imgUrl:"https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg",
                title:"[北京]【中高考生专享】北京杜莎夫人...",
                desc:"中轴线上的巨星之旅"
            }]
        }
    },
}
</script>

<style lang="stylus" scoped>
    .recommend-title
        line-height :.8rem
        background :#eee
        text-indent:.2rem
    .item 
        display:flex
        height 1.9rem
        border-bottom :1px solid #eee
    .item-img
        width:1.7rem
        height:1.7rem
        padding:.1rem
    .item-info
        flex:1
        padding 0.1rem
    .item-title
        line-height:.54rem
        font-size:.32rem
    .item-desc
         line-height:.4rem
         color :#ccc
    .item-button
        margin-top:.2rem
        background :#ff9300
        padding:0 .2rem
        border-radius:.1rem
        color :#fff
        border: 1px solid transparent;  
        outline: none; 
</style>
