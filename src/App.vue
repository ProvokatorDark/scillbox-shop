<template>
    <component :is="currentPageComponent" :page-params="currentPageParams"></component>
</template>

<script>
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import eventBus from "./eventBus";

const routes={
  main:'MainPage',
  product:'ProductPage'
};

export default {
  name: 'App',
  data(){
    return{
      currentPage:'main',
      currentPageParams:{}
    }
  },
  methods:{
    gotoPage(pageName,pageParams){
      this.currentPage=pageName;
      this.currentPageParams=pageParams||{};
    }
  },
  computed:{
    currentPageComponent(){
      return routes[this.currentPage]||'NotFoundPage';
    },
  },
  components:{
    MainPage,
    ProductPage,
    NotFoundPage
  },
  created() {
    eventBus.$on('gotoPage',(pageName,pageParams)=>this.gotoPage(pageName,pageParams))
  }
};
</script>

<style lang="scss">

</style>
