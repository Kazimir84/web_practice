"use strict"
// let div = document.createElement('div');
//   div.className = "curientTime";
//   div.innerHTML = "Текущее Время : ";
//   document.body.append(div);
// setInterval(function(){
//     var date = new Date();

//     var time = [
//         (date.getHours()<10 ? "0"+date.getHours():date.getHours()),
//         (date.getMinutes()<10 ? "0"+date.getMinutes():date.getMinutes()),
//         (date.getSeconds()<10 ? "0"+date.getSeconds():date.getSeconds())
//     ].join(":")
//     document.getElementById('clock').innerHTML = time;
// },60)

//Clicker Canvas Rectan
// var click = 0; 

// function increment(){
//     click++;
//     draw();
// }

// var canvas = document.getElementById('Canvas');
// var ctr = canvas.getContext('2d');

// function draw() {
//     ctr.clearRect (0,0,canvas.width,canvas.height);
//     ctr.font = '40px Verdena';
//     ctr.fillText ('Клики : ' + click,160,40);    
// }
// draw();

// //Circle clicker

// var click2 = 0;

// function increment2(e){    
//     var x = e.clientX -240;
//     var y = e.clientY - 160;
//     var distance = Math.sqrt(y*y + x*x);
//     if (distance<50) {
//         click2++;
//         draw2();
//     }
// }

// var canvas2 = document.getElementById('Canvas');
// var ctr2 = canvas2.getContext('2d');

// canvas2.addEventListener('click', increment2)

// function draw2() {
//     ctr2.clearRect (0,0,canvas2.width, canvas2.height);
//     ctr2.font = '40px Verdena';
//     ctr2.fillText ('Круглый кликер : ' + click2, 160,80);
//     ctr2.beginPath();
//     ctr2.fillStyle = "red";
//     ctr2.arc(canvas2.width/2,canvas2.height/2, 50,2*3.14);
//     ctr2.fill();
// }
// draw2();

//Button clicker
// var buttonClicker = 0;

// function buttonIncrement(){
//     buttonClicker++;   
//     redraw();
// }

// var b = document.getElementById('button');
// var c = document.getElementById('Canvas');
// var ctx = c.getContext('2d');

// b.addEventListener('click',buttonIncrement);

// function redraw (){
//     ctx.clearRect (0,0,c.width, c.height);
//     ctx.font = '40px Verdena';
//     ctx.fillText('Кнопка кликалка : ' + buttonClicker, 220,40);
// }
// redraw();
// Кликер с кнопкой очистки кликов
// let click = 0;

// function increment(){
//     click++;
//     redraw();
// }

// let b = document.getElementById('buttonC');
// let c = document.getElementById('Canvas');
// let clear = document.getElementById('clear')
// let cx = c.getContext('2d');

// b.addEventListener('click', increment);
// clear.addEventListener('click', clearCounter);

// function clearCounter(){   
//     increment()
//         click = 0;        
//         cx.clearRect(0,0,c.width, c.height);
//         cx.fillText('Click Me : ' + click, 230,40);
// }

// function redraw(){
//     cx.clearRect(0,0,c.width, c.height);
//     cx.font = '45px Verdena';
//     cx.fillText('Click Me : ' + click, 230,40);
// }
// redraw();


// Karusel Slider
// let width = 1280;    //Ширина картинки, расстояние на которое двигаем влево или в право.
// let position = 0;    //Фиксирует новый слайд в значение "0" иначе будет набегать вертикальная полоска с каждого следующего слайда
// let counter = 1;       //Значение ширины (шага) 1-1280, 2-2560 ... Или шаг.

// let carousel = document.getElementById('carousel');
// let list = carousel.querySelector('ul');
// let listLength = carousel.querySelectorAll('li');

// let slider = carousel.querySelector('.next').onclick = function(){
//     if(position == -width*(listLength.length - counter)){
//         position = 0;
//         list.style.marginLeft = position + 'px';
//         counterSlides();
//     }else{
//         position = Math.max(position - width * counter, -width*(listLength.length - counter));
//         list.style.marginLeft = position + 'px';
//         counterSlides();
//     };   
// }
// setInterval(slider, 9000);
// carousel.querySelector('.prev').onclick = function(){
//     if(position == 0){
//         position = - width * (listLength.length - counter);
//         list.style.marginLeft = position + 'px';
//         counterSlides();
//     }else{
//         position = Math.min(position + width * counter, 0);
//         list.style.marginLeft = position + 'px';
//         counterSlides();
//     };    
// }
// let slideCounter = document.createElement('div');
//     slideCounter.className = 'slideCounter';
//     slideCounter.innerText = 'Номер слайда № ';
// document.body.appendChild(slideCounter);

