function divideByTwo(myNumber) {
    let result = myNumber / 2;
    return result;
}

console.log(divideByTwo(8));

let capitalize = function(myString) {
    return myString.toUpperCase();
}

console.log(capitalize('pippo'));

let multiplyBytwo = (myNumber) => myNumber * 2

function multiplyBy2 (myNumber) {
    let result = myNumber * 2
    return result;
}

let double = multiplyBy2;


console.log(double(20))


let pippo = 8;

function scriviPippo(){
    let pippo = "pippo"
    console.log(pippo)
}

scriviPippo();

console.log(pippo);


function multiplyBy4(firstNumber) {

    function multiplyBy2(secondNumber) {
        return secondNumber * 2;
    }

    let result = multiplyBy2(multiplyBy2(firstNumber));

    return result;
}

console.log(multiplyBy4(5));


function fibonacci(number){

    if(number === 0){
        return 0;
    }

    if (number === 1) {
        return 1;
    }

    return fibonacci(number - 1) + fibonacci(number - 2);
}


console.log(fibonacci(10));



function somma(primoNumero, secondoNumero){
    return primoNumero + secondoNumero;
}


let risultato = somma();

console.log(risultato);

function minus(primoNumero, secondoNumero) {
    if (secondoNumero === undefined) {
        return -primoNumero;
    } else {
        return primoNumero - secondoNumero;
    }
}


console.log(minus(20));


function multiplyBy(firstNumber, secondNumber = 2){
    return firstNumber * secondNumber;
}


console.log(multiplyBy(5, 7));

console.log(multiplyBy(7));



let variable = 4;



if (variable >= 0) {
    let multiplier = 2
    myFunction = function(number) {
        return number * multiplier;
    }
} else {
    let multiplier = 3
    myFunction = function(number) {
        return number * multiplier;
    }
}


let result = myFunction(4);

console.log(result);


function multiplyByNumber(moltiplicatore) {
    return (number) => number * moltiplicatore
}

let moltiplicaPer2 = multiplyByNumber(2);

let moltiplicaPer3 = multiplyByNumber(3);

let moltiplicaPer4 = multiplyByNumber(4);


console.log(moltiplicaPer2(5));

console.log(moltiplicaPer3(5));

console.log(moltiplicaPer4(5));


function applicaFunzioneSuNumero(mioNumero, funzioneDaApplicare) {
    return funzioneDaApplicare(mioNumero)
}


function DividiPer2(numero){
    return numero/2;
}

function DividiPer3(numero){
    return numero/3;
}


let res1 = applicaFunzioneSuNumero(8 , DividiPer2);

console.log(res1);


let res2 = applicaFunzioneSuNumero(8 , DividiPer3);

console.log(res2);



function min(firstNumber, secondNumber){
    // if (firstNumber < secondNumber) {
    //     return firstNumber
    // } else {
    //     return secondNumber
    // }

    return (firstNumber < secondNumber) ? firstNumber : secondNumber
}


console.log(min(5, 3));

console.log(min(-5, 3));


function isEven(number){
    if (number === 0){
        return true;
    }
    if (number === 1) {
        return false;
    }
    return isEven(Math.abs(number) - 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
// console.log(isEven(-1));
// // → undefined

let stringa="pippo"

console.log(stringa[stringa.length-1])


function countBs(str){
    let counter = 0;
    for (let i = 0; i <= str.length - 1; i++) {
        //let char = str[i];
        if (str[i] === 'B'){
            counter++
        }
    }
    return counter;
}

console.log(countBs("BBC")); // => 2


function countChar(str, char, caseSensitive){
    if (!caseSensitive) {
        str = str.toLowerCase();
        char = char.toLowerCase();
    }
    let counter = 0;
    for (let i = 0; i <= str.length - 1; i++) {
        //let char = str[i];
        if (str[i] === char){
            counter++
        }
    }
    return counter;

}

console.log(countChar("kakkerlak", "K", true)); // => 4


function fibonacciNonRicorsivo(number){
    let f0 = 0;
    let f1 = 1;
    let f = 0;

    if (number==0) {
        return f0;
    }
    if (number==1) {
        return f1;
    }

    for (let i = 2; i <= number; i++) {
        f = f1 + f0;
        f0 = f1;
        f1 = f;
    }

    return f
}

console.log(fibonacciNonRicorsivo(100))