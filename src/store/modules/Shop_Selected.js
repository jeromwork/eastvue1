
//в этом массиве (по типу таблицы в бд) будут хранится 
//id-Магазина Подходящий магазин для выбранного адреса пользователя
//latitude- Широта местоположения магазина
//longitude- Долгота местоположения магазина
//Данная таблица будет хранится в вехрнем модуле. Выбираться магазины будут по местоположению пользователя либо там где пользователь укажет

//после из массива - таблицы стоимости (пока будет единая таблица не зависящая от поставщика ) - можно будет найти стоимость и суммарную стоимость ремонта







export default {
    namespaced:true,
    mutations: {
        /*SET_PARAMETERS(state, params) {
            
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
        Shops:[
            {
            id_shop:1,
            title:'Леруа мерлен Климовск',
            latitude:55.36683470773892,
            longitude:37.539189999999984,
            district:'Московская область, ГО Подольсьск',
            adress:'Московская область, Климовск'
            },
            {
            id_shop:2,
            title:'Леруа мерлен Воронеж',
            latitude:51.786510501931716,
            longitude:39.20291743286132,
            district:'г. Воронеж',
            adress:'г. Воронеж'
            },
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
      shops(state, getters, rootState, rootGetters){  
        //console.log(_.intersectionBy(state.P_P, ids_prod, 'id_shop'));
        return state.S_S;   },

  }
}