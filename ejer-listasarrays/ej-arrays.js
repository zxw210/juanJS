let compras = ["leche", "huevos", "naranjas", "cereales", "manzanas"];

console.log(compras);

compras.push("aceite de girasol")
console.log(compras);

compras.pop();
console.log(compras);

let peliculas = [ 
    {titulo:"Los juegos del hambre", director:"Gary Ross", fecha: new Date("March 23, 2012")},
    {titulo:"Spider man 1", director:"Sam Raimi", fecha: new Date("May 15, 2002")},
    {titulo:"Venom", director:"Andy Serkis", fecha: new Date("Octuber 5, 2018")},
]



const pelisNuevas = peliculas.filter(objct => objct.fecha > new Date("January 1, 2010"))
console.log(pelisNuevas);

const listDirectors = peliculas.map(valor => valor.director)
console.log(listDirectors);

const listTitulos = peliculas.map(valor => valor.titulo)
console.log(listTitulos);


const listConcat = listDirectors.concat(listTitulos);
console.log(listConcat);

const listFP = [...listDirectors, ...listTitulos];
console.log(listFP);


