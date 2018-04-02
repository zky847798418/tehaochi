
const app = {
  state: {
    title: 'TeHaoChi',
    carList: [],
    carNum: 0,
    login: false,
    address: []
  },
  mutations: {
    LOGIN_TOKEN: (state, look) => {
      state.login = look
    },
    /**
     * 菜
     */
    TOGGLE_TITLE: (state, look) => {
      state.title = look
    },
    ADD_CARLIST: (state, look) => {
      state.carList = look
      localStorage.carList = JSON.stringify(look)
    },
    ADD_CARNUM: (state, val) => {
      state.carNum = val
      localStorage.carNum = val
    },
    ADD_ADDRESS: (state, look) => {
      state.address = look
      localStorage.address = JSON.stringify(look)
    }
  },
  actions: {
    addCarList: ({commit}) => {
      commit('ADD_CARLIST')
    }
  }
}

export default app
