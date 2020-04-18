<template>
    <div class="list">
        <productCard v-for="product in products" :key="product.name" :product="product"/>
    </div>
</template>
<script>
import productCard from './productCard'
export default {
    name: 'productList',
  components: {
    productCard
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('findAll')
  }
}
</script>
<style scoped>
    .list{
        display: flex;
    }
</style>