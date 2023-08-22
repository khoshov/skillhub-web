<template>
    <div>
      <header class="header">
         <div class="container">
         <nav class="nav">
         <div class="menu" id="my">
            <a href="/" class="logo">
               <img src="../static/img/logo.svg" alt="">
            </a>
            <ul class="list">
               <li class="list-item active">
                  <NuxtLink to="./Dev" class="list-link">Разработка</NuxtLink>
               </li>
               <li class="list-item">
                  <NuxtLink to="./Design" class="list-link">Дизайн</NuxtLink>
               </li>
               <li class="list-item ">
                  <a href="#" class="list-link">Аналитика</a>
               </li>
               <li class="list-item ">
                  <a href="#" class="list-link">Управление</a>
               </li>
            </ul>
         </div>
         <div class="buttons">
            <button class="search">
               <img src="../static/img/search.svg" alt="search">
         </button>
            <button class="help">Помочь с выбором</button>
         </div>
         </nav>
            <h1 class="main-title">Разработка</h1>
        </div>
      </header>
    </div>
    
    <section class="content">


<slot/>

</section>
<footer>

</footer>
  </template>
  
  
  <script>
    const route = useRoute()
</script>


<style>
    .header {
    background-color: red;
}
</style>