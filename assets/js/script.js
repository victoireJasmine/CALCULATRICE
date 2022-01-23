
//La déclaration et les secteurs du DOM
const $equal = document.querySelector('.equal');
const $display = document.querySelector('#display');
const $reset = document.querySelectorAll('.reset');
const $del = document.querySelector('.del');
const $function = document.querySelectorAll('.function');
const $operator = document.querySelectorAll('.operator');
const $number = document.querySelectorAll('.number');

let number1, number2, sign, result = 0;

/*** Les écouteurs d'évènement ***/
$number.forEach(element => {
    element.addEventListener('click', function(e){
        number(e);
    })
});

$operator.forEach(element => {
    element.addEventListener('click', function(e){
        operator(e);
    })
});

$function.forEach(element => {
    element.addEventListener('click', function(e){
        calcul_function(e);
    })
});

$reset.forEach(element => {
    element.addEventListener('click', function(e){
        reset(e);
    })
});
$equal.addEventListener("click",calcul);
$del.addEventListener("click",del);

/*** Fin */

//Function pour afficher à l'écran
function display(params) {
    if(["+","-","/","%","x"].includes($display.value)){
        $display.value = "";
    }

    if(result != 0 || $display.value==0){
        $display.value = "";
    }
    $display.value += params;
}

//Function pour récupérer un nombre
function number(e) {
    let elem = e.target.value;
    display(elem);
}

//Function pour récupérer un opérateur
function operator(e) {
    let elem = e.target.value;
    number1 = $display.value;
    sign = elem;
    $display.value="";
    display(elem);
}

//Function pour faire eds calcul avec des functions
function calcul_function(e) {
    let elem = e.target.value;
    let number = parseFloat($display.value);
    if(elem == "CARRE"){
        result = number*number;
    }
    else if(elem == "DIV"){
        result = 1/number;
    }
    else if(elem == "RACINE"){
        result = Math.sqrt(number);
    }
    $display.value="";
    display(result);
}

//Function pour réinitialiser l'écran à 0
function reset(e) {
    $display.value = 0;
}

//Function pour supprimer un caractère
function del() {
    let valueScreen = $display.value;
    valueScreen = valueScreen.slice(0, -1);
    if(!valueScreen){
        valueScreen = 0;
    }
    $display.value=valueScreen;
}

//Function pour calcul le resultat
function calcul() {
    number2 = $display.value;
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    switch(sign){
        case "+":
            result= number1+number2;
        break;
        case "-":
            result=number1-number2;
        break;
        case "/":
            result = number1 / number2;
        break;
        case "x":
            result = number1*number2;
        break;
        case "%":
            result = number1%number2;
        break;
        default:
            result = "error";
        break;
    }
    $display.value="";
    display(result);
}