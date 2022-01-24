

let firstArray = [1, true, "pippo"];

console.log(firstArray);

let secondArray = ["pippo", "pluto", "paperino"];

console.log(secondArray.length);

for (let i = 0; i < secondArray.length; i++) {
    const element = secondArray[i];
    console.log(element);
}

for (const element of secondArray) {
    console.log(element);
}


secondArray.push("topolino");




let ultimoElemento = secondArray.pop()

console.log(secondArray);
console.log(ultimoElemento);


let primoElemento = secondArray.shift()

console.log(secondArray);

console.log(primoElemento);

secondArray.unshift("paperone");

console.log(secondArray);


console.log(secondArray[1])

secondArray[1] = "paperina"


console.log(secondArray);


let thirdArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let subArray = thirdArray.slice(2, 5);

// console.log(subArray);

// console.log(thirdArray);


// let subArray2 = thirdArray.splice(2, 3, 12, 13 ,14);


// console.log(subArray2);

// console.log(thirdArray);


let numeroPiuGrande = Math.max(5, 10, 2);

console.log(numeroPiuGrande);

let numeroPiuGrandeDellArray = Math.max(...thirdArray); //Math.max(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log("numero più grande dell'array", numeroPiuGrandeDellArray);


function stringPiuLunga(...stringhe) {
    let str = ""
    for (let i = 0; i < stringhe.length; i++) {
        const element = stringhe[i];
        if (str.length < element.length) {
            str = element;
        }
    }
    return str;
}

console.log(stringPiuLunga("pippo", "topolino", "pluto"));


function max(...numbers) {
    // let n = -Infinity;
    let n = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (n < element) {
            n = element;
        }
    }
    return n;
}

console.log(max(-100, -12, -3, -1001)); //=> 1001 


function min(...numbers) {
    let n = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (n > element) {
            n = element;
        }
    }
    return n;

}

console.log("min", min(-100, -12, 3, -1001)); //=> -1001 


function range(maxNumber) {
    let array1 = [];
    for (let i = 0; i <= maxNumber; i++) {
        array1.push(i)
    }
    return array1;
}

console.log(range(5)); //=> [0, 1, 2, 3, 4, 5]

function startingChar(stringArray) {
    let array1 = [];
    // for (let i = 0; i < stringArray.length; i++) {
    //     const element = stringArray[i];
    //     if (element !== "") {
    //         array1.push(element[0]);
    //     }
    // }
    for (const element of stringArray) {
        if (element !== "") {
            array1.push(element[0]);
        }
    }

    return array1;
}

let strings = ["Cosenza", "Genova", "Alessandria", ""]
console.log(startingChar(strings)); //=> ["C", "G", "A"]