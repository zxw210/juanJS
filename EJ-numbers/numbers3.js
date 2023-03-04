//Operador .valueOf() - otener valores numericosa partir de  literales
let a = 2;
let b = new Number(3);

console.log(a);//2
console.log(b);//Number 3 {}
console.log(a+b);//5

console.log(typeof b)// object
console.log(b.valueOf());//3
console.log(b.valueOf() + a.valueOf());//5

let str = new String("Hola soy un objeto de tipo String")
console.log(str);// [String: 'Hola soy un objeto de tipo String']
console.log(str.valueOf()); //Hola soy un objeto de tipo String

//NaN (Not a Nmber) - Infinity
let n = Number("adios");

console.log(n);// NaN
console.log(isNaN(n)); // true

let numerador = 19;
let divisor = 0;

console.log(numerador / divisor);//Infinito 

let divisor2 = null;
console.log(numerador / divisor2);//Infinito

//como convertir los str a numbers, parseInt y parseFloat
let number = "5.89";
let num2 = 17.2;

console.log(typeof number);//sting
console.log(number + num2);// 5.8917.2 (Error de concepto)

console.log(Number(number) + num2);//23.09

console.log(typeof parseInt(number));//number
console.log(parseInt(number));//5
console.log(parseFloat(num2));//17.2

//Numeros Hexadecimal
let hexnum = 0x3a5b7
//segido de la variable ponemos su base en este caso hex es 16
console.log(parseInt(hexnum, 16));//2330673

//otener los valores maximos y minimos en javascript
let min_precision = Number.EPSILON;
let min_valor_js = Number.MIN_VALUE;
let max_valor_js = Number.MAX_VALUE;

console.log(min_precision)//2.220446049250313e-16 (cantidad de decimales max)
console.log(min_valor_js)//5e-324 (dsp de este valor aparece como infinito)
console.log(max_valor_js)//1.7976931348623157e+308 (dsp de este valor aparece como infinito)

