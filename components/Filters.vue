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
    <Sort/>
  </div>
</template>

<!-- <script>
    var filterBtn = document.getElementsByClassName('filter-button');
    
    for (var i = 0; i < filterBtn.length; i++) {
	    filterBtn[i].addEventListener("click", function() {
  	  var current = document.getElementsByClassName("active-filter");
  	  current[0].className = current[0].className.replace(" active-filter", "");
  	  this.className += " active-filter";
	});
  }
</script> -->

<style scoped lang="scss">
  .filters {
    padding-top: 16px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}

.filters-list {
    display: flex;
    flex-wrap: wrap;
}

.filters-list-item {
    margin-right: 8px;
    margin-bottom: 10px;
}

.active-filter {
    background-color: #000000;
    color: #fff;
}
</style>
