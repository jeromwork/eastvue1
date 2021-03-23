import axios from 'axios'


const getCR = function(state = {}, id = 1){

  for (let i = 0; i < state.roomSizes.length; i++) {
//
    if(state.roomSizes[i].id == id) {
      return i;
    }
  } }

export default {
  namespaced:true,
  mutations: {
    SET_PARAMETERS(state, params) {
      Object.assign(state.roomSizes[getCR(state, params.id)], params);
    },
    SET_CURRENT_DOCTOR_ID(state, val) {        state.currentDoctorId = val;
      console.log(val);
    },
    CREATE_ROOM(state, params) {        state.roomSizes.push(params);    },
    INITIAL_DATA(state, params) {

      //if(!Array.isArray(params)){console.log('необходимо передать массив');}
      state.doctors= params;

    },
  },
  actions:{

    async GET_DOCTORS_AJAX(ctx, el){
      axios
          .get('https://gorest.co.in/public-api/users', el)
          .then(response => {this.info = response

            console.log(response);
            this.commit('doctorSettings/INITIAL_DATA', response.data.data);
          });
    },




    async getDoctorsAjax2(){
      const res = await fetch('https://gorest.co.in/public-api/users');
      //console.log(res);
      const initialData = await res.json();


      this.commit('doctorSettings/initialData', initialData);


      //this.commit('Shops/initialData', initialData);
//ctx.commit('setPF', JSON.parse(prods));
    }
  },
  state: {
    roomSizes:[
      {id:0,
        size1: 0,
        size2: 0,
        height: 0}
    ],
    doctors:[
      {id:0, name:'doctor'}
    ],
    currentDoctorId:1,

  },

  getters: {
    size1: state => id =>{        return state.roomSizes[getCR(state, id)].size1;      },
    size2: state => id =>{        return state.roomSizes[getCR(state, id)].size2;      },
    size3: state => id =>{        return state.roomSizes[getCR(state, id)].size1;      },
    height: state => id =>{        return state.roomSizes[getCR(state, id)].height;      },
    getDoctors: state => {        return state.doctors;      },
    currentDoctorId: state => {        return state.doctors;      },
    getPerimeter: state => id =>{        return (state.roomSizes[getCR(state, id)].size1*2) + (state.roomSizes[getCR(state, id)].size2*2) ;      },
    getSpaceRoom: state => id => {     return state.roomSizes[getCR(state, id)].size1 * state.roomSizes[getCR(state, id)].size2;     }
  },








}
  