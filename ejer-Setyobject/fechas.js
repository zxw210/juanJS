/*
Crea un archivo llamado fechas.js que contenga las siguientes líneas

- La fecha de hoy

- La fecha de tu nacimiento

- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

- Una variable que contenga el día de tu nacimiento

- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
*/
const hoy = new Date();
console.log(hoy);

const nacimiento = new Date(2000, 4, 25);
console.log(nacimiento);//25/5/2000

const comp = (hoy > nacimiento);
console.log(comp);

const date = nacimiento.getDate();
console.log(date);

const month = nacimiento.getMonth()+1;
console.log(month);

const year = nacimiento.getFullYear();
console.log(year);
