import Vue from "vue";
import Vuex from "vuex";

import products from "@/data/products";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cardProducts: [
      {productId: 1, amount: 2}
    ]
  },
  mutations: {
    addProductToCart(state, {productId, amount}) {
      const item = state.cardProducts.find(item => item.productId === productId)
      if (item) {
        item.amount += amount
      } else {
        state.cardProducts.push({
          productId,
          amount
        })
      }
    },
    updateCartProductAmount(state, {productId, amount}) {
      const item = state.cardProducts.find(item => item.productId === productId)
      if (item) {
        item.amount = amount;
      }
    },
    deleteCartProduct(state,productId){
      state.cardProducts=state.cardProducts.filter(item=>item.productId !== productId)
    }

  },
  getters: {
    cartDetailProducts(state) {
      return state.cardProducts.map(item => {
        return {
          ...item,
          product: products.find(p => p.id === item.productId)
        }
      })
    },
    cartTotalPrice(state, getters) {
      return getters.cartDetailProducts.reduce((acc, item) =>
        (item.product.price * item.amount) + acc, 0
      );
    },
    cartTotalItems(state){
      return state.cardProducts.map(item => item.amount).reduce(function(sum, current) {
        return sum + current;
      }, 0);
    }
  }
});
