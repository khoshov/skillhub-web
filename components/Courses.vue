<template>
  <v-container>
    <v-row>
      <v-col>
        <p v-for="course in courseStore.courses">{{ course.name }}</p>
      </v-col>
    </v-row>
  </v-container>
  <InfiniteLoading @infinite="loadData"/>
</template>

<script setup>
import InfiniteLoading from "v3-infinite-loading";
import {useCategoryStore} from "../stores/categories.js";
import {useCourseStore} from "../stores/course.js";


const categoryStore = useCategoryStore()
categoryStore.fetchCategories()

const courseStore = useCourseStore()

courseStore.$patch({
  courses: [],
  page: 1,
})

const loadData = async $state => {
  await courseStore.fetchCourses(true)
  if (courseStore.previousPage.length < 10) {
    $state.complete();
  } else {
    $state.loaded();
  }
  courseStore.nextPage();
}
</script>
