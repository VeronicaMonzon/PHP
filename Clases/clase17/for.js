// probando ciclos

for(var i=0; i<10; i++){
    //alert('Hola probando el for: ' + i)
    document.write('<h2> Hola probando ciclo for: ' + i + '<h2>')
    i==27 ? console.log('Encontro a Agustin') : console.log('Se quedo dormido..')
    if(i==28){
        console.log('No se encuentra por una reunion 🥟🥟🥟🥟')
    }
    else {
        console.log('......')
    }

}
// array
var nombres=['wilber',' florencia','natalia']

var numeros=[1,2,3,4,5,6,7,8,9]
var verdad_mentira=[true, false, true]
var variante=['wilber','florencia',0,true]

console.log(nombres[0])
console.log(nombres)
console.log('mi Array/vector tiene: '+nombres.length+ ' Elementos')

for(var i = 0; i<nombres.length; i++){ 
    
    console.log(nombres[i])        

}
//.....indice    0          1          2

var nombres = ['wilber','florencia','natalia','Maria', 'Omar']

nombres.push('viviana')
nombres.push('Natalia')
nombres.push('Matias')
nombres.unshift('Santiago')
nombres.unshift('Marisa')

console.log(nombres)

nombres.shift() //elimina el primero

console.log(nombres)
nombres.shift() //elimina el primero
console.log(nombres)

nombres.pop()//elimina el ultimo
console.log(nombres)


nombres.splice(1,2)// con el primer valor.. es el valor del indice.. y el 2 es la cantidad de elementos a eliminar
console.log(nombres)
console.log('mi Array/vector tiene: '+nombres.length+ ' Elementos')

for(var i = 0; i<nombres.length; i++){
 
    
    console.log(nombres[i])
 

}
nombres.splice(1,0,'Alejandro')
