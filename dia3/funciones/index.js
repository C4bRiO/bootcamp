console.log("Welcome fellow");


function suma(){
  var x =1;
  var y = 2;

  console.log(x+y);
}

suma();


function resta(x,y){
  var resultado = x-y;

  console.log(resultado);
}

resta(15,2);



function miFuncion(nombre,apellido){
  var NombreCompleto = nombre+" "+apellido ;

  return NombreCompleto
}


var NombreCompleto = miFuncion("Ever","Leiva");

console.log(NombreCompleto);


//funciones anonimas

var miFuncion = function(){
  return 5+4;
}
console.log(miFuncion());




//funcion que se llama sola...
console.log(
  function(a,b){
    return a-b
  }(5,1)
);



//funcion anonima ES6
//let miVariable= "hola";
//(a,b) => {return "Arrow Function"}
