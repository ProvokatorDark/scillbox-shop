<template>
  <div>
  <ul class="catalog__list">
    <ProductItem v-for="(product) in products" :key="product.id" :product="product"></ProductItem>
  </ul>

  </div>

</template>

<script>
import ProductItem from "./ProductItem";
export default {
name: "ProductList",
  props:["products"],
  components:{ProductItem}
}
</script>

<style scoped>

</style>
