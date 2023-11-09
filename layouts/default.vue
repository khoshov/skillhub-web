<template>
  <AppBar/>

  <v-main>
    <slot/>
  </v-main>
</template>

<script setup>
import AppBar from "../components/AppBar.vue";
</script>
