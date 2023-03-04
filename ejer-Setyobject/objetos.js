/*Crea un archivo llamado objetos.js que contenga las siguientes líneas

- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
*/
const yo = [{nombre: "juan", apellido: "Lopez", edad: "21", altura: "1.8", eresDesarrollador: true,}]

const MJ = [{nombre: "Pedro", apellido: "Martinez", edad: "22", altura: "1.9", eresDesarrollador: false}]
 
const MJ2 =[{nombre: "Matias", apellido: "Gonzalez", edad: "20", altura: "1.75", eresDesarrollador: true}]

const ar_set = [...yo, ...MJ, ...MJ2];

ar_set.sort((a, b) => b.edad - a.edad)
console.log(ar_set);
