// "use strict"
// Inputs Ranges
const rangeTl = document.getElementById('tlr'),
      rangeTr = document.getElementById('trr'),
      rangeBl = document.getElementById('blr'),
      rangeBr = document.getElementById('brr');
// Inputs Results
const resultTl = document.getElementById('result-tlr'),
      resultTr = document.getElementById('result-trr'),
      resultBl = document.getElementById('result-blr'),
      resultBr = document.getElementById('result-brr');

const input = document.querySelectorAll('.input');
// console.log(input);
const cube = document.getElementById('cube');

const total = document.getElementById('totalResult');
const btn = document.getElementById('btn');

const btnReset = document.getElementById('btnReset');

const changeRadius = () => {
    resultTl.innerHTML = rangeTl.value;
    resultTr.innerHTML = rangeTr.value;
    resultBl.innerHTML = rangeBl.value;
    resultBr.innerHTML = rangeBr.value;

    cube.style.borderRadius = rangeTl.value + 'px ' + rangeTr.value + 'px ' + rangeBr.value + 'px ' + rangeBl.value + 'px';
}

const totalResult = () => {
    total.innerHTML = rangeTl.value + 'px ' + rangeTr.value + 'px ' + rangeBr.value + 'px ' + rangeBl.value + 'px '; 
}

btn.addEventListener('click', totalResult);

for(node of input) {
    node.addEventListener('input', changeRadius);
}

function resetResult(){
    if(totalResult !== 0) {
        resultTl.innerHTML = rangeTl.value = 0;
        resultTr.innerHTML = rangeTr.value = 0;
        resultBl.innerHTML = rangeBl.value = 0;
        resultBr.innerHTML = rangeBr.value = 0;
        cube.style.borderRadius = 0;
        total.innerHTML = 0;        
    }else{
       return totalResult;
    }
}
btnReset.addEventListener('click', resetResult);
