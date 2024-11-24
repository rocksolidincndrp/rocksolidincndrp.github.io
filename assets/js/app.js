let burger = document.getElementById('burger'),
	 nav    = document.getElementById('main-nav');

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});



const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('fadeanim');
        }
    });
});

const hidenElements = document.querySelectorAll('.fadein');
hidenElements.forEach((el) => observer.observe(el))

const observer2 = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('scaleanim');
        }
    });
});

const hidenElements2 = document.querySelectorAll('.scale');
hidenElements2.forEach((el) => observer2.observe(el))

const observer3 = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('slideanim');
        }
    });
});

const hidenElements3 = document.querySelectorAll('.slidein');
hidenElements3.forEach((el) => observer3.observe(el))

var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
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
        c.addEventListener("click", function(e) {
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    
                    // Show/hide the corresponding div based on selection
                    if (this.innerHTML === "Web Developer") {
                        document.getElementById('webDeveloperDiv').classList.remove('hidden');
                        document.getElementById('graphicDesignerDiv').classList.add('hidden');
                    } else if (this.innerHTML === "Graphic Designer") {
                        document.getElementById('graphicDesignerDiv').classList.remove('hidden');
                        document.getElementById('webDeveloperDiv').classList.add('hidden');
                    } else {
                        document.getElementById('webDeveloperDiv').classList.add('hidden');
                        document.getElementById('graphicDesignerDiv').classList.add('hidden');
                    }
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    
    a.addEventListener("click", function(e) {
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
            arrNo.push(i);
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i) === -1) {
            x[i].classList.add("select-hide");
        }
    }
}

document.addEventListener("click", closeAllSelect);



const buttons = document.querySelectorAll('.question');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const questionDiv = button.closest('.questiondiv');
        const answer = questionDiv.querySelector('.answer');
        const downCaret = button.querySelector('.fa-caret-down');
        const upCaret = button.querySelector('.fa-caret-up');
        if (answer.style.display === 'none') {
            answer.style.display = 'block';
            downCaret.style.display = 'none';
            upCaret.style.display = 'inline';
        } else {
            answer.style.display = 'none';
            downCaret.style.display = 'inline';
            upCaret.style.display = 'none';
        }
    });
});    