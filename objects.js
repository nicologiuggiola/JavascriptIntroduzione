let point = {x: 2, y:3};

let student = {name: "Simone", surname: "Aloia", yob: 1997, married: false};

let student1 = {name: "Alessandro", surname: "Capogreco", yob: 2002, married: false};

let classe = {name: "Programmatore Frontend", students: [student, student1]}

let andrea = {name: "Andrea", surname: "Asioli", "classe di cui è docente": classe};

console.log(andrea["surname"]);

let nomeStudente1 = student1.name;

console.log(nomeStudente1);

student1.name = "pippo";

console.log(student1);


console.log(student1.titoloDiStudio);

student1.titoloDiStudio = "Diploma di Maturità";

console.log(student1);


for (const key in student1) {
    if (Object.hasOwnProperty.call(student1, key)) {
        const element = student1[key];
        console.log(key + ": " + element);
    }
}


console.log(JSON.stringify(andrea));


let oggettoInStringa = '{"name":"Andrea","surname":"Asioli","classe di cui è docente":{"name":"Programmatore Frontend","students":[{"name":"Simone","surname":"Aloia","yob":1997,"married":false},{"name":"pippo","surname":"Capogreco","yob":2002,"married":false,"titoloDiStudio":"Diploma di Maturità"}]}}';


let AndreaCopy = JSON.parse(oggettoInStringa);

console.log(AndreaCopy);


function CalcolaTriangoloRettangolo(catetoMaggiore, catetoMinore, ipotenusa){

    let per = catetoMaggiore + catetoMinore + ipotenusa;

    let ar = (catetoMaggiore * catetoMinore)/2

    return {perimetro: per, area: ar}
}

let dimensioniTriangolo = CalcolaTriangoloRettangolo(4, 3, 5);

console.log("il triangolo ha il perimetro di: " + dimensioniTriangolo.perimetro + " e l'area: " + dimensioniTriangolo.area);

let journal = [];

function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);

console.log(journal);


function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
      Math.sqrt((table[2] + table[3]) *
                (table[0] + table[1]) *
                (table[1] + table[3]) *
                (table[0] + table[2]));
  }
  
console.log(phi([76, 9, 4, 1]));

