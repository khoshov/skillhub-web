<template>
  <v-app-bar
    flat>
    <v-container>
      <v-row>
        <v-col
          class="d-flex align-center justify-center">
          <NuxtLink to="/">
            <v-avatar
              class="me-4 "
              color="grey-darken-1"
              size="32"></v-avatar>
          </NuxtLink>

          <v-btn-toggle>
            <v-btn
              v-for="category in categoryStore.categories"
              :key="category.id"
              :text="category.name"
              :to="category.slug"
              variant="text"></v-btn>
          </v-btn-toggle>

          <v-spacer></v-spacer>

          <v-responsive max-width="160">
            <v-text-field
              density="compact"
              flat
              hide-details
              label="Search"
              rounded="lg"
              single-line
              variant="solo-filled"></v-text-field>
          </v-responsive>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import {useCategoryStore} from "../stores/categories.js";

const categoryStore = useCategoryStore()
categoryStore.fetchCategories()
</script>
