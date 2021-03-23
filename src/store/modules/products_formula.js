
//в этом массиве (по типу таблицы в бд) будут хранится 
//id-материала - по нему можно найти другие характеристики материала ( к примеру материал - мешок керамзита 40 литров)
//id- расчета - по нему можно будет найти характеристики расчета (описание, где используется и тд)
//count - количество единиц материала

//после из массива - таблицы стоимости (пока будет единая таблица не зависящая от поставщика ) - можно будет найти стоимость и суммарную стоимость ремонта







export default {
    namespaced:true,
    actions: {


        async fetchProds(){
            const res = await fetch('http://v1.ru/index.php');
            const prods = await res.json();
            console.log(prods);

            //ctx.commit('setPF', prods);
//ctx.commit('setPF', JSON.parse(prods));
        }
        
    },
    mutations:{
        setPF(state, pf){
            state.pf = pf;
            
        }
    },
    state: {
        P_F:[{
            id_formula: 12,
            id_prod: 92},
            {
            id_formula: 12,
            id_prod: 93},
            {
            id_formula: 12,
            id_prod: 94},
        ],
    },
    getters: {
      productList: state => id_formula => {     return _.filter(state.P_F, id_formula);   },

      productListDetail: (state, getters, rootState, rootGetters) => id_formula =>{         

        //let formula = rootGetters['Formulas/formula'](id_formula);
        
        let prods = _.filter(state.P_F, id_formula);
        //console.log(prods);
        prods = rootGetters['Materials/products'](prods);
//console.log('formula', formula)
//console.log('prods', prods)
        return prods;  
    },
    pf: state =>{
        return state.pf;
    }
 
  }
}