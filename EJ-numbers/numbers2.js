let a = 3.2;
let b = 4.1;
//suma
console.log(a + b);//7.3

//resta
console.log(a - b);// -0.8999999999999995

//multiplicacion
console.log(a*b);//13.12

//division
console.log(a/b);//0.7804878048780489

//numbers en cadenas de txto
console.log(typeof a);// number
let a_s = a.toString();

console.log(a_s);//3.5
console.log(typeof a_s);// String

//redondeo de num decimales
let c = 3.3;
let d = c*3;

console.log(d);//9.899999999999999

//.toFixed() elegimos la cantidad de decimales
//PERO convierte a String el valor

console.log(d.toFixed(3));//9.900
console.log(typeof d.toFixed(3));//String

//.toPrecision(x) la cantidad de numbers que queremos que aparezcan
//contando tambien los decimales
//PERO convierte a String el valor
let e = 923442368718;
let f = 1832.213;

console.log(e.toPrecision(7));//9.234424e+11
console.log(f.toPrecision(5));//1832.2

console.log(typeof f.toPrecision(5));//String



