import stocks from '../../data/stocks'

export default {
  state: {
    stocks: []
  },
  mutations: {
    SET_STOCKS(state, stocks) {
      state.stocks = stocks
    },
    RND_STOCKS(state) {
      state.stocks.forEach((stock) => {
        stock.price = Math.round(stock.price * (1 + Math.random() - 0.5))
      })
    }
  },
  actions: {
    buyStock({commit}, order) {
      commit('BUY_STOCK', order)
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