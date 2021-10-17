let width = 1280;       //Ширина картинки, расстояние на которое двигаем влево или в право.
let position = 0;       //Фиксирует новый слайд в значение "0" иначе будет набегать вертикальная полоска с каждого следующего слайда
let count = 1;          //Значение ширины (шага) 1-1280, 2-2560 ... Или шаг.

let carousel = document.getElementById('carousel');
let list = carousel.querySelector('ul');
let listLength = carousel.querySelectorAll('li');

carousel.querySelector('.prev').onclick = function(){
    if(position == 0){
        position = (-width*(listLength.length-count));
        list.style.marginLeft = position + 'px';
        number();
    }else{
        position = Math.min(position + width*count,0);
        list.style.marginLeft = position + 'px';
        number();
    }
}

let slider = carousel.querySelector('.next').onclick = function(){
    if(position == (-width*(listLength.length-count))){
        position = 0;
        list.style.marginLeft = position + 'px';
        number();
    }else{
        position = Math.max(position - width*count, -width*(listLength.length-count));
        list.style.marginLeft = position + 'px';
        number();
    }    
}

let interval = setInterval(slider,6000);

let divS = document.createElement("div");
    divS.className = 'slideCounter'    
    divS.innerHTML = 'Номер слайда № ';    
document.body.appendChild(divS);

let divN = document.createElement('div');
    divN.className = 'slideCounterN';

function number(){      
    let num = Math.abs(position/width);
    console.log('Из функции :' + ' ' + num);
    divN.innerHTML = num + 1;    
    // return num;    
};
number();

document.body.appendChild(divN);

let start = document.getElementById('start');

start.addEventListener('click',clearSlide);

function clearSlide(){
    position = 0;    
    list.style.marginLeft = position + 'px';
    let num = Math.abs(position/width);
    console.log('Из функции :' + ' ' + num);
    divN.innerHTML = num + 1;        
}
clearSlide();
