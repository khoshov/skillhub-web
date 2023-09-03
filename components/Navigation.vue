<template>
  <nav id="main-nav" class="navbar navbar-expand-lg navbar-light">
    <a class="logo" href="/">
      <img alt="" src="/img/logo.svg">
    </a>
    <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
            class="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse"
            type="button">Курсы
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="navbarSupportedContent" class="collapse navbar-collapse">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class=" list-item active">
          <a aria-current="page" class="" href="#">Разработка</a>
        </li>
        <li class=" list-item">
          <a class="" href="#">Дизайн</a>
        </li>
        <li class=" list-item">
          <a class="" href="#">Аналитика</a>
        </li>
        <li class=" list-item">
          <a class="" href="#">Управление</a>
        </li>
      </ul>
      <div id="accordionExample" class="accordion">
        <div class="accordion-item">
          <h2 id="headingOne" class="accordion-header">
            <button aria-controls="collapseOne" aria-expanded="true" class="accordion-button"
                    data-bs-target="#collapseOne"
                    data-bs-toggle="collapse" type="button">
              Разработка <span>234</span>
            </button>
          </h2>
          <div id="collapseOne" aria-labelledby="headingOne" class="accordion-collapse collapse show"
               data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <ul class="accordion-body-list">
                <li class="accordion-body-item">
                  <a class="accordion-body-link" href="">Python</a>
                </li>
                <li class="accordion-body-item">
                  <a class="accordion-body-link" href="">Java</a>
                </li>
                <li class="accordion-body-item">
                  <a class="accordion-body-link" href="">PHP</a>
                </li>
                <li class="accordion-body-item">
                  <a class="accordion-body-link" href="">C++</a>
                </li>
                <li class="accordion-body-item">
                  <a class="accordion-body-link" href="">Python</a>
                </li>
                <li class="accordion-body-item">
                  <a class="accordion-body-link" href="">Python</a>
                </li>
                <li class="accordion-body-item">
                  <a class="accordion-body-link" href="">Python</a>
                </li>
                <li class="accordion-body-item">
                  <a class="accordion-body-link" href="">Java</a>
                </li>
                <li class="accordion-body-item">
                  <a class="accordion-body-link" href="">PHP</a>
                </li>
                <li class="accordion-body-item">
                  <a class="accordion-body-link" href="">C++</a>
                </li>
                <li class="accordion-body-item">
                  <a class="accordion-body-link" href="">Python</a>
                </li>
                <li class="accordion-body-item">
                  <a class="accordion-body-link" href="">Python</a>
                </li>

              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 id="headingTwo" class="accordion-header">
            <button aria-controls="collapseTwo" aria-expanded="false" class="accordion-button collapsed"
                    data-bs-target="#collapseTwo" data-bs-toggle="collapse" type="button">
              Дизайн
            </button>
          </h2>
          <div id="collapseTwo" aria-labelledby="headingTwo" class="accordion-collapse collapse"
               data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <ul>

              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 id="headingThree" class="accordion-header">
            <button aria-controls="collapseThree" aria-expanded="false" class="accordion-button collapsed"
                    data-bs-target="#collapseThree" data-bs-toggle="collapse" type="button">
              Аналитика
            </button>
          </h2>
          <div id="collapseThree" aria-labelledby="headingThree" class="accordion-collapse collapse"
               data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <ul>

              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 id="headingFour" class="accordion-header">
            <button aria-controls="collapseFour" aria-expanded="false" class="accordion-button collapsed"
                    data-bs-target="#collapseFour" data-bs-toggle="collapse" type="button">
              Управление
            </button>
          </h2>
          <div id="collapseFour" aria-labelledby="headingFour" class="accordion-collapse collapse"
               data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <ul>

              </ul>
            </div>
          </div>
        </div>
      </div>
      <form class="form">
        <input aria-label="Search" class="form-control me-2" placeholder="Искать курс" type="search">
      </form>
      <button class="offcanvas-body-button">Помочь с выбором</button>
    </div>
    <button class="search">
      <img alt="search" src="/img/Icon.svg">
    </button>
  </nav>
</template>