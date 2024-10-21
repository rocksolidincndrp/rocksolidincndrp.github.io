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