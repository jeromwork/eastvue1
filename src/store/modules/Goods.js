
//в этом массиве (по типу таблицы в бд) будут хранится 
//id-материала - по нему можно найти другие характеристики материала ( к примеру материал - мешок керамзита 40 литров)
//id- расчета - по нему можно будет найти характеристики расчета (описание, где используется и тд)
//count - количество единиц материала

//после из массива - таблицы стоимости (пока будет единая таблица не зависящая от поставщика ) - можно будет найти стоимость и суммарную стоимость ремонта







export default {
    namespaced:true,
    mutations: {
        SET_PARAMETERS(state, params) {
            
            let n = false;
            for (let i = 0; i < state.materials.length; i++) {
                if(state.materials[i].id_calc == params.id_calc && state.materials[i].id_prod == params.id_prod) {
                    Object.assign(state.materials[i], params);
                    n=true;
                }
            }
        if(!n){state.materials.push(params);}
        //state.materials= params;
      },
      //CREATE_ROOM(state, params) {        state.materials.push(params);    },      
    },
    state: {
        materials:[{
            id_calc: 12,
            id_prod: 92,
            count: 1}],
    },
    getters: {
      getSize1: state => M => {       
        for (let i = 0; i < state.materials.length; i++) {
            //console.log(state.materials[i].count);
            if(state.materials[i].id_calc == M.id_calc && state.materials[i].id_prod == M.id_prod) {
                return state.materials[i].count;
                
            }
        }  
        
              },
      //getSize2: state => id =>{        return state.roomSizes[getCR(state, id)].size2;      },
      //getHeight: state => id =>{        return state.roomSizes[getCR(state, id)].height;      },
      //getSpaceRoom: state => id => {       return state.roomSizes[getCR(state, id)].size1 * state.roomSizes[getCR(state, id)].size2;     }
    },








  }
  