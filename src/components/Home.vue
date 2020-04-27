<template>
  <div class="my-5">
    <h1>Trade of view your portfolio</h1>
    <h6>You may Save & Load your data</h6>
    <h6>Click on End to begin New Day</h6>
    <hr>
    <p>Your funds: {{ funds | currency }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds
    }
  }
}
</script>