let txt_largo = "Hola soy juan, y tengo 18 años. Soy un arbol, pajaro y perro. Ademas el perro y los pajaros"

// para saber cuantas palabras o letras hay
console.log(txt_largo.match(/y/g)); //[ 'y', 'y', 'y', 'y', 'y' ] . Toma tambien las que se encuentran en palabras

//Exite la palabra con una palabra
console.log(txt_largo.includes("Hola"));//true

//si inicia con una palaba
console.log(txt_largo.startsWith("Hola")); //true

//si termina con una palabra
console.log(txt_largo.endsWith("Hola"));//false
