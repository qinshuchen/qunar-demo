<template>
    <div class="icons">
        <div class="icon" 
        v-for="(item, index) in iconList" :key="index">
            <div class="icon-img">
                <img class="icon-img-content" :src="item.imgUrl">
            </div>
            <P class="icon-desc">{{item.desc}}</P>
        </div>
    </div>
</template>

<script>
export default {
    name:"HomeIcons",
    data() {
       return {
           iconList:[
            {
               id:"0001",
               imgUrl:"//s.qunarzz.com/homenode/images/touchheader/group.png",
               desc:'景点门票'
           },
           {
               id:"0002",
               imgUrl:"//s.qunarzz.com/homenode/images/touchheader/hotel.png",
               desc:'滑雪季'
           },
           {
               id:"0003",
               imgUrl:"//s.qunarzz.com/homenode/images/touchheader/hotel.png",
               desc:'泡温泉'
           },
           {
               id:"0004",
               imgUrl:"//s.qunarzz.com/homenode/images/touchheader/hotel.png",
               desc:'动植园'
           },
           {
               id:"0005",
               imgUrl:"//s.qunarzz.com/homenode/images/touchheader/hotel.png",
               desc:'景点门票'
           },
            {
               id:"0006",
               imgUrl:"//s.qunarzz.com/homenode/images/touchheader/hotel.png",
               desc:'景点门票'
           },
            {
               id:"0007",
               imgUrl:"//s.qunarzz.com/homenode/images/touchheader/hotel.png",
               desc:'景点门票'
           },
            {
               id:"0008",
               imgUrl:"",
               desc:'景点门票'
           },
            {
               id:"0009",
               imgUrl:"",
               desc:'一日游'
           }]
       }
   },
    computed: {
           pages(){
            const pages=[]
            this.iconList.forEach((item,index)=>{
                const page=Math.floor(index/8)
                if(!pages[page])
                {
                    pages[page]=[]
                }
                pages[page].push(item);
            })
            return pages
           }
    }
}
</script>

<style lang="stylus" scoped>
    .icons
        overflow:hidden
        height 0
        padding-bottom:50%
        .icon
            position :relative
            overflow:hidden
            float:left  
            width:25%
            height :0
            padding-bottom :25%
   
            .icon-img
                position:absolute
                top:0
                left:0
                right:0
                bottom:0.44rem
                box-sizing：border-box
                padding:0.1rem
                .icon-img-content
                    display:block
                    margin:0 auto 
                    height:100%
            .icon-desc
                position  :absolute
                left:0
                right :0
                bottom :0
                height 0.44rem
                line-height :0.44rem
                color:#333
                text-align:center
</style>
