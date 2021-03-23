import doctorSettings from './modules/doctorSettings'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    modules: {
        doctorSettings
    },
    // state () {
    //     return {
    //         patients: []
    //     }
    // }
})

export default store;


//import Vue from 'vue'
//import Vuex from 'vuex'
// import lodash from 'vue-lodash'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
//
// Vue.use(VueAxios, axios)
//
// //const options = { name: '_' } // customize the way you want to call it
//
// Vue.use(lodash) // options is optional
//
//
// //import post from './modules/post'
// import Rooms from './modules/Rooms'
 //import roomSize from './modules/roomSize'
// import materials from './modules/Goods'
// import P_F from './modules/products_formula'
// import Materials from './modules/Materials'
// import Products from './modules/Products'
// import Cart from './modules/Cart'
// import Formulas from './modules/Formulas'
// import Shops from './modules/Shops'
// import Calc from './modules/Calc'
//
// Vue.use(Vuex)
// //
// export default new Vuex.Store({
//   modules: {
//     roomSize,
//     // Rooms,
//     // materials,
//     // P_F,
//     // Materials,
//     // Products,
//     // Cart,
//     // Formulas,
//     // Shops,
//     // Calc
//   }
// })
//
// window._ = require('lodash');