var dias = []; //array vacio
var marcasAuto = [
  "Suzuki",
  "Mazda",
  "Toyota",
  "Nissan",
  "Kia"
];


//Retorna contenido del array
console.log(marcasAuto);
//Retorna la cantidad de elementos
console.log(marcasAuto.length);

//Retorna los elementos
console.log(marcasAuto[0]);
console.log(marcasAuto[1]);
console.log(marcasAuto[2]);
console.log(marcasAuto[3]);
console.log(marcasAuto[4]);
console.log(marcasAuto[5]); //undefined

//ordernar
console.log( marcasAuto.sort() );

//ordernar a la inversa
console.log( marcasAuto.sort().reverse() );

//agregar al ultimo lugar un elemento
marcasAuto.push("Ferrari");
console.log(marcasAuto);

//eliminar el ultimo elemento
marcasAuto.pop();
console.log(marcasAuto);

//Eliminar el primer elemento
marcasAuto.shift();
console.log(marcasAuto);

//borrar elemento del array conociendo el index
delete marcasAuto[0];
console.log(marcasAuto[0]);
console.log(marcasAuto[1]);
console.log(marcasAuto[2]);
console.log(marcasAuto[3]);
console.log(marcasAuto[4]);
console.log(marcasAuto[5]); //undefined


marcasAuto.unshift("JAC","JAM","Bugatti");


console.log(marcasAuto[0]);
console.log(marcasAuto[1]);
console.log(marcasAuto[2]);
console.log(marcasAuto[3]);
console.log(marcasAuto[4]);
console.log(marcasAuto[5]); //undefined







/*var motorescc = [ 25,58,96,104,54,1,9 ];

//ordernar
console.log( motorescc.sort() );

//ordernar a la inversa
console.log( motorescc.sort().reverse() );
*/
