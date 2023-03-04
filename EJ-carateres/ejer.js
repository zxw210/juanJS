let nombre = "Juan"
let apellido = "Cajade"

let estudiante = nombre.concat(" ", apellido)
console.log(estudiante);

let estudianteMayus;
estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let num = estudiante.length;
console.log(num);

let nom = nombre.charAt(0);
console.log(nom);

let apll = apellido.length-1;
let ape = apellido.charAt(apll);
console.log(ape);

console.log(estudiante.replace(" ", ""));

let bole = estudiante.includes(nombre);
console.log(bole);