var JOURNAL = [
    {"events":["carrot","exercise","weekend"],"squirrel":false},
    {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
    {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
    {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
    {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
    {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
    {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
    {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
    {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
    {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
    {"events":["brushed teeth","computer","work"],"squirrel":false},
    {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
    {"events":["brushed teeth","work"],"squirrel":false},
    {"events":["cauliflower","reading","weekend"],"squirrel":false},
    {"events":["bread","brushed teeth","weekend"],"squirrel":false},
    {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
    {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
    {"events":["spaghetti","nachos","work"],"squirrel":false},
    {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
    {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
    {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
    {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
    {"events":["potatoes","exercise","work"],"squirrel":false},
    {"events":["pizza","ice cream","computer","work"],"squirrel":false},
    {"events":["lasagna","ice cream","work"],"squirrel":false},
    {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
    {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
    {"events":["potatoes","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","work"],"squirrel":false},
    {"events":["pizza","beer","work","dentist"],"squirrel":false},
    {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
    {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
    {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
    {"events":["lasagna","peanuts","work"],"squirrel":true},
    {"events":["pizza","work"],"squirrel":false},
    {"events":["potatoes","exercise","work"],"squirrel":false},
    {"events":["brushed teeth","exercise","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
    {"events":["pizza","cycling","weekend"],"squirrel":false},
    {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
    {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
    {"events":["pizza","peanuts","candy","work"],"squirrel":true},
    {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
    {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
    {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
    {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
    {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
    {"events":["bread","candy","work"],"squirrel":false},
    {"events":["potatoes","nachos","work"],"squirrel":false},
    {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
    {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
    {"events":["brussel sprouts","running","work"],"squirrel":false},
    {"events":["brushed teeth","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
    {"events":["candy","brushed teeth","work"],"squirrel":false},
    {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
    {"events":["bread","brushed teeth","weekend"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
    {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
    {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","work"],"squirrel":false},
    {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
    {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
    {"events":["brushed teeth","running","work"],"squirrel":false},
    {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
    {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
    {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
    {"events":["carrot","reading","weekend"],"squirrel":false},
    {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
    {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
    {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","work"],"squirrel":false},
    {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
  ];

  function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
      let entry = journal[i], index = 0;
      if (entry.events.includes(event)) index += 1;
      if (entry.squirrel) index += 2;
      table[index] += 1;
    }
    return table;
  }
  
  console.log(tableFor("peanuts", JOURNAL));
  // → [76, 9, 4, 1]

  console.log(phi([77, 8, 0, 5]));

  function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
      for (let event of entry.events) {
        if (!events.includes(event)) {
          events.push(event);
        }
      }
    }
    return events;
  }

  for (let event of journalEvents(JOURNAL)) {
    let correlation = phi(tableFor(event, JOURNAL));
    if (correlation > 0.1 || correlation < -0.1) {
      console.log(event + ":", correlation);
    }
  }

  for (let entry of JOURNAL) {
    if (entry.events.includes("peanuts") &&
       !entry.events.includes("brushed teeth")) {
      entry.events.push("peanut teeth");
    }
  }
  console.log(phi(tableFor("peanut teeth", JOURNAL)));

  function ARange(start, end, step = 1) {
    let funcArray = [start]
    let nextN = start;
    if (step >= 0) {
      for (let i = start; i < end; i++) {

          nextN = nextN + step;
  
          if(nextN <= end){
              funcArray.push(nextN);
          }
        }
        return funcArray;
    }
    else if (step < 0){
      for (let i = end; i < start; i++) {

          nextN = nextN + step;
  
          if(nextN >= end){
              funcArray.push(nextN);
          }
        }
        return funcArray;
    }
    
}

// let start = step > 0 ? min:max;

  console.log(ARange(1,10))

  function TheSumOf(...array){
      let result = array[0];
      for (let i = 1; i < array.length; i++) {
          //const element = array[i];
          result += array[i];
      }

      return result;
  }

  console.log(TheSumOf(...ARange(1,10)));

  let arrayToReverse = [1, 2, 3, 4, 5];

  function reversedArray(array){

      let newArray = [];
      for (let i = array.length-1; i >= 0; i--) {
          newArray.push(array[i])
      }
      return newArray;

  }

  console.log(reversedArray(arrayToReverse));

  function reversedArrayInPlace(array){

    let counter = (array.length-1)/2;
    for (let i = 0; i < counter; i++) {
        let copy = array[array.length-1-i];
        array[array.length-1-i] = array[i];
        array[i] = copy;
    }
    return array;

}

console.log(reversedArrayInPlace(arrayToReverse));

function arrayToList(array){
    let list = null;
    let counter = array.length-1
    for (let i = 0; i < array.length; i++) {
        const element = array[counter];
        list = {value: array[counter], rest: list};
        counter--;
    }
    return list;
}

console.log(arrayToList([1, 2, 3]));

function ListToArray(list){
    let newArray = [];
    for (let node = list; node; node = node.rest) {
        newArray.push(node.value);
    }
    return newArray;
}

console.log(ListToArray(arrayToList([1, 2, 3])));

function prepend(value, list){
    let newList = {value: value, rest: list};
    return newList;
}

console.log(prepend(10, prepend(20, null)))

function nth(list, number){
    if(!list){
        return undefined;
    }
    else if (number === 0) {
        return list.value;
    }
    else{
        return nth(list.rest, number-1);
    }
}

console.log(nth(arrayToList([1,2,3]), 1));

function DeepCompare(value1, value2){
  if(typeof value1 !== "object" || typeof value2 !== "object"){
    return value1 === value2;
  }
  else if(typeof value1 === "object" && typeof value2 === "object"){

    let value1Array = Object.keys(value1);
    let value2Array = Object.keys(value2);

    if (value1Array.length != value2Array.length) {
      return false;
    }
    else{
      let allValues1 = Object.values(value1);
      let allValues2 = Object.values(value2);
      for (let i = 0; i < value1Array.length; i++) {
        if (value1Array[i] != value2Array[i]) {
          return false;
        }
        else
        {
          if (typeof allValues1[i] !== typeof allValues2[i]) {
            return false
          }
        }
      }
    }

    return true;
  }
}

let obj = {here: {is: "an"}, object: 2};
console.log(DeepCompare(obj, {here: 2, object: 2}));


// FUNZIONE PURA - PRENDE UN DATO, RETURN UN DATO, NESSUN CAMBIO DI FLUSSO;
let firstNumber = 5;

function addOne(number){
  return number + 1;
}

let secondNumber = addOne(firstNumber);

console.log(secondNumber);

// SIDE EFFECT - il dato firstNumber è stato modificato.

function addOne(){
  firstNumber = firstNumber + 1;
  return firstNumber;
}

// CON OBJECT - REFERENCE

// let myAccount = {name: "Andrea Asioli", balance: 100};

// function addMoney(moneyToAdd, account){
//   account.balance = account.balance + moneyToAdd;
//   return account;
// }

// let updatedAccount = addMoney(50, myAccount);
// console.log(updatedAccount);

// SENZA SIDE EFFECT;

// let myAccount1 = {name: "Andrea Asioli", balance: 100};

// function addMoney(moneyToAdd, account){
//   // let tempAccount = {};
//   // tempAccount = Object.assign(tempAccount, account);
//   let tempAccount = {...account};

//   tempAccount.balance = tempAccount.balance + moneyToAdd;
//   return tempAccount;
// }

// let updatedAccount1 = addMoney(50, myAccount1);
// console.log(myAccount1);
// console.log(updatedAccount1);

// // ARRAY;
// let array5 = [7, 4, 100, 12];

// function doubleFirstElement(array){

//   // let tempArray = [];
  
//   // for (let i = 0; i < array.length; i++) {

//   //   tempArray.push(array[i]);
    
//   // }

//   let tempArray = [...array];

//   tempArray[0] = tempArray[0] * 2;
//   return tempArray;
// }

// let newArray2 = doubleFirstElement(array5);
// console.log(array5);
// console.log(newArray2);

// SHALLOW COPY

let userAndrea = {name: "Andrea Asioli", age: 43};
let myAccount1 = {user: userAndrea, balance: 100};


function ChangeAge(newAge, account) {
  let tempAccount = JSON.parse(JSON.stringify(account));
  tempAccount.user.age = newAge;
  return tempAccount;
}

let updated = ChangeAge(50, myAccount1);
console.log(updated);
console.log(userAndrea);

let pippo = {name: "pippo", city: "Topolinia"};

let pippo1 = pippo;

let pippo2 = {name: "pippo", city: "Topolinia"};

console.log(pippo === pippo2);

// LINKED LIST

let firstLLElement = {value: 5, nextElement: null, previousElement: null};

let secondLLElement = {value: 9, nextElement: null, previousElement: firstLLElement};

firstLLElement.nextElement = secondLLElement;

let thirdLLElement = {value: 8, nextElement: null, previousElement: secondLLElement};

secondLLElement.nextElement = thirdLLElement;

let fourthLLElement = {value: 7, nextElement: null, previousElement: thirdLLElement};

thirdLLElement.nextElement = fourthLLElement;

let node = firstLLElement;

// while (true) {
//   console.log(node.value);

//   if (node.nextElement != null) {
//     node = node.nextElement;
//   }
//   else
//   {
//     break;
//   }
// }

while (node !== null) {
  console.log(node.value);
  node = node.nextElement;
}