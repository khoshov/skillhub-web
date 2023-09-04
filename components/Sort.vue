<template>
  <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
    Сначала
    <UButton class="ui-btn" color="white" trailing-icon="i-heroicons-chevron-down-20-solid"/>
  </UDropdown>
</template>

<script setup>
import {useCourseStore} from "../stores/course";

const courseStore = useCourseStore();
const items = [
  [{
    label: 'Популярные',
    click: () => {
      courseStore.setOrder('popular')
      courseStore.getCourses()
    }
  }, {
    label: 'Бесплатные',
  }, {
    label: 'Дешевые',
  }, {
    label: 'Дорогие',
  }, {
    label: 'Короткие',
  }, {
    label: 'Долгие',
  },
    {
      label: 'Высокий рейтинг',
    }]
]
</script>

<style lang="scss" scoped>
.ui-btn {
  margin-left: 20px;
}
</style>
