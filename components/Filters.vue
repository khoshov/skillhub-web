<template>
  <div class="filters">
    <ul class="filters-list">
      <li class="filters-list-item ">
        <button class="filter-button active-filter">Все</button>
      </li>
      <li class="filters-list-item">
        <button class="filter-button">UX/UI</button>
      </li>
      <li class="filters-list-item">
        <button class="filter-button">Моушн-дизайн</button>
      </li>
      <li class="filters-list-item">
        <button class="filter-button">Графический дизайн</button>
      </li>
      <li class="filters-list-item">
        <button class="filter-button">Геймдизайн</button>
      </li>
      <li class="filters-list-item">
        <button class="filter-button">2D-дизайн</button>
      </li>
    </ul>
    <button aria-controls="offcanvasExample" class="btn btn-light" data-bs-target="#offcanvasExample" data-bs-toggle="offcanvas"
            type="button">
      Все курсы
    </button>
    <button aria-controls="offcanvasExampleTwo" class="btn btn-light" data-bs-target="#offcanvasExampleTwo" data-bs-toggle="offcanvas"
            type="button">
      Популярные
    </button>
    <div id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" class="offcanvas offcanvas-bottom"
         tabindex="-1">
      <div class="offcanvas-header">
        <h5 id="offcanvasExampleLabel" class="offcanvas-title">Дизайн</h5>
        <button aria-label="Закрыть" class="btn-close" data-bs-dismiss="offcanvas" type="button"></button>
      </div>
      <div class="offcanvas-body">
        <div class="">
          <ul aria-labelledby="" class="offcanvas-body-list">
            <li><a class="dropdown-item offcanvas-active" href="#">Все</a></li>
            <li><a class="dropdown-item" href="#">Графический дизайн</a></li>
            <li><a class="dropdown-item" href="#">Дизайн плаката</a></li>
            <li><a class="dropdown-item" href="#">Моушн</a></li>
            <li><a class="dropdown-item" href="#">3D</a></li>
            <li><a class="dropdown-item" href="#">UX/UI</a></li>
            <li><a class="dropdown-item" href="#">Python</a></li>
            <li><a class="dropdown-item" href="#">Java</a></li>
            <li><a class="dropdown-item" href="#">PHP</a></li>
            <li><a class="dropdown-item" href="#">C++</a></li>
            <li><a class="dropdown-item" href="#">Python</a></li>
            <li><a class="dropdown-item" href="#">Python</a></li>
          </ul>
          <button class="offcanvas-body-button">Выбрать</button>
        </div>
      </div>
    </div>
    <div id="offcanvasExampleTwo" aria-labelledby="offcanvasExampleTwo" class="offcanvas offcanvas-bottom"
         tabindex="-1">
      <div class="offcanvas-header">
        <h5 id="offcanvasExampleLabel" class="offcanvas-title">Сначала</h5>
        <button aria-label="Закрыть" class="btn-close" data-bs-dismiss="offcanvas" type="button"></button>
      </div>
      <div class="offcanvas-body">
        <div class="">
          <ul aria-labelledby="" class="offcanvas-body-list--two">
            <li><a class="dropdown-item offcanvas-active" href="#">Популярные</a></li>
            <li><a class="dropdown-item" href="#">Бесплатные</a></li>
            <li><a class="dropdown-item" href="#">Дешевые</a></li>
            <li><a class="dropdown-item" href="#">Дорогие</a></li>
            <li><a class="dropdown-item" href="#">Короткие</a></li>
            <li><a class="dropdown-item" href="#">Долгие</a></li>
            <li><a class="dropdown-item" href="#">С высоким рейтингом</a></li>
          </ul>
          <button class="offcanvas-body-button">Сортировать</button>
        </div>
      </div>
    </div>
  </div>
</template>
