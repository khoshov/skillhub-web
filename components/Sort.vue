<template>
  <v-select
    @update:menu="doSomething"
    v-model=value
    :items="items"
    variant="outlined"
  ></v-select>
</template>

<script setup>
// import {useCourseStore} from "../stores/course";
// const courseStore = useCourseStore();
// courseStore.setOrder('popular')
// courseStore.getCourses()

const items = ['Популярные', 'Бесплатные', 'Дешевые', 'Дорогие', 'Короткие', 'Долгие', 'Высокий рейтинг']

let value = items[0]

const doSomething = (e) => {
  console.log(e)
}
</script>

<style lang="scss" scoped>
.ui-btn {
  margin-left: 20px;
}
</style>
