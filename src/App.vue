<template>
  <div>
    <BaseHeader/>
        <router-view/>
    <BaseFooter/>
  </div>

</template>

<script>
import BaseHeader from "@/components/BaseHeader";
import BaseFooter from "@/components/BaseFooter";
import {mapActions,mapMutations} from 'vuex';
export default {
  name: 'App',
  components:{
    BaseHeader,
    BaseFooter
  },
  methods:{
    ...mapActions(['loadCart']),
    ...mapMutations(['updateUserAccessKey'])
  },
  created() {
    const userAccessKey=localStorage.getItem('userAccessKey');
    if (userAccessKey){
      this.updateUserAccessKey(userAccessKey);
    }
    this.loadCart()
  },

};
</script>

<style lang="scss">

</style>
