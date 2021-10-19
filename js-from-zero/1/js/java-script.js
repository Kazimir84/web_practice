// document.write("JS say Hello");
        // console.info("JS say Hello");
        // console.log("JS say Hello");
        // console.error("JS say Hello");
        // console.warn("JS say Hello");
        // var num;
        // num = 5;
        var num = 5;
        num = 7;
        console.log ("Переменная " + num);
        // const num = 5;
        // num = 6;
        var number;
        number = 5;

        var num1 = 25.5;
        var num2 = 15;

       

        console.log("Вычетание "+ (num1+num2));

        var num3 = 5;
        num3 ++;
        console.log(num3);

        var str1 = Number("12");
        var str2 = Number ("2");
        console.log("Result " + (str1+str2));

        console.log ("Math: " + Math.PI);
        console.log ("Math: " + Math.E);
        console.log ("Math: " + Math.sin(60));
        console.log ("Math: " + Math.min(4,6,8,7,4,1,0,2));
        console.log ("Math: " + Math.max(1,5,6,7,89,2,1));

        var number = 15;
        var isHasHouse = true;

        if(number==5 && isHasHouse == true) {
            console.log("ok");
        }
        else if (number<10) {
            console.log ("Ok!");
        }
        else if (number==7) {
            console.log("7!");
        }
        else if (number>15) {
            console.log(">=15");
        }
        else {
            console.log("else");
        }

var stroka = "word1";

switch(stroka){
    case "4": console.log("Переменная со значением 4");
    break;
    case "word": console.log("Переменная со значением word");
    break;
    default:
        console.log("Defolt");
        break;
}

var arr = [5, true, "stroka",5.7,0,-7];
arr[3]="word";
console.log(arr.length);


var matrix = [
    [4,6,8,],["stroka",5.7,0,-7],[5, true]
]

matrix[1][0] = 90;
console.log (matrix);