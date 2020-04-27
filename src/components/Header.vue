<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link to="/" class="navbar-brand">Stock Trader</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav">
      <router-link tag="li" active-class="active" to="/portfolio" class="nav-item"><a class="nav-link">Portfolio</a></router-link>
      <router-link tag="li" active-class="active" to="/stocks" class="nav-item"><a class="nav-link">Stocks</a></router-link>
    </ul>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item"><a href="#" @click.prevent="endDay" class="nav-link">End day</a></li>
      <li class="nav-item dropdown" :class="{'show': isDropdownOpen}" @click="isDropdownOpen = !isDropdownOpen">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" :aria-expanded="isDropdownOpen">
          Save & Load
        </a>
        <div class="dropdown-menu" :class="{'show': isDropdownOpen}" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#" @click.prevent="saveData">Save Data</a>
          <a class="dropdown-item" href="#" @click.prevent="loadData">Load Data</a>
        </div>
      </li>
    </ul>
    <strong class="navbar-text">Funds: {{ funds | currency }}</strong>
  </div>
</nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'

export default {
  data() {
    return {
      isDropdownOpen: false
    }
  },
  computed: {
    ...mapGetters({
      fundsState: 'funds',
      stocks: 'stocks',
      stockPortfolio: 'stockPortfolio'
    }),
    funds() {
      return this.fundsState
    },
  },
  methods: {
    ...mapActions(['randomStocks', 'loadData']),
    endDay() {
      this.randomStocks()
    },
    saveData() {
      const data = {
        funds: this.fundsState,
        stockPortfolio: this.stockPortfolio,
        stocks: this.stocks
      }
      axios.put('https://testing-ad90a.firebaseio.com/data.json', data)
    }
  }
}
</script>