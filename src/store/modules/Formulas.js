
//в этом массиве (по типу таблицы в бд) будут хранится 
//id-материала - по нему можно найти другие характеристики материала ( к примеру материал - мешок керамзита 40 литров)
//id- расчета - по нему можно будет найти характеристики расчета (описание, где используется и тд)
//count - количество единиц материала

//после из массива - таблицы стоимости (пока будет единая таблица не зависящая от поставщика ) - можно будет найти стоимость и суммарную стоимость ремонта







export default {
    namespaced:true,
    mutations: {
        initialData(state, params) {
            if(!Array.isArray(params)){console.log('необходимо передать массив');}
            state.Formulas= params;
        },
    },
    state: {
        Formulas:[],
    },
    getters: {
      formula: state => id_formula => {          return _.find(state.Formulas, id_formula);   },
  }
}