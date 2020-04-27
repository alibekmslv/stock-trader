<template>
  <div class="row">
    <app-stock v-for="(stock, index) in stocks" :key="index" :stock="stock"></app-stock>
  </div>
</template>

<script>
import Stock from '@/components/stocks/Stock.vue'
export default {
  data() {
    return {
      stocks: [
        { id: 1, name: 'BMW', price: 100 },
        { id: 2, name: 'Google', price: 200 },
        { id: 3, name: 'Apple', price: 250 },
        { id: 4, name: 'Twitter', price: 8 },
      ],
    }
  },
  components: {
    appStock: Stock,
  },
}
</script>
