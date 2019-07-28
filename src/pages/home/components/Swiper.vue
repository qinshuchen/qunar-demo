<template>
<div class="wrapper">
    <swiper :options="swiperOption">
        <swiper-slide v-for="(item) in swiperList" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl" alt="">
        </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
    name:"HomeSwiper",
    data () {
        return {
            swiperOption:{
                pagination:'.swiper-pagination',
                loop:true
            },
            swiperList:[
            {
                id:'0001',
                imgUrl:'//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/b72df47942fb28fcd7bf481f01e785f5.jpg'
            },
            {
                id:'0002',
                imgUrl:'//h-des-activity-fecp.qunarzz.com/h_des_activity_fe_h_des_activity_fe/973dc1ae0da73a58410186df08ff25cb.jpg'
            }]
        }
    },
}
</script>

<style lang='stylus' scoped>
.wrapper
    width:100%
    height:0
    overflow:hidden
    padding-bottom:31.25%
    background:#eee
    .swiper-img
        width:100%
</style>
