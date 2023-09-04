<template>
  <div class="wrapper">
    <header class="header">
      <div class="container">
        <Navigation/>
        <div class="title-wrapper">
          <h1 class="main-title">Разработка</h1>
        <p>Мы собрали для вас лучшие курсы frontend разработки в одном месте. Вы можете сравнить курсы по трем направлениям во фронтенд разработке. Здесь есть подходящие курсы фронтенд разработчика для обучения с нуля. Также найдутся курсы, чтобы углубить знания в конкретной области, пройти повышение квалификации или переподготовку. В каталоге курсов есть все ― от элементарной верстки сайта до веб-разработки на React</p>
        </div>
        
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

<style scoped lang="scss">
.title-wrapper {
  display: flex;
  align-items: flex-end;
  margin-bottom: 26px;
  
  p {
    max-width: 688px;
    margin-left: 64px;
  }
}
</style>