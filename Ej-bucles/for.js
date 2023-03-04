
/*
for(inicializacion; condicion; actualizacion)

i = i + 1;
i += 1;
i++;
  */


for(let i = 0; i < 10; i++){
    console.log(i)
}
console.log("\n")


// objto.length para saber la longitud

let lista1 = [1,3,5,7,9];
for(let i = 0; i <= lista1.length; i++){
    console.log(lista1[i])
}



// estructura for... of
// muestra los valores de la lista
for(let valor of lista1){
    console.log(valor)
}


// estructura forEach

lista1.forEach(valor => {
    console.log(valor)
})



//Estructura for...in
//recorre un objeto

let persona = {
    nombre: "juan",
    apellido: "cajade",
    edad: 20
}

let prop = "edad";

for(let propiedad in persona){
    console.log(persona[propiedad]);
    console.log("\n");
}
console.log(persona[prop]);


//generalmente cuando usamos let en un for,
// la variable solo se declara para lo que esta dentro del bucle,
//diferente de usar var, esta es general.

console.log(i); //tendria que aparecer como no declarada 
