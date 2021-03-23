export default {
    //namespaced: true,
    actions: {
      async fetchRooms({ commit, /*getters,*/ dispatch }, limit = 3) {
        const res = await fetch(
          'https://jsonplaceholder.typicode.com/posts?_limit=' + limit
        )
        const Rooms = await res.json()
  
        dispatch('sayHello')
  
        commit('updateRooms', Rooms)
      },
      sayHello() {}
    },
    mutations: {
      updateRooms(state, Rooms) {
        state.Rooms = Rooms
      },
      createRoom(state, newRoom) {
        state.Rooms.push(newRoom);
      }
    },
    state: {
      Rooms: [{id:1,
      title:'Гостинная'}]
    },
    getters: {
      getRooms(state) {
        return state.Rooms//.filter(p => { return p.title })
      },
      allRooms(state) {
        return state.Rooms
      },
      roomsCount(state, getters) {
        return getters.getRooms.length
      }
    }
  }
  