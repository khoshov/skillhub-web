<template>
  <div class="container">
 
    <Filters/>
    <div class="wrap">
      <div v-for="course in courses" class="schools">
      <Course :course="course"/>
    </div>

    </div>
    
  </div>
  <InfiniteLoading @infinite="loadData"/>
</template>

<script setup>
import Filters from "../components/Filters";
import Sort from "../components/Sort";
import Course from "../components/Course";
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";
import { ref } from "vue";

const config = useRuntimeConfig()

const courses = ref([]);
let page = 1;

const loadData = async $state => {
  const {data} = await useFetch(`/courses/?page=${page}`, {baseURL: config.public.apiBase})
  courses.value.push(...data.value);
  if (data.value.length < 10) {
    $state.complete();
  } else {
    $state.loaded();
  }
  page++;
}
</script>

<style lang="css">
  .wrap {
    display: -webkit-flex;
   display: -ms-flexbox;
   display: flex;
   -webkit-flex-wrap: wrap;
   -ms-flex-wrap: wrap;
   flex-wrap: wrap;
   gap: 16px;
  }
  
  .schools {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  
  .school-card {
    height: 100%;
  }
</style>