<template>
    <div class="search">
        <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或者拼音">
         <div class="search-content"
         v-show="keyword">
             <ul>
                 <li v-for="(item, index) in list" :key="index">
                    {{item.citysName}}
                </li>
                <li class="search-item border-bottom" v-show="!list.length">
                    没有找到匹配数据
                </li>
             </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"CitySearch",
    props:{
        provArr:Array
    },
    data(){
        return{
            keyword:'',
            list:[],
            timer:null
        }
    },
    watch:{
        keyword(){
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.keyword)
            {
                this.list=[]
                return
            }
            this.timer=setTimeout(()=>{
                const result=[]
                for (let i in this.provArr) {
                   this.provArr[i].citys.forEach((c) => {
                      if(c.citysName.indexOf(this.keyword)>-1){
                        result.push(c)
                      }
                   });
                }
                this.list=result
                console.log(this.list)
            },100)
        }
    }
}
</script>

<style lang="stylus" scoped>
    .search
        background #00bcd4
        height:.72rem
        padding:0 .1rem
        .search-input
            box-sizing:border-box
            width :100%
            height:.62rem
            padding:0 .1rem
            line-height :.62rem
            text-align:center
            border-radius:.06rem
            color:#666
            border:1px solid transparent
        .search-content
            z-index 1
            overflow  hidden
            position absolute
            top 1.58rem
            left 0
            right 0
            bottom 0
            background #fff
</style>
