<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
        <alphabet></alphabet>
    </div>
</template>

<script>
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
    }
}
</script>

<style lang="">
    
</style>