// let slideCounterN = document.createElement('div');
//     slideCounterN.className = 'slideCounterN';

// function counterSlides(){    
//     let number = Math.abs(position/width);
//     slideCounterN.innerText = number + 1;
//     document.body.appendChild(slideCounterN);       
// }
// counterSlides();

// let start = document.getElementById('start');

// start.addEventListener('click', sliderClear);

// function sliderClear(){
//     position = 0;   
//     list.style.marginLeft = position + 'px';
//     counterSlides();
// }

// // Список, добавление
// let clickL = 0;
// let addLi = document.getElementById('addLi');
// let dellLi = document.getElementById('dellLi');

// let ul = document.createElement('ul');
//     document.body.appendChild(ul);

// addLi.addEventListener('click', addListData);
// dellLi.addEventListener('click', dellListData);

// function addListData(){
//     clickL++;
//     let li = document.createElement('li');
//         li.innerText = clickL;
//     ul.appendChild(li);             
// }
// function dellListData(){
//     if(clickL <= 0){
//         clickL = 0;
//     }else{
//     clickL--;
//     ul.children[ul.children.length - 1].remove();
//     }
// };

// // Создание таблицы и добавление колонок
// let clickT = 0;
// let AddTd = document.getElementById('AddTd');
// let dellTd = document.getElementById('dellTd');
// let table = document.createElement('table');
// document.body.appendChild(table);

// AddTd.addEventListener('click', addTableData);
// dellTd.addEventListener('click', dellTableData);

// // Смена цвета фона кнопок - Начало.
// function random(number){
//     return Math.floor(Math.random() * (number + 1));
// }
// AddTd.onclick = function(){
//     let rndColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     AddTd.style.backgroundColor = rndColor;    
// }
// dellTd.onclick = function(){
//     let rndColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     dellTd.style.backgroundColor = rndColor;
// }
// // Изменение цвета кнопки при наведении мыши
// dellTd.onmouseover = function(){
//     let rndColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     dellTd.style.backgroundColor = rndColor;
// }
// AddTd.onmouseover = function(){
//     let rndColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     AddTd.style.backgroundColor = rndColor; 
// }
// addLi.onmouseover = function(){
//     let rndColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     addLi.style.backgroundColor = rndColor; 
// }
// dellLi.onmouseover = function(){
//     let rndColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     dellLi.style.backgroundColor = rndColor; 
// }
// // Смена цвета фона кнопок - Конец.


// let tr = document.createElement('tr');    
// table.appendChild(tr);

// let td = document.createElement('td');

// function addTableData(){
//     clickT++;
//     let td = document.createElement('td');
//         td.style.borderStyle = 'solid';
//         td.style.padding = '20px';
//         td.style.backgroundColor = 'white';
//         tr.appendChild(td);
//         td.innerText = clickT;    
// }
// function dellTableData(){
// if(clickT <= 0 ){
//     clickT = 0;    
// }else{
//     clickT--;
//     tr.children[tr.children.length - 1].remove();
//     td.innerText = clickT;    
//     }
// }

// Мигающий текст Текущий год
// let date2 = new Date();

// let divB = document.createElement('div');
//     divB.className = 'slideCounterNN';
//     let year = date2.getFullYear();
//     let month = 'Month - ' + '' + (date2.getMonth() + 1);
//     divB.innerHTML = 'Текущий год ' + year + month;
// document.body.appendChild(divB);

// divB.style.display = 'none';
// function blick(){
//     if(divB.style.display == 'none'){
//         divB.style.display = 'block';
//         divB.style.marginLeft = '20px'
//     }else{
//         divB.style.display = 'none';
//     };
// };

// let inter = setInterval(blick,600);

// divB.addEventListener('click', click2); 
// function click2(){    
//     if(divB.style.display == 'block'){
//         divB.style.display = 'block'
//         clearInterval(inter);
//         console.log('AAAA');
//     }if(divB.style.display == 'block'){
//         divB.style.display == 'none'
//         setInterval(blick,6000);
//         console.log('ABBB');
//     }
// }





