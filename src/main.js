// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
  import App from './App'
import router from './router'
import 'reset-css'
import fastClick from 'fastclick'
import Home from './pages/home/Home'
import City from './pages/city/City'

Vue.config.productionTip = false
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
    template: '<App/>'
})
