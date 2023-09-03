<template>
  <div class="wrapper">
    <header class="header">
      <div class="container">
        <Navigation/>
        <h1 class="main-title">Разработка</h1>
      </div>
    </header>

    <main class="main">
      <slot/>
    </main>

    <Footer/>
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default {
  components: {Footer, Navigation}
}
</script>