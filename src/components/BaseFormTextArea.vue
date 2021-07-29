<template>
  <BaseFormField :title="title" :error="error">
    <textarea class="form__input form__input--area" v-model="dataValue" :placeholder="placeholder"></textarea>
  </BaseFormField>
</template>

<script>
import formFieldMixin from "@/mixins/formFieldMixin";
export default {
  name: "BaseFormTextArea",
  mixins:[formFieldMixin]

}
</script>

<style scoped>

</style>
