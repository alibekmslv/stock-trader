import stocks from '../../data/stocks'

export default {
  state: {
    stocks: []
  },
  mutations: {
    SET_STOCKS(state, stocks) {
      state.stocks = stocks
    },
    RND_STOCKS() {

    }
  },
  actions: {
    buyStock() {

    },
    initStocks({commit}) {
      commit('SET_STOCKS', stocks)
    },
    randomStocks({commit}) {
      commit('RND_STOCKS')
    }
  },
  getters: {
    stocks(state) {
      return state.stocks
    }
  }
}