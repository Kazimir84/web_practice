let click = 0;

function increment (){
    click++;
    redraw();
    console.log(click);
}


// Создание Текста и колличество кликов (завязано через 'Canvas')
let c = document.getElementById('Canvas');
var ctx = c.getContext("2d");

function redraw (){
    ctx.clearRect(0,0,c.width,c.height);
    ctx.font = '20px Verdena';
    ctx.fillText ('Клики :' + click,190,20);
}
redraw(); 