//////////////////////////////////////////////////////////////////////////////////
//Цифровые часы
// let curientTime = document.createElement('div');
//     curientTime.className = 'curientTime';
//     curientTime.innerText = 'Текущее время : ';
// document.body.appendChild(curientTime);
// setInterval(function(){
//     let date = new Date();

//     let time = [
//         (date.getHours() < 10 ? '0' + date.getHours():date.getHours()),
//         (date.getMinutes() < 10 ? '0' + date.getMinutes():date.getMinutes()),
//         (date.getSeconds() < 10 ? '0' + date.getSeconds():date.getSeconds()),
//         (date.getMilliseconds() < 10 ? '0' + date.getMilliseconds():date.getMilliseconds()),
//     ].join(':');
//     document.getElementById('clock').innerHTML = time;
// },60);

// // Clicker
// let click = 0;

// function increment(){
//     click++;
//     redraw();
// }

// let bck = document.getElementById('buttonClick');
// let bcl = document.getElementById('buttonClear');
// let c = document.getElementById('Canvas');
// let cx = c.getContext('2d');

// bck.addEventListener('click', increment);
// bcl.addEventListener('click', clearNumClick)

// function redraw(){
//     cx.clearRect(0, 0, c.width, c.height);
//     cx.font = '45px Verdena';
//     cx.fillText('Number of Click = ' + click, 300, 40);
// }
// redraw();

// function clearNumClick(){
//     click = 0;
//     redraw();
// }

// // Slider
// let width = 1280;
// let position = 0;
// let counter = 1;

// let carousel = document.getElementById('carousel');
// let list = carousel.querySelector('ul');
// let listLength = carousel.querySelectorAll('li');

// let slider = carousel.querySelector('.next').onclick = function(){
//     if(position == -width*(listLength.length - counter)){
//         position = 0;
//         list.style.marginLeft = position + 'px';
//         counterSlides();
//     }else{
//         position = Math.max(position - width * counter, -width*(listLength.length - counter));
//         list.style.marginLeft = position + 'px';
//         counterSlides();
//     };   
// }
// setInterval(slider, 9000);
// carousel.querySelector('.prev').onclick = function(){
//     if(position == 0){
//         position = - width * (listLength.length - counter);
//         list.style.marginLeft = position + 'px';
//         counterSlides();
//     }else{
//         position = Math.min(position + width * counter, 0);
//         list.style.marginLeft = position + 'px';
//         counterSlides();
//     };    
// }
// let slideCounter = document.createElement('div');
//     slideCounter.className = 'slideCounter';
//     slideCounter.innerText = 'Номер слайда № ';
// document.body.appendChild(slideCounter);

// let slideCounterN = document.createElement('div');
//     slideCounterN.className = 'slideCounterN';

// function counterSlides(){    
//     let number = Math.abs(position/width);
//     slideCounterN.innerText = number + 1;
//     document.body.appendChild(slideCounterN);       
// }
// counterSlides();

// let start = document.getElementById('start');

// start.addEventListener('click', sliderClear);

// function sliderClear(){
//     position = 0;   
//     list.style.marginLeft = position + 'px';
//     counterSlides();   
// }

// // Список, добавление
// let clickL = 0;
// let addLi = document.getElementById('addLi');
// let dellLi = document.getElementById('dellLi');

// let ul = document.createElement('ul');
//     document.body.appendChild(ul);

// addLi.addEventListener('click', addListData);
// dellLi.addEventListener('click', dellListData);

// function addListData(){
//     clickL++;
//     let li = document.createElement('li');
//         li.innerText = clickL;
//     ul.appendChild(li);             
// }
// function dellListData(){
//     if(clickL <= 0){
//         clickL = 0;
//     }else{
//     clickL--;
//     ul.children[ul.children.length - 1].remove();
//     }
// };

// // Создание таблицы и добавление колонок
// let clickT = 0;
// let AddTd = document.getElementById('AddTd');
// let dellTd = document.getElementById('dellTd');
// let table = document.createElement('table');
// document.body.appendChild(table);

// AddTd.addEventListener('click', addTableData);
// dellTd.addEventListener('click', dellTableData);

