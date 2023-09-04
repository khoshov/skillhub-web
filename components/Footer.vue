<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-text">
        <img alt="" src="/img/logo.svg">
        <p>Мы собрали для вас лучшие курсы frontend разработки в одном месте. Вы можете сравнить курсы по трем
          направлениям во фронтенд разработке. Здесь есть подходящие курсы фронтенд разработчика для обучения с нуля.
          Также найдутся курсы, чтобы углубить знания в конкретной области, пройти повышение квалификации или
          переподготовку. В каталоге курсов есть все ― от элементарной верстки сайта до веб-разработки на React</p>
      </div>
      <div class="connect">
        <p>© Skillhub 2023</p>

        <a class="mail" href="mailto:hello@skillhub.ru">Связаться с нами: hello@skillhub.ru</a>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  .footer {
    margin-top: 72px;
}

.footer-text {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    
    p {
        max-width: 688px;
    }
}

.connect {
    display: flex;
    margin-top: 40px;
    margin-bottom: 24px;
    justify-content: space-between;
}

.mail {
    margin-right: 360px;
}
</style>
