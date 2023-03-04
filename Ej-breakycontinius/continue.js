// casos especificos de uso de break y continue
//hacen poco legibles el codigo, evitarlos

let lista = [1,2,3,4,5,6,677];

for(let i = 0; i <= lista.length; i++){

    if(lista[i] === 2){
        continue;
    //continue vuelve arriba cuando se cumple la condicion
    //esquivando en este cso el valor 2
    }
    console.log(lista[i]);

    if(lista[i] > 4){
        break;
    // break directamente sigue de largo y sale del bucle    
}
}

//generalmente cuando usamos let en un for,
// la variable solo se declara para lo que esta dentro del bucle,
//diferente de usar var, esta es general.

console.log(i) //tendria que aparecer como no declarada 