// // Смена цвета фона кнопок - Начало.
// function random(number){
//     return Math.floor(Math.random() * (number + 1));
// }
// AddTd.onclick = function(){
//     let rndColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     AddTd.style.backgroundColor = rndColor;    
// }
// dellTd.onclick = function(){
//     let rndColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     dellTd.style.backgroundColor = rndColor;
// }
// // Изменение цвета кнопки при наведении мыши
// dellTd.onmouseover = function(){
//     let rndColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     dellTd.style.backgroundColor = rndColor;
// }
// AddTd.onmouseover = function(){
//     let rndColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     AddTd.style.backgroundColor = rndColor; 
// }
// addLi.onmouseover = function(){
//     let rndColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     addLi.style.backgroundColor = rndColor; 
// }
// dellLi.onmouseover = function(){
//     let rndColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     dellLi.style.backgroundColor = rndColor; 
// }
// // Смена цвета фона кнопок - Конец.


// let tr = document.createElement('tr');    
// table.appendChild(tr);

// let td = document.createElement('td');

// function addTableData(){
//     clickT++;
//     let td = document.createElement('td');
//         td.style.borderStyle = 'solid';
//         td.style.padding = '20px';
//         td.style.backgroundColor = 'white';
//         tr.appendChild(td);
//         td.innerText = clickT;    
// }
// function dellTableData(){
// if(clickT <= 0 ){
//     clickT = 0;    
// }else{
//     clickT--;
//     tr.children[tr.children.length - 1].remove();
//     td.innerText = clickT;    
//     }
// }
///////////////////////////////////////////////////////////////////////////////////

// 15.06.2021
// Clock
// let curientTime = document.createElement('div');
// curientTime.className = 'curientTime';
// curientTime.innerText = 'Текущее время : ';
// document.body.appendChild(curientTime);
// setInterval(function(){
//     let data = new Date();

//     let time = [
//         (data.getHours() < 10 ? '0' + data.getHours():data.getHours()),
//         (data.getMinutes() < 10 ? '0' + data.getMinutes():data.getMinutes()),
//         (data.getSeconds() < 10 ? '0' + data.getSeconds():data.getSeconds()),
//         (data.getMilliseconds() < 10 ? '0' + data.getMilliseconds():data.getMilliseconds()),
//     ].join(':');
//     document.getElementById('clock').innerHTML = time;
// },60);

// // Clicker
// let click = 0;

// function increment(){
//     click++;
//     redraw();
// }


// let btk = document.getElementById('buttonClick');
// let btl = document.getElementById('buttonClear');
// let c = document.getElementById('Canvas');
// let cx = c.getContext('2d');

// btk.addEventListener('click', increment);
// btl.addEventListener('click', clear);

// function redraw(){
//     cx.clearRect(0, 0, c.width, c.height);
//     cx.font = '45px Verdena';
//     cx.fillText('Click number = ' + click, 300, 80);
// }
// redraw();
// function clear(){
//     click = 0;
//     redraw();
// };

// // Slider
// let width = 1280;
// let position = 0;
// let count = 1;

// let carousel = document.getElementById('carousel');
// let list = carousel.querySelector('ul');
// let listLength = carousel.querySelectorAll('li');

// let slide = document.querySelector('.next').onclick = function(){
//     if(position == (-width * (listLength.length - count))){
//         position = 0;
//         list.style.marginLeft = position + 'px'; 
//         sliders()
//     }else{
//         position = Math.max(position - width*count, (-width * (listLength.length - count)));
//         list.style.marginLeft = position + 'px';    
//         sliders()
//     }
// };
// setInterval(slide,12000)
// document.querySelector('.prev').onclick =function(){
//     if(position == 0){
//         position = (-width * (listLength.length - count));
//         list.style.marginLeft = position + 'px';
//         sliders()
//     }else{
//         position = Math.min(position + width * count, 0);
//         list.style.marginLeft = position + 'px';
//         sliders()
//     }    
// };

// let slideCounter = document.createElement('div');
//     slideCounter.className = 'slideCounter';
//     slideCounter.innerText = 'Номер слайда № ';
//     document.body.appendChild(slideCounter);

// let slideCounterN = document.createElement('div');
//     slideCounterN.className = 'slideCounterN';
    

// function sliders(){
//     let counter = Math.abs(position/width);
//     slideCounterN.innerText = counter + 1;
//     document.body.appendChild(slideCounterN);    
// }
// sliders();

// let start = document.getElementById('start');
//     start.addEventListener('click', clearCounter);

