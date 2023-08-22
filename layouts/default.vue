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
    <slot />
    <section class="content">


<slot/>

</section>
<footer>

</footer>
  </template>
  
  
  <script>
    export default {
        name: "Default"
    }
</script>


<style>
    .container {
    margin: 0 auto;
    max-width: 1440px;
    padding: 0 24px;
}

.header {
    background-color: #93BCD3;
    border-radius: 0 0 40px 40px;
}

.nav {
    display: flex;
    justify-content: space-between;
    padding-top: 24px;
    
}

.menu {
    display: flex;
    align-items: center;
}

.list {
    display: flex;
    align-items: center;
}

.list-item + .list-item {
    margin-left: 24px;
}

.list-item {
    position: relative;
}

.list-item.active {
    
    &::after {
        position: absolute;
        content: '';
        top: -40px;
        left: 0;
        width: 100%;
        height: 6px;
        background-color: #0D0D10;
        border-radius: 0 0 4px 4px;
    }
}

.logo {
    margin-right: 30px;
}

.buttons {
    display: flex;
    align-items: center;
}

.search,
.help {
    border: none;
	background-color: rgba(255, 255, 255, 0.1);
	color: #000000;
	border-radius: 16px;
	padding: 15px 16px;
}

.search {
    margin-right: 8px;
}

.main-title {
    padding-top: 165px;
    font-size: 72px;
    padding-bottom: 25px;
}

.main-title-text {
    max-width: 688px;
}

</style>