import axios from 'axios'

export const loadData = ({commit}) => {
  axios.get('https://testing-ad90a.firebaseio.com/data.json').then(response => {
    if(response.data) {
      const {funds, stockPortfolio, stocks} = response.data
      const portfolio = {
        stockPortfolio,
        funds
      }
      commit('SET_STOCKS', stocks)
      commit('SET_PORTFOLIO', portfolio)
    }
  })
}