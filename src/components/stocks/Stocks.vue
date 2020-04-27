<template>
  <div class="row">
    <app-stock v-for="(stock, index) in stocks" :key="index" :stock="stock"></app-stock>
  </div>
</template>

<script>
import Stock from '@/components/stocks/Stock.vue'
export default {
  computed: {
    stocks() {
      return this.$store.getters.stocks
    }
  },
  components: {
    appStock: Stock,
  },
}
</script>
