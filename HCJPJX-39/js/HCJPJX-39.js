alert('Hi. How could it possibly be possible to learn JS? Maybe there is a secret?')
/*var images=[
    "img/design3.jpg",
    "img/design4.jpg"
];
var num=0;
function next(){
    var slider=document.getElementById('slider');
    num++;
    if (num>=images.length){
        num=0
    }
    slider.src=images[num];
}
setInterval(next, 5000);*/


const next = document.getElementById('btn-next');
const slides = document.querySelectorAll('.slide');

let index = 0;

const activeSlide = n => {
    for(slide of slides){        
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const nextSlide = () => {
    if(index == slides.length - 1){
        index = 0;
        prepereCurentSlide(index);        
    }else{
        index++;
        prepereCurentSlide(index);
    }
}

const prepereCurentSlide = ind => {
    activeSlide(index);    
}

next.addEventListener('click', nextSlide);

setInterval(nextSlide, 5000)
