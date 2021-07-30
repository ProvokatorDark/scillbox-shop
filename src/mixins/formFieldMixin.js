import BaseFormField from "@/components/BaseFormField";
export default {
  components:{BaseFormField},
  props:['title','error','placeholder','value','front'],
  computed:{
    dataValue:{
      get(){
        return this.value;
      },
      set(value){
        this.$emit('input',value);
      }
    }
  }
}
