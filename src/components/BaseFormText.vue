<template>
  <BaseFormField :title="title" :error="error" :front="front">
    <input class="form__input" v-model="dataValue" type="type"  :placeholder="placeholder">
  </BaseFormField>
</template>

<script>
import formFieldMixin from "@/mixins/formFieldMixin";
export default {
  name: "BaseFormText",
  props:{
    type:{
      default:'text'
    }
  },
  mixins:[formFieldMixin]
}
</script>

<style scoped>

</style>
