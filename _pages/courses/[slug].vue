<template>
  <div class="container">
    <section class="course-text">
      <div class="left-block">
        <p class="course-price">{{ course.price }} ₽</p>
<!--        <p class="payment">от 2 937 ₽/мес</p>-->
        <p class="description">{{ course.description }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import {useFetch, useRoute, useRuntimeConfig} from "nuxt/app";

const config = useRuntimeConfig()
const route = useRoute()
const {data: course} = await useFetch(`/courses/${route.params.slug}`, {baseURL: config.public.apiBase})
</script>
