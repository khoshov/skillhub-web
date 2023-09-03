

var header = document.getElementById('main-nav');

var link = header.getElementsByClassName('list-item');

var filterBtn = document.getElementsByClassName('filter-button');


for (var i = 0; i < link.length; i++) {
	link[i].addEventListener("click", function() {
	  var curr = document.getElementsByClassName("active");
	  curr[0].className = curr[0].className.replace(" active", "");
	  this.className += " active";
	});
  }
  
  
  for (var i = 0; i < filterBtn.length; i++) {
	filterBtn[i].addEventListener("click", function() {
	  var current = document.getElementsByClassName("active-filter");
	  current[0].className = current[0].className.replace(" active-filter", "");
	  this.className += " active-filter";
	});
  }
  
  
  
  document.addEventListener("DOMContentLoaded", function (event) {
    var x, i, j, l, ll, selElmnt, a, b, c;
    
    x = document.getElementsByClassName("custom-sel");
    l = x.length;
    for (i = 0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;
        
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < ll; j++) {
            
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            if (selElmnt.options[j].selected) {
                c.setAttribute("class", "selected");
            }
            c.addEventListener("click", function (e) {
               
                var y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                    if (s.options[i].innerHTML === this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        yl = y.length;
                        for (k = 0; k < yl; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");

                        
                        var freeInput = document.querySelector('#free');
                        freeInput.value = s.options[i].getAttribute('data-free');
                        s.disabled = !s.value;
                        freeInput.disabled = !freeInput.value;
                        s.form.submit();

                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function (e) {
            
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }

    function closeAllSelect(elmnt) {
        
        var x, y, i, xl, yl, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = x.length;
        yl = y.length;
        for (i = 0; i < yl; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }

    document.addEventListener("click", closeAllSelect);
});