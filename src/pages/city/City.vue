<template>
    <div>
        <city-header></city-header>
        <city-search :provArr='provArr'></city-search>
        <city-list :provArr='provArr'></city-list>
        <alphabet></alphabet>
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import Alphabet from './components/Alphabet'
export default {
    name:"City",
    components:{
        CityHeader,
        CitySearch,
        CityList,
        Alphabet
    },
   data() {
       return {
           provArr:[]
       }
   },
    methods:{
      getCityInfo (){
        axios.get('/static/mock/city.json')
        .then(this.handle)
      },
      handle(res){
          res=res.data
          if(res){
              console.log(res.provinces);
            this.provArr=res.provinces
          }
      }
    },
    mounted (){
        this.getCityInfo();
    }
}
</script>

<style lang="">
    
</style>
