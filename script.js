// let numero = 5;

// console.log("prima assegnazione della variabile numero", numero);

// numero = 7;

// console.log("seconda assegnazione della variabile numero",numero);

// const costante = 12;

// console.log("log costante", costante);

// // costante = 15;

// // console.log("secondo log costante", costante);


// var numero2 = 27;

// console.log("log var", numero2);


// numero2 = 134;

// console.log("secondo log var", numero2);
pippo = "Ciao ad alcuni!";

console.log("log pippo", pippo);

var pippo = "Ciao a tutti!";

console.log("secondo log pippo", pippo);

let pluto, paperino;


let operazione = 5 + 6;

console.log("log operazione", operazione);

if ((operazione > 10) || (operazione !== 11)) {
    console.log("sono passato dall'if")
} else {
    console.log("non sono passato dall'if")
}


let numero3 = 0;

if (numero3 > 0) {
    console.log('positivo');
} else if (numero3 === 0) {
    console.log('uguale a 0');
} else {
    console.log('negativo');
}


let numero4 = 16

if (numero4 > 20) {
    console.log('maggiore di 20');
} else if (numero4 > 10) {
    console.log('maggiore di 10');
} else if (numero4 >= 0) {
    console.log('maggiore o uguale a 0');
} else {
    console.log('minore 0');
}


let numero5 = 9;

if (numero5 % 2 === 0) {
    console.log('divisibile per 2');
}
if (numero5 % 3 === 0) {
    console.log('divisibile per 3');
}

console.log("WHILE");
let i = 0

while (i < 10) {
    console.log(i);
    i = i + 1;
}

console.log("DO..WHILE");
let j = 0

do {
    console.log(j);
    j = j + 1;
} while (j < 10);

console.log("FOR");

for (let k = 0; k < 10; k = k + 1) {
    console.log(k);
}

// k = k + 1;

// k++;

// k+=1;

// k = k + 2;

// k+=2;

// k = k - 3;

// k-=3;


let y = 10;

while (true) {
    if (y % 7 === 0) {
        console.log(y);
        break;
    }
    y++;
}

for (let i = 0; i <= 100; i++) {
    if (i === 0) {
        continue;
    }
    if (i % 7 === 0) {
        console.log(i);
    }

}


let v = ""

while (true) {
    v = v + "#"
    console.log(v);
    if (v === "#######") {
        break;
    }
}

for (let index = ''; index !== '########'; index += '#') {
    console.log(index);   
}


let stringa = '';
for (let i = 0; i < 7; i++) {
    stringa += '#'
    console.log(stringa)
}

for (let g = '#'; g < '########'; g+='#'){
    console.log(g);
    if (g=== '#######') {
        break;
    }
  
}

for (let i = 1; i <= 100; i++) {
    
    let str = '';
    if (i % 3 === 0) {
        str += 'Fizz'
    }
    if (i % 5 === 0) {
        str += 'Buzz'
    }
    console.log(str.length > 0 ? str : i);
}

let grid = '';

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        grid += '#'
    }
    grid+='\n'
}

console.log(grid);