<template>
  <div>
    <li class="catalog__item">
      <router-link class="catalog__pic"  :to="{name:'product',params:{id:product.id}}">
        <img :src="product.image" :alt="product.title">
      </router-link>

      <h3 class="catalog__title">
        <a href="#">
          {{ product.title }}
        </a>
      </h3>

      <span class="catalog__price">
          {{ product.price | numberFormat}} ₽
      </span>
      <ul class="colors colors--black">
        <li class="colors__item" v-for="color in product.color">
          <label class="colors__label">
            <input class="colors__radio sr-only" type="radio" value="#73B6EA" >
            <span class="colors__value" :style="filterInputColor(color)" >
                  </span>
          </label>
        </li>
      </ul>
    </li>
  </div>
</template>

<script>

import gotoPage from "@/helpers/gotoPage";
import numberFormat from "@/helpers/numberFormat";
export default {
  name: "ProductItem",
  props: ['product'],
  data(){
    return{

    }
  },
  methods:{
    filterInputColor(item) {
      return ("background-color:" + item)
    },
    gotoPage

  },
  filters:{
    numberFormat
  }
}
</script>

<style scoped>

</style>
