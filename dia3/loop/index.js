var i = 0;
/*var marcasAuto = [
  "Suzuki",
  "Mazda",
  "Toyota",
  "Nissan",
  "Kia"
];

for (var i = 0; i < marcasAuto.length; i++) {
  console.log( marcasAuto[i] );
}

//objeto JSON
var persona = {
  Nombre:"Juan",
  Apellido:"Perez",
  Edad:23,
  nombreCompleto : function(){ return this.Nombre+ " " +this.Apellido }
};*/


var txt= "";
var person = {fname:"John",lname:"Doe",age:25};
var x;

for (x in person){
  //txt +=  person[x] + " ";
  console.log(person[x]);
}
