<template>
  <div class="col-sm-6 col-md-4 my-3">
    <div class="card">
      <div class="card-header bg-success" :class="{'bg-danger': insufficientFunds}">
        {{ stock.name }} <small>(Price: {{stock.price}})</small>
      </div>
      <div class="card-body">
        <div class="float-left">
          <input type="number" class="form-control" placeholder="Quantity" v-model.number="quantity">
        </div>
        <div class="float-right">
          <button class="btn btn-success" @click="buyStock" :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)">
            {{ insufficientFunds ? 'Not enought funds' : 'Buy'}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  computed: {
    insufficientFunds() {
      return this.quantity * this.stock.price > this.$store.getters.funds
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.$store.dispatch('buyStock', order)
      console.log(order)
      this.quantity = 0
    }
  }
}
</script>