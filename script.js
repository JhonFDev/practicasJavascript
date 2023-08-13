let SelectedColor = ["red", "blue"];
console.log(SelectedColor[0]);

let hour = 20;

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
}else

if (indicePalabra < 0) {
    indicePalabra = miRefran.indexOf("aprende");
  miRefran = miRefran.replace("aprende", "xxx")
}

console.log(miRefran);
console.log(longitudRefran);
console.log(novenaLetra);
console.log(ultimaaLetra);
console.log(indicePalabra);
console.log(miRefran.toUpperCase());
