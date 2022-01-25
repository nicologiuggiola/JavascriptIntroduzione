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
    if (step > 0) {
      for (let i = start; i < end; i++) {

          nextN = nextN + step;
  
          if(nextN <= end){
              funcArray.push(nextN);
          }
        }
        return funcArray;
    }
    else{
      for (let i = end; i < start; i++) {

          nextN = nextN + step;
  
          if(nextN >= end){
              funcArray.push(nextN);
          }
        }
        return funcArray;
    }
    
}

  console.log(ARange(1,10))

  function TheSumOf(array){
      let result = 0;
      for (let i = 0; i < array.length; i++) {
          const element = array[i];
          result = result + element;
      }

      return result;
  }

  console.log(TheSumOf(ARange(1,10)));

  let arrayToReverse = [1, 2, 3, 4, 5];

  function reversedArray(array){

      let newArray = [];
      let arrayN = array.length-1;
      for (let i = 0; i < array.length; i++) {
          newArray[i] = array[arrayN];
          arrayN--;
      }
      return newArray;

  }

  //console.log(reversedArray(arrayToReverse));

  function reversedArrayInPlace(array){

    let arrayN = array.length-1;
    //let counter = Math.floor((array.length-1)/2);
    let counter = (array.length-1) / 2
    if (counter % 2 != 0) {
        counter = counter - 0.5;
    }

    for (let i = 0; i < counter; i++) {
        let copy = array[arrayN];
        array[arrayN] = array[i];
        array[i] = copy;
        arrayN--;
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


