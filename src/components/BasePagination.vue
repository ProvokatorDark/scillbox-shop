<template>
  <ul class="catalog__pagination pagination">
    <li class="pagination__item">
      <a class="pagination__link"
         aria-label="Предыдущая страница" @click.prevent="paginate(page-1)"
        :class="{'pagination__link--arrow pagination__link--disabled':page===1}">
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-left"></use>
        </svg>
      </a>
    </li>
    <li class="pagination__item" v-for="pageNumber in pages" :key="pageNumber">
      <a href="#" class="pagination__link" :class="{'pagination__link--current':pageNumber===page}"
         @click.prevent="paginate(pageNumber)">
        {{ pageNumber }}
      </a>
    </li>
    <li class="pagination__item">
      <a class="pagination__link pagination__link--arrow" href="#"
         aria-label="Следующая страница" @click.prevent="paginate(page+1)"
         :class="{'pagination__link--arrow pagination__link--disabled':page===pages}">
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "BasePagination",
  model:{
    prop:'page',
    event:'paginate'
  },
  props:['page','count','perPage'],
  methods:{
    paginate(page){
      if (page<1||page>this.pages){
        console.log(
          'Код красный! Код красный! ' +
          'Предотвращена попытка ввести недопустимое значение номера страницы. ' +
          'Вдали слышатся звуки сирен'
        )
      }else {
        this.$emit('paginate',page)
      }
    }
  },
  computed:{
    pages(){
      return Math.ceil(this.count/this.perPage)
    }
  }
}
</script>

<style scoped>
.pagination__link--current{
  color: #73B6EA;
}

</style>