// function clearCounter(){
//     position = 0;
//     sliders();
//     list.style.marginLeft = position + 'px';
// };
// // Добавление списка
// let addLi = document.getElementById('addLi');
// addLi.addEventListener('click', addList);
// let dellLi = document.getElementById('dellLi');
// dellLi.addEventListener('click', dellList);

// let ul = document.createElement('ul');
//     document.body.appendChild(ul);

// let click2 = 0;
// function addList(){    
//     click2++;
//     let li = document.createElement('li');
//     li.innerText = click2;
//     ul.appendChild(li);    
// };
// function dellList(){
//     if(click2 == 0){
//         click2 = 0;
//     }else{
//         click2--;
//         ul.children[ul.children.length - 1].remove();
//     };
// }

// // Добавления Таблицы
// let AddTd = document.getElementById('AddTd');
// AddTd.addEventListener('click', addTableData);
// let table = document.createElement('table');
//     document.body.appendChild(table);
// let tr = document.createElement('tr');
//     table.appendChild(tr);
// let click3 = 0;
// function addTableData(){
//     click3++;
//     let td = document.createElement('td');
//         td.innerText = click3;
//         tr.appendChild(td);    
// }
// let dellTd = document.getElementById('dellTd');
//     dellTd.addEventListener('click', dellTableData);
// function dellTableData(){    
//     if(click3 == 0){
//         click3 = 0;
//     }else{
//         click3--;
//         tr.children[tr.children.length - 1].remove();
//     };
// }
// // Смена цвета кнопок
// function random(number){
//     return Math.floor(Math.random() * (number + 1));
// }
// AddTd.onmouseover = function(){
//     let color = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     AddTd.style.backgroundColor = color;
// }
// dellTd.onmouseover = function(){
//     let color = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     dellTd.style.backgroundColor = color;
// };
// addLi.onmouseover = function(){
//     let color = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     addLi.style.backgroundColor = color;
// };
// dellLi.onmouseover = function(){
//     let color = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     dellLi.style.backgroundColor = color;
// };

// // Предотвращения поведения по умолчанию
// let form = document.querySelector('form');
// let fname = document.getElementById('fname');
// let lname = document.getElementById('lname');
// let submit = document.getElementById('submit');
// let para = document.querySelector('p');

// form.onsubmit = function(e){
//     if(fname.value === '' || lname.value === ''){
//         e.preventDefault();
//         para.textContent = 'Оба поля должны быть заполнены!';
//     }
// }
// Кнопки при нажатии меняют цвет
// let btns = document.querySelectorAll('input[type="button"]');

// for (let btn of btns) {
//     btn.addEventListener('click', function() {
//         for (let btn of btns) {
//             btn.style.backgroundColor = 'yellow';
//         }
//         btn.style.backgroundColor = 'transparent'
//     })
// }

//////////////////////////////////////////////////////////////////////////////////////
// 02.07.2021

//Clock
setInterval(function(){
    let date = new Date();
    let time = [
        (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()),
        (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()),
        (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()),
        (date.getMilliseconds()),
    ].join(':');
    document.getElementById('clock').innerText = time;
}, 60);

let curientTime = document.createElement('div');
    curientTime.className = 'curientTime';
    curientTime.innerText = 'Текущее время';
document.body.appendChild(curientTime);

// Clicker
let click = 0;

function increment() {
    click++;
    redraw();
};

let bck = document.getElementById('buttonClick');
let bcl = document.getElementById('buttonClear');
let c = document.getElementById('Canvas');
let cx = c.getContext('2d');

bck.addEventListener('click', increment);
bcl.addEventListener('click', clearClick);

function redraw() {
    cx.clearRect(0, 0, c.width, c.height);
    cx.font = '45px Verdena';
    cx.fillText('Number of click = ' + click, 300, 40);
}
redraw();

function clearClick() {
    click = 0;
    redraw();
};

// Slider
let width = 1280;
let position = 0;
let count = 1;

let carousel = document.getElementById('carousel');
let ul = carousel.querySelector('ul');
let li = carousel.querySelectorAll('li');

carousel.querySelector('.prev').onclick = function() {
    if (position == 0) {
        position = Math.min(- width * (li.length - 1));
        ul.style.marginLeft = position + 'px';
        slideCount();
    } else {
        position = Math.min(position + width * count, 0);
        ul.style.marginLeft = position + 'px';
        slideCount();
    };
};

