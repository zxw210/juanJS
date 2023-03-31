 /*Crea un archivo JS que contenga las siguientes líneas

 Una función sin parámetros que devuelva siempre "true"

 Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
 Una función generadora de índices pares automáticos */

 let v = true;

 strue(v);

 function strue(Pv){
console.log(Pv);
 }


 function tru(){
    return true;
}
console.log(tru(true));

setTimeout(function asincr(promes){
    console.log("Hola soy una promesa");
}, 5000)


function* generID(){
let id=0;
while(true){
    id++;
    if(id%2===0){
    yield id; //yield como return pero vuelve a entrar en la funcion cuando se lo pide
    }
    if(id>10){
     return
    }
}
}
let gen=generID();

console.log(gen.next().value); //2
console.log(gen.next().value); //4
console.log(gen.next().value); //6
console.log(gen.next().value); //8
console.log(gen.next().value); //10

