
//в этом массиве (по типу таблицы в бд) будут хранится 
//id-материала - по нему можно найти другие характеристики материала ( к примеру материал - мешок керамзита 40 литров)
//id- расчета - по нему можно будет найти характеристики расчета (описание, где используется и тд)
//count - количество единиц материала

//после из массива - таблицы стоимости (пока будет единая таблица не зависящая от поставщика ) - можно будет найти стоимость и суммарную стоимость ремонта


export default {
    namespaced:true,
    mutations: {

        initialData(state, params) {
          console.log(params);
            //if(!Array.isArray(params)){console.log('необходимо передать массив');}
        state.Products= params;
        
      },
    CHOISMATERIAL(state, material){ 
    //if(state.isEmpty){return []}
           
    let formula = material.formula_id;
    let prod = material.id_prod;
 //console.log(state.Products[formula]);

            if(state.Products[formula]!==undefined){


              for (var key in state.Products[formula]) {
                state.Products[formula][key].selected = false;
                if(state.Products[formula][key].id_prod === prod){
                  state.Products[formula][key].selected = true;
                  }
              } 
            }
        
        },
        
    },
    state: {
        
      Products:
          {1:[
            {
          formula_id:1,
          id_prod:1,
          id_shop:1,
          title:"product1",
          price:100,
          volume:40
        }]}

    },
    actions:{

      async ADD_Products(ctx, el){
          axios
      .post('http://v1.ru/index.php', el)
      .then(response => {this.info = response
      
      console.log(this.info);
      
      });
          //const initialData = await res.json();
          
          //console.log(res);
          //this.commit('Shops/initialData', initialData.shops);
          //this.commit('Materials/initialData', initialData.products);
          //this.commit('Formulas/initialData', initialData.formulas);
          //this.commit('Shops/initialData', initialData);
//ctx.commit('setPF', JSON.parse(prods));
      }
  },
    getters: {
      getProductsList: (state, getters, rootState, rootGetters) => (id_material=1)=> { 
//if(state.isEmpty){return []}
console.log(state.Products);
/*
if(state.Materials.length > 0){

    for (let i = 0; i < state.Materials.length; i++) {
      for (let j = 0; j < state.Materials[i].length; j++) {
        //const element = array[j];
      console.log( state.Materials[i][j] );
      if(state.Materials[i][j]['id_material'] && state.Materials[i][j]['id_material'] == id_formula)
        }
    }
}
*/

        if(state.Products[id_material]===undefined){
            console.log('Нет такой формулы'); 
            return [];
        }
        
    return state.Products[id_material];   
    },
    selectedProduct: (state, getters, rootState, rootGetters) => (id_material=1)=> { 
      //if(state.isEmpty){return []}
              //
      
              if(state.Materials[id_material]===undefined){
                  console.log('Нет такой формулы'); 
                  return [];
              }
              //console.log(state.Materials[id_formula]);
              for (var key in state.Materials[id_material]) {
                if(state.Materials[id_material][key].selected){return state.Materials[id_material][key];}
              }
          return false;   
          },

  }
}