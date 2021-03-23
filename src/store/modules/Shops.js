
//в этом массиве (по типу таблицы в бд) будут хранится 
//id-материала - по нему можно найти другие характеристики материала ( к примеру материал - мешок керамзита 40 литров)
//id- расчета - по нему можно будет найти характеристики расчета (описание, где используется и тд)
//count - количество единиц материала

//после из массива - таблицы стоимости (пока будет единая таблица не зависящая от поставщика ) - можно будет найти стоимость и суммарную стоимость ремонта







export default {
    namespaced:true,
    mutations: {
        /**/initialData(state, params) {
            //console.log(params);
            if(!Array.isArray(params)){console.log('необходимо передать массив');}
        state.Shops = params;
      },
      //CREATE_ROOM(state, params) {        state.materials.push(params);    },      
    },
    state: {
        Shops:[
          {
            id:1,
          title:'shop_test',
          dist:"1"}
        ],
        S_S:[
            {
            id_shop:1,
            title:'Леруа мерлен Климовск',
            latitude:55.36683470773892,
            longitude:37.539189999999984,
            district:'Московская область, ГО Подольсьск',
            adress:'Московская область, Климовск'
            },
        ],
    },
    getters: {
      shops: (state, getters, rootState, rootGetters) => ids_prod => {  
        //console.log(_.intersectionBy(state.P_P, ids_prod, 'id_shop'));
        return state.S_S;
    },

  }
}