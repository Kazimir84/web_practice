let prev = document.getElementById('btn-prev');
let next = document.getElementById('btn-next');
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
};

const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
};

const prepareCurrentSlide = ind => {
    activeSlide(ind);
        activeDot(ind);
};

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide (index);
    } else {
        index++;
        prepareCurrentSlide (index);
    };
}

next.addEventListener('click', nextSlide);

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide (index);
    } else {
        index--;
        prepareCurrentSlide (index);
    };
}

prev.addEventListener('click', prevSlide);

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide (index);
    });
});

setInterval(nextSlide, 2500);