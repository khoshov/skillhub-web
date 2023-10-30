<template>
  <NuxtLink :to="`/courses/${course.slug}`">
    <div class="school-card">
      <div class="card-wrapper">
        <div class="card-title">
          <div class="avatar">
            <img alt="" src="/img/avatar.png">
            <a href="./course.html">{{ course.school_name }}</a>
          </div>
          <div class="star">
            <img alt="" src="/img/Star.svg">
            <p>{{ course.rating }}</p>
          </div>
        </div>
        <hr class="card-line">
        <p class="card-start">
          <span>{{ course.duration }}</span>
          <span v-if="course.duration_type === 1"> месяцев</span>
          <span v-if="course.duration_type === 2"> уроков</span>
          <span>, старт {{ dateFns.format(new Date(course.start_date), 'd MMMM', {locale: ru}) }}</span>
        </p>
        <h4 class="card-title">{{ course.name }}</h4>
        <div class="card-price">
          <p v-if="course.price" class="price">{{ Intl.NumberFormat().format(course.price) }} ₽</p>
          <p v-else class="price">Бесплатно</p>
          <button class="card-btn">
            <img alt="" src="/img/arrow.svg">
          </button>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
import * as dateFns from "date-fns";
import ru from 'date-fns/locale/ru/index.js';

const props = defineProps(['course'])
</script>

<style lang="scss">
.school-card {
    background-color: #fff;
    width: 325px;
    border-radius: 24px;
}

.card-wrapper {
    padding: 16px;
}

.card-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

</style>