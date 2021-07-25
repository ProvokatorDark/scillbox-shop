<template>
  <header class="header">
    <div class="header__wrapper container">
      <router-link :to="{name:'main'}">
      <span class="header__info">Каталог</span>
      </router-link>

      <router-link class="header__logo" :to="{name:'main'}">
        <img src="img/svg/logo-tech.svg" alt="Логотип интернет магазина Технозавррр" width="190" height="33">
      </router-link>

      <a class="header__tel" href="tel:8 800 600 90 09">
        8 800 600 90 09
      </a>
      <div v-if="isCartLoading">
        <div>
          <span>Идет загрузка корзины</span>
        </div>
      </div>
      <div v-else> <CartIndicator /></div>

    </div>
  </header>
</template>

<script>
import gotoPage from "@/helpers/gotoPage";
import CartIndicator from "@/components/CartIndicator";
export default {
  name: "BaseHeader",
  methods:{
    gotoPage,
  },
  components:{
    CartIndicator
  },
  computed:{
    isCartLoading() {
      return this.$store.state.isCartLoading
    }
  }
}
</script>

<style scoped>

</style>
