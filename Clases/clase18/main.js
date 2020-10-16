/*
function hola (callback){
    console.log('esta es la funcion llamadora')
    callback();
}

hola(function(){
    console.log('Soy un callback?')
})
*/
function hola (callback){
    console.log('Hola, esta es la funcion llamadora')
    callback();

}

function otroSaludo(){
    console.log('Como estas, soy callback')
}

hola(otroSaludo);

function suma(a, b, callback){
    console.log('estoy en suma');
    callback(a,b);
}
function sumar(a,b){
  return a +b
}
console.log(suma(5,4,sumar));
