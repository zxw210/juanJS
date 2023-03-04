

// /*

let a = 5;
let b = 5;  //son int
let c = "5"; // es un string 


// == es igual pero debil

/* === es igual pero fuerte, 
distinge la diferencia entre str e int por ejemplo 
*/

 
//    /*


if(a == b){
    console.log("a es igual a b. Debil \n")
}
if(a == c){
    console.log("a es igual a c. Debil \n")
}
if(a === b){
    console.log("a es igual a b. Fuerte \n")
}
if(a === c){
    console.log("a es igual a c. Fuerte \n")
}
else{
    console.log("a no es igual a c.\n")
}


//////////////////

/* != es diferente pero DEBIL
   !== es diferente pero FUERTE  */


//   /*


let d = 5;
let f = "5"; // es un string 


if(d != f){
    console.log("d es diferente a f. Debil \n")
}
else {
    console.log("d no es diferente a f. Debil \n") 
}
if(d !== f){
    console.log("d es diferente a f. Fuerte \n")
}
else{
    console.log("d no es diferente a f.\n")
}


/* > es mayor que 
   >= es mayor o igual que
   < es menor que
   <= es menor o igual que
   */
   let h = 5;
   let i = 7; 
   
   
   if(h > i){
       console.log("h es mayor a i \n")
   }
   if(h >= i) {
       console.log("h es mayor o igual que i \n") 
   }
   if(h < i){
       console.log("h es menor que i \n")
   }
   if(h <= i){
       console.log("h es menor o igual a i\n")
   }
   
   