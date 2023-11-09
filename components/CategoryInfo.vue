<template>
  <v-container>
    <v-row>
      <v-col>
        <h2
          class="text-h2">
          <span v-if="categoryStore.currentCategory">{{ categoryStore.currentCategory.title }}</span>
          <span v-else>Все курсы</span>
        </h2>
        <p
          class="mt-8">
          <span v-if="categoryStore.currentCategory">
            <Description/>
          </span>
          <span v-else>
            В таблице представлен весь список курсов и школ. Чтобы найти нужное - можете воспользоваться поиском или фильтром
          </span>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import {useCategoryStore} from "../stores/categories.js";
import {h} from 'vue';

const categoryStore = useCategoryStore();
categoryStore.fetchCategories();
const Description = () => h('div', {innerHTML: categoryStore.currentCategory?.description})
</script>
