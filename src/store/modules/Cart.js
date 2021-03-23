
//в этом массиве (по типу таблицы в бд) будут хранится 
//id-материала - по нему можно найти другие характеристики материала ( к примеру материал - мешок керамзита 40 литров)
//id- расчета - по нему можно будет найти характеристики расчета (описание, где используется и тд)
//count - количество единиц материала

//после из массива - таблицы стоимости (пока будет единая таблица не зависящая от поставщика ) - можно будет найти стоимость и суммарную стоимость ремонта






export default {
    namespaced:true,
    mutations: {
        ADD_MATERIAL(state, params){


            //console.log(params);
            state.Cart.push(params);
 // eslint-disable-next-line no-console
 //console.log(state, params);
        }
        /*ADD_CART(state, getters, rootState, rootGetters) => id_formula =>{  
            
            let n = false;
            for (let i = 0; i < state.materials.length; i++) {
                if(state.materials[i].id_calc == params.id_calc && state.materials[i].id_prod == params.id_prod) {
                    Object.assign(state.materials[i], params);
                    n=true;
                }
            }
        if(!n){state.materials.push(params);}
        //state.materials= params;
      },*/
      //CREATE_ROOM(state, params) {        state.materials.push(params);    },      
    },
    state: {
        Cart:[],
    },
    actions:{
        ADD_MATERIAL ({ dispatch, commit, getters, rootGetters }, payload) {




            // eslint-disable-next-line no-console
            console.log(payload);
            // eslint-disable-next-line no-console
            //console.log(dispatch);
            // eslint-disable-next-line no-console
            //console.log(commit);
            // eslint-disable-next-line no-console
            //console.log(getters);
            // eslint-disable-next-line no-console
            //console.log(rootGetters);
            //getters.someGetter // -> 'foo/someGetter'
            //rootGetters.someGetter // -> 'someGetter'
    
            //dispatch('someOtherAction') // -> 'foo/someOtherAction'
            //dispatch('someOtherAction', null, { root: true }) // -> 'someOtherAction'
    
            commit('ADD_MATERIAL', payload) // -> 'foo/someMutation'
            //commit('someMutation', null, { root: true }) // -> 'someMutation'
          }
    },
    getters: {
      cart: state => id_prod => {  

        return state.Cart;  },
    






  }
}