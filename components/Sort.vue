<template>
  <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
    Сначала <UButton  class="ui-btn" color="white" label="Популярные" trailing-icon="i-heroicons-chevron-down-20-solid" />
  </UDropdown>
</template>

<script setup>
const items = [
  [{
    label: 'Популярные',
    // avatar: {
    //   src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    // }
  }, {
    label: 'Бесплатные',
    // icon: 'i-heroicons-pencil-square-20-solid',
    // shortcuts: ['E'],
    // click: () => {
    //   console.log('Edit')
    // }
  }, {
    label: 'Дешевые',
    // icon: 'i-heroicons-document-duplicate-20-solid',
    // shortcuts: ['D'],
    // disabled: true
  }, {
    label: 'Дорогие',
    // icon: 'i-heroicons-archive-box-20-solid'
  }, {
    label: 'Короткие',
    // icon: 'i-heroicons-arrow-right-circle-20-solid'
  }, {
    label: 'Долгие',
    // icon: 'i-heroicons-trash-20-solid',
    // shortcuts: ['⌘', 'D']
  },
  {
    label: 'Высокий рейтинг',
    // icon: 'i-heroicons-trash-20-solid',
    // shortcuts: ['⌘', 'D']
  }]
]
</script>

<style scoped lang="scss">
  .ui-btn {
    margin-left: 20px;
  }
</style>
