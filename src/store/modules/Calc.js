
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

        async S_GetInitialData(ctx){
            const res = await fetch('http://v1.ru/index.php');
            const initialData = await res.json();
            

            this.commit('Shops/initialData', initialData.shops);
            this.commit('Materials/initialData', initialData.materials);
            this.commit('Products/initialData', initialData.products);
            this.commit('Formulas/initialData', initialData.formulas);
            

            //this.commit('Shops/initialData', initialData);
//ctx.commit('setPF', JSON.parse(prods));
        }
    },
    getters: {
      cart: state => id_prod => {  

        return state.Cart;  },
    






  }
}