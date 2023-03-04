// casos especificos de uso de break y continue
//hacen poco legibles el codigo, evitarlos

let lista = [1,2,3,4,5,6,677];

for(i = 0; i <= lista.length; i++){

    /*if(lista[i] === 3){
        continue;
    //continue vuelve arriba cuando se cumple la condicion
    //esquivando en este cso el valor 3
    }*/
    console.log(lista[i]);

    if(lista[i] > 4){
        break;
    // break directamente sigue de largo y sale del bucle    
}
}
