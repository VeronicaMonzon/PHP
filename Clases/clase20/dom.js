console.dir(document)
console.log(document.URL)
console.log(document.title)
/*if(true){
    document.title='JavaScript'
}else{
    document.title='No encuentra Bootstrap'
}*/

console.log(document.doctype)
console.log(document.head)
console.log(document.body)
//console.log(document.all)
console.log(document.all[10])
//document.all[10].textContent='Hola probando insertar algo'

console.log(document.getElementById('main-header'))
console.log(document.getElementById('header-title'))

var encabezado=document.getElementById('main-header')

var edadJuan = 15
/*
if(edadJuan>18){
//muestra todo el contenido incluyendo si esta escondido: display none
encabezado.textContent = 'Juna podes entrar'
}else{
//puedo agregar etiquetas html
encabezado.innerHTML ='<h1>No podes</h1>'
alert('alerta intruso')
}
//solo el texto...que se muestra
//encabezado.innerText = 'Probando otro texto'
*/
var items=document.getElementsByClassName('list-group-item')
console.log(items)
console.log(items[2])
var dormidos=true;
if(dormidos){
    items[2].textContent='Sabrina Sampol'
}else{
    items[2].textContent='vamooss' 
}
items[2].style.fontWeight='bold'
items[2].style.backgroundColor='yellow'

for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor='yellow'

}

//por tag name

var header=document.getElementsByTagName('li')

var probandoBoton = document.getElementById('button')

probandoBoton.addEventListener('click', funcionF)

function funcionF(){

document.getElementById('header-title').style.backgroundColor = 'red'
document.getElementById('header-title').textContent = 'Color rojo'

var valorBoton = document.getElementById('inputUnico')

console.log(valorBoton.value)
    
console.log('hola probando el click del mouse')
console.log('Probando sin funcion onclick en botton')
var textoAgregado=document.getElementById('output')

var numero=valorBoton*2

textoAgregado.textContent=numero
}

var agregarOvaerlay= document.getElementById('agregarClase')

agregarOvaerlay.addEventListener('click',activarModal)

function activarModal(){
    document.getElementById('overlay').style.display='block'
    document.getElementById('modal').style.display='block'
    console.log('probando modal')
}

var tomarTexto = document.querySelector('input[type="text"]')

tomarTexto.addEventListener('keydown',duplicarTexto)

function duplicarTexto(e){

    console.log(e)
    console.log(e.target.value)

    var textoAgregado = document.getElementById('output')



textoAgregado.textContent = e.target.value                                                                                                        

}