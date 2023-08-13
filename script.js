let SelectedColor = ["red", "blue"];
console.log(SelectedColor[0]);

let hour = 11;

if (hour >= 6 && hour < 12) {
  console.log("good morning");
} else if (hour >= 12 && hour < 18) {
  console.log("good afternoon");
} else console.log("good evening");

// String Practica #1
let miRefran;
miRefran = "El que sabe, sabe; y el que no, aprende";

let longitudRefran = miRefran.length;

let novenaLetra = miRefran[8];
let ultimaaLetra = miRefran[miRefran.length - 1];
let indicePalabra = [miRefran.indexOf("otra")];

if (indicePalabra >= 0) {
  miRefran = miRefran.replace("que", "xxx");
} else if (indicePalabra < 0) {
  indicePalabra = miRefran.indexOf("aprende");
  miRefran = miRefran.replace("aprende", "xxx");
}

console.log(" ");
console.log("String: Pratica #1");
console.log(miRefran);
console.log(longitudRefran);
console.log(novenaLetra);
console.log(ultimaaLetra);
console.log(indicePalabra);
console.log(miRefran.toUpperCase());
console.log(" ");



//Arrays Practica #1
let myArray = [12, "hola", true];

myArray[0] = "hamburguesa";
myArray[1] = "piano";

myArray.unshift = "sushi";

var arrayString = myArray.join('-')
console.log(" ");
console.log("Arrays: Pratica #1");
console.log(myArray);
console.log("Arrays con guion");
console.log(arrayString);
console.log(" ");

var mixedArray = ["Hola", 42, true, null, { nombre: "Juan", edad: 25 }, ["manzana", "naranja"]];
console.log(mixedArray);
console.log(" ");