let text = document.getElementById('lang');
    console.log(text);
let ukr = document.getElementById('ukr');
    console.log(ukr);

// Получить элемент контейнера
var btnContainer = document.getElementById("lang");

// Сделать все кнопки с class="btn" внутри контейнера
var btns = btnContainer.getElementsByClassName("form-check-label");
    console.log(btns);
// Выполните цикл по кнопкам и добавьте активный класс к текущей/нажатой кнопке
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active2");

    // Если нет активного класса
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active2", "");
    }

    // Добавить активный класс для текущей/нажатой кнопки
    this.className += " active2";
  });
}

//Всплывающее сообщение "Хочете, зателефонуємо вам за 30секунд"
let onmouse = document.getElementById('hiddenContent');
// console.log(onmouse);
let tool = document.getElementById('tooltip');
// console.log(tool);

onmouse.onmouseover = function(event) {
  let target = event.target;
  tool.style.opacity = '1';
}
onmouse.onmouseout = function(event) {
  let target = event.target;
  tool.style.opacity = '0';
};

let shake = document.getElementsByClassName('bree')[0];
setInterval(function(){
  if(shake.style.color == 'white'){
    shake.style.color = 'blue';
  } else if (shake.style.color == 'blue'){
    shake.style.color = 'red';
  }else if (shake.style.color == 'red'){
    shake.style.color = 'green';
  }else{
    shake.style.color = 'white';
  }
},360)

let bree = setInterval(function(){  
    if(shake.style.transform =='rotate(0)'){
       shake.style.transform = 'rotate(15deg)';
    }else if(shake.style.transform == 'rotate(15deg)'){
      shake.style.transform = 'rotate(0deg)';
    }else if(shake.style.transform == 'rotate(0deg)'){
      shake.style.transform = 'rotate(-15deg)'
    }else{
      shake.style.transform = 'rotate(0deg)'
    }
  },60);

let callbtn = document.getElementsByClassName('callBtn')[0];
let scrollup = document.getElementsByClassName('scrollup')[0];
let phone = document.getElementsByClassName('phone')[0];

var callbtnTime = setInterval(function(){
  if(callbtn.style.visibility == 'hidden'){
    callbtn.style.visibility = 'visible';
    scrollup.style.backgroundColor = 'orange';
    phone.style.visibility = 'hidden';
  }else{
    callbtn.style.visibility = 'hidden';
    scrollup.style.backgroundColor = 'rgba(71, 31, 15, 0.9)';
    phone.style.visibility = 'visible';
  }
},3000);