carousel.querySelector('.next').onclick = function() {
    if (position == (- width * (li.length - 1))) {
        position = 0;
        ul.style.marginLeft = position + 'px';
        slideCount();
    } else {
        position = Math.max(position  - width * count, - width * (li.length - 1));
        ul.style.marginLeft = position + 'px';
        slideCount();
    };
};

let slideCounter = document.createElement('div');
    slideCounter.className = 'slideCounter';
    slideCounter.innerText = 'Текущий слайд № ';
document.body.appendChild(slideCounter);

let slideCounterN = document.createElement('div');
    slideCounterN.className = 'slideCounterN';
    

function slideCount() {
    let number = Math.abs (position / width);
    slideCounterN.innerText = number + 1;
    document.body.appendChild(slideCounterN);
}
slideCount();

let start = document.getElementById('start');
    start.addEventListener('click', clearSliders);

function clearSliders() {
    position = 0;
    slideCount();
    ul.style.marginLeft = position + 'px';
};

let btnpow3 = document.getElementById('pow4');
    btnpow3.addEventListener('click', pow4);

//     function pow(x, n) {
//         let result = x;
      
//         for (let i = 1; i < n; i++) {
//           result *= x;
//         }      
//         return result;
//       }
    
// function pow4() {
//       let x = prompt("x?", '');
//       let n = prompt("n?", '');
//       pow(x, n);
      
//       if (n < 1) {
//         alert(`Степень ${n} не поддерживается, используйте натуральное число`);
//       } else {
//         alert(pow(x, n));
//       }
// }
// function sum(...spr){
//     let sum = 0;
//     for (let n of spr) sum += n;
//     return sum;
// }
// console.log('Sum = ', sum(2, 4))

// console.log('Сумма чисел = ', sum(3,8,10));






// ==============================================
let todoList = document.querySelector('.todo__list');
let form = document.querySelector('.form');
let formInput = document.querySelector('.form__input');
let list = document.querySelector('.todo__list');
window.onload = render(getTodos, list);


async function getTodos() {
    let todosResponse = await fetch('http://localhost:3000/todos');
    let todosArr = await todosResponse.json();
    return todosArr;
};
async function render(getRequest, inElem) {
    let arrTodos = await getRequest();
    inElem.innerHTML = arrTodos.map(item => {
        if (item.completed === false) {
            return `<li class="todo__list-item" data-id="${item.id}" data-status="${item.completed}">${item.title}<div class="cancel"></div></li>`
        } else {
            return `<li class="todo__list-item active" data-id="${item.id}" data-status="${item.completed}">${item.title}<div class="cancel"></div></li>`
        }
    }).join('');
}
function valueInObj(elem) {
    return {
        'title': elem.value,
        'completed': false
    }
};

function todoChanging(elemStatus, elemText) {
    if (elemStatus === 'true') {
        return {
            'title': elemText,
            'completed': false
        }
    } else if (elemStatus === 'false') {
        return {
            'title': elemText,
            'completed': true
        }
    };
}

async function createTodo(value, inElem) {
    let todoResponse = await fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(valueInObj(value))
    });
    let getTodo = await todoResponse.json();
    let li = `<li class="todo__list-item active" data-id="${getTodo.id}" data-status="${getTodo.completed}">${getTodo.title}<div class="cancel"></div></li>`;
    inElem.innerHTML += li;
};

async function changeStatus(id, status, text) {
    let request = await fetch(`http://localhost:3000/todos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(todoChanging(status, text))
    });
};

async function deleteItem(id) {
    let request = await fetch(`http://localhost:3000/todos/${id}`, {
        method: 'DELETE'
    });
};

form.addEventListener('submit', event => {
    event.preventDefault();
    createTodo(formInput, todoList);
    form.reset();
});

list.addEventListener('click', event => {
    if (event.target.tagName === 'DIV') {
        let itemId = +event.target.closest('.todo__list-item').getAttribute('data-id');
        event.target.closest('.todo__list-item').remove();
        deleteItem(itemId);
    } else {
        event.target.classList.toggle('active');
        changeStatus(+event.target.getAttribute('data-id'), event.target.getAttribute('data-status'), event.target.textContent);
        if (event.target.getAttribute('data-status') === 'true') {
            event.target.setAttribute('data-status', false)
        } else {
            event.target.setAttribute('data-status', true)
        }
    }
});