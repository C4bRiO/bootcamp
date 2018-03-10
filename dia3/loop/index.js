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


var posts = [
  {
    titulo:"Programacion en JavaScript",
    texto: "Texto 1 sobre el titulo",
  },
  {
    titulo:"Introducción a AngularJS",
    texto: "Texto dos sobre el titulo",
  },
  {
    titulo:"API REST DE 0 A 48",
    texto: "Texto 2 sobre el titulo",
  }
];



posts.map(function(post){
  var titulo = post.titulo;
  var texto = post.texto;
  console.log(titulo);
  console.log(texto);
  console.log(post);
});
console.log("#####################################");
