<template>
  <div class="sort">
    <p>Сначала</p>
    <form id="filter-form" class="filter">

      <input name="categories" type="hidden" value="{{ category.id }}">

      <input id="free" name="free" type="hidden">
      <div>
        <div class="form-row form-margin align-items-center">
          <div class="col-lg">
            <div class="custom-sel">
              <select id="filter-select" class="form-control" name="sort">
                <option></option>
                <option data-free="" selected value="">Популярные</option>
                <option data-free="true" value="">Бесплатные</option>
                <option data-free="false" value="price">Сначала дешевые</option>
                <option data-free="false" value="-price">Сначала дорогие</option>
                <option data-free="" value="duration">Сначала короткие</option>
                <option data-free="" value="-duration">Сначала долгие</option>
                <option data-free="" value="-rating">С высоким рейтингом</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
