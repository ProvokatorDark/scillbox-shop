<template>
  <main class="content container">
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <router-link class="breadcrumbs__link" :to="{name:'main'}">
            Каталог
          </router-link>
        </li>
        <li class="breadcrumbs__item">
          <router-link class="breadcrumbs__link" :to="{name:'cart'}">
            Корзина
          </router-link>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link">
            Оформление заказа
          </a>
        </li>
      </ul>

      <h1 class="content__title">
        Корзина
      </h1>
      <span class="content__info">
        3 товара
      </span>
    </div>

    <section class="cart">
      <form class="cart__form form" action="#" method="POST" @submit.prevent="order">
        <div class="cart__field">
          <div v-if="sendingBasket">
            <div class="preloader">
              <svg class="preloader__image" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor"
                      d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z">
                </path>
              </svg>
            </div>
          </div>
          <div v-else class="cart__data">
            <BaseFormText v-model="formData.name" title="ФИО" :error="formError.name"
                          placeholder="Введите ваше полное имя"/>
            <BaseFormText v-model="formData.address" title="Адрес доставки" :error="formError.address"
                          placeholder="Введите ваш адрес"/>
            <BaseFormText v-model="formData.phone" title="Телефон" :error="formError.phone"
                          placeholder="Введите ваш телефон"/>
            <BaseFormText v-model="formData.email" title="Email" :error="formError.email"
                          placeholder="Введи ваш Email"/>
            <BaseFormTextArea v-model="formData.comment" title="Комментарий к заказу" :error="formError.comment"
                              placeholder="Ваши пожелания"/>
          </div>

          <div class="cart__options">
            <h3 class="cart__title">Доставка</h3>
            <ul class="cart__options options">
              <li class="options__item">
                <label class="options__label">
                  <input class="options__radio sr-only" type="radio" name="delivery" value="0" checked="">
                  <span class="options__value">
                    Самовывоз <b>бесплатно</b>
                  </span>
                </label>
              </li>
              <li class="options__item">
                <label class="options__label">
                  <input class="options__radio sr-only" type="radio" name="delivery" value="500">
                  <span class="options__value">
                    Курьером <b>500 ₽</b>
                  </span>
                </label>
              </li>
            </ul>

            <h3 class="cart__title">Оплата</h3>
            <ul class="cart__options options">
              <li class="options__item">
                <label class="options__label">
                  <input class="options__radio sr-only" type="radio" name="pay" value="card">
                  <span class="options__value">
                    Картой при получении
                  </span>
                </label>
              </li>
              <li class="options__item">
                <label class="options__label">
                  <input class="options__radio sr-only" type="radio" name="pay" value="cash">
                  <span class="options__value">
                    Наличными при получении
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div class="cart__block">
          <ul class="cart__orders">
            <li class="cart__order" v-for="item in products" :key="item.productId">
              <h3>{{ item.product.title }}</h3>
              <b>{{ (item.product.price * item.amount)|numberFormat }} ₽</b>
              <span>Артикул: {{ item.product.id }}</span>
            </li>
          </ul>

          <div class="cart__total">
            <p>Доставка: <b>{{productDeliveryPrice|numberFormat}} ₽</b></p>
            <p>Итого: <b>{{ $store.getters.cartTotalItems }}</b> {{ howManyItems }} на сумму
              <b>{{ totalPriceDelivery|numberFormat }} ₽</b></p>
          </div>

          <button class="cart__button button button--primery" type="submit">
            Оформить заказ
          </button>
        </div>
        <div class="cart__error form__error-block" v-if="formErrorMessage">
          <h4>Заявка не отправлена!</h4>
          <p>
            {{ formErrorMessage }}
          </p>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import BaseFormText from "@/components/BaseFormText";
import BaseFormTextArea from "@/components/BaseFormTextArea";
import howManyItems from "@/helpers/howManyItems";
import {mapGetters} from 'vuex';
import {mapState} from 'vuex';
import numberFormat from "@/helpers/numberFormat";
import axios from "axios";
import {API_BASE_URL} from "../../config";

export default {
  name: "OrderPage",
  data() {
    return {
      formData: {},
      formError: {},
      formErrorMessage: '',
      sendingBasket: false
    }
  },
  components: {BaseFormText, BaseFormTextArea},
  computed: {
    howManyItems,
    ...mapGetters({totalPrice: 'cartTotalPrice'}),
    ...mapState({deliveryPrice: 'productDeliveryPrice'}),
    products() {
      return this.$store.getters.cartDetailProducts
    },
    totalPriceDelivery() {
      return this.totalPrice + this.deliveryPrice
    },
    productDeliveryPrice(){
      return this.deliveryPrice
    }

  },
  filters: {
    numberFormat
  },
  methods: {
    order() {
      this.formError = {};
      this.formErrorMessage = '';
      this.sendingBasket = true;
      axios
        .post(API_BASE_URL + '/api/orders', {
          ...this.formData
        }, {
          params: {
            userAccessKey: this.$store.state.userAccessKey
          }
        })
        .then((response) => {
          this.$store.commit('resetCart');
          this.sendingBasket = false;
          this.$store.commit('updateOrderInfo', response.data);
          this.$router.push({name: 'orderInfo',params:{id:response.data.id}});
        })
        .catch(error => {
          this.formError = error.response.data.error.request || {};
          this.formErrorMessage = error.response.data.error.message;
          this.sendingBasket = false;
        })
    }
  }
}
</script>

<style scoped>
.preloader {
  margin: 0 auto;
}
</style>
