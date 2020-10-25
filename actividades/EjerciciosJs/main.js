

/* Ejercicio 1*/

alert('Ejercicio 1: Hello World');

/* Ejercicio 2*/

document.write('<h2> Ejercicio 2 - Hello World </h2>');

/* Ejercicio 3*/

document.write('<h3> Ejercicio 3 - Suma de (3 + 5)= '+ (3 + 5) + '</h3>');

/* Ejercicio 4*/

let nombre=prompt('Ejercicio 4, saludo: Por favor, ingrese su nombre');

document.write('<h4> Ejercicio 4 -  Hola ' + nombre + ' 😊 </h4>');

/* Ejercicio 5*/

let numero1=parseInt(prompt('Ejercicio 5, suma de dos numeros : Ingrese un número'));
let numero2=parseInt(prompt('Ingrese otro número, por favor'));

document.write('<h3> Ejercicio 5 - El resultado de la suma de los dos números es: ' + (numero1 + numero2));

/* Ejercicio 6*/

let numero3=parseInt(prompt('Ejercicio 6 el mayor entre dos números: Ingrese un número'));
let numero4=parseInt(prompt('Ejercicio 6 : Ingrese otro número, por favor'));
if (numero3>numero4){
    document.write('<h3> Ejercicio 6 - El número ' + numero3 + ' es mayor </h3>');
}else if(numero4>numero3){
    document.write('<h3> Ejercicio 6 - El número ' + numero4 + ' es mayor </h3>');
}else{
    document.write('<h3> Ejercicio 6 - Los números son iguales </h3>');
}
/* Ejercicio 7*/
let numero5=parseInt(prompt('Ejerccicio 7 el mayor de tres números: Ingrese un número.'));
let numero6=parseInt(prompt('Ejerccicio 7: Ingrese otro número.'));
let numero7=parseInt(prompt('Ejerccicio 7: Ingrese otro número, por favor.'));

let max=0;
max=Math.max(numero5,numero6,numero7);
document.write('<h3> Ejercicio 7 - El número ' + max + ' es el mayor </h3>');


/* Ejercicio 8*/

let numero8=parseInt(prompt('Ejercicio 8, calcular si es divisible por 2: Por favor ingrese un número'));

if(numero8 % 2 == 0){
    document.write('<h3> Ejercicio 8 - El número ' + numero8 + ': es divible por 2 </h3>');
}else{
    document.write('<h3> Ejercicio 8 - El número ' + numero8 + ': no es divible por 2 </h3>');
}

/* Ejercicio 9*/

let numero9=parseInt(prompt('Ejercicio 9: Por favor ingrese su edad'));

if(numero9>18){
    document.write('<h3> Ejercicio 9 - Usted ya puede conducir 🎉 </h3>');
}else{
    document.write('<h3> Ejercicio 9 - Usted no tiene edad para conducir 😟 </h3>');
}

/* Ejercicio 10*/
let numero10=parseInt(prompt('Ejercicio 10, calificaciones: Por favor ingrese una nota'));

if(numero10<=3){
    document.write('<h3> Ejercicio 10 - Calificación: Muy deficiente 😟 </h3>');
    
}else if(numero10>3 && numero10<=5 ){
    document.write('<h3> Ejercicio 10 - Calificación: Insuficiente 😟 </h3>');
   
}else if(numero10>5 && numero10<=6){
    document.write('<h3> Ejercicio 10 - Calificación: suficiente 🤨 </h3>');
   
}else if (numero10>6 && numero10<=7){
    document.write('<h3> Ejercicio 10 - Calificación: Bien 👍 </h3>');
  
}else if (numero10>7 && numero10<=9){
    document.write('<h3> Ejercicio 10 - Calificación: Notable 😊😊 </h3>');
 
}else if (numero10>9 && numero10<=10){
    document.write('<h3> Ejercicio 10 - Calificación: Sobresaliente 👏👏👏 </h3>');
   
}else{
    document.write('<h3> Ejercicio 10 - Calificación: No existe </h3>');
}

/* Ejercicio 11*/
let cadena='';
let texto='';


do {
    texto= prompt('Ejercicio 11: Por favor ingrese textos para concatenar, para terminar precione Cancelar');  
    if(texto!=null){
       if (cadena==''){
            cadena=cadena + texto;
       } else{
         cadena=cadena +'-'+ texto;
       } 
    }
} while (texto!=null);

document.write('<h3> Ejercicio - 11: '+ cadena + '</h3>');


/* Ejercicio 12 */

var numero11=parseInt('Ejercicio 12, se mostrará un rango entre dos números.\n Por favor ingrese un número:');
var numero12=parseInt('Ejercicio 12, se mostrará un rango entre dos números.\n Por favor ingrese otro número:');
let rango=0;
if (numero11 < numero12){
  for (let index = numero11; index < numero12; index++) {
      const element = array[index];
      
  }
}

/* Ejercicio 12 */

var numero11=parseInt(prompt('Ejercicio 12, se mostrará un rango entre dos números.\n Por favor ingrese un número:'));
var numero12=parseInt(prompt('Ejercicio 12, se mostrará un rango entre dos números.\n Por favor ingrese otro número:'));
document.write('<h3> Ejercicio 12, Mostrar rangos de numeros</h3>');
if (numero11 < numero12){
  for (let index = numero11; index <= numero12; index++) {
    document.write(' ' + index);
      
  }
}

/*Ejercicio 13*/

let nombres=['Fernando', 'Ciro',' Vito', 'Ayelen', 'Mabel',' Francisco', 'Lara'];

document.write('<h3> Ejercicio 13, Mostrar nombres almacenados en un array</h3>');

for (let i = 0; i < nombres.length; i++) {
   
    document.write(nombres[i] + '</br>');
}

/* Ejercicio 14*/
document.write('<h3> Ejercicio 14 - array con 10 nombres </h3>')
let nombres1=[];
for (let j = 1; j <= 10; j++) {
    nombres1[j]=prompt('Ejercicio 14, ingresar 10 nombres: por favor ingrese el nombre número ' + j );
    document.write('<h4>' + nombres1[j] + '</h4>');
}

/* Ejercicio 15 */
document.write('<h3> Ejercicio 15: función con dos parametros')
var precio=parseFloat(prompt('Calculo de precio con IVA, por favor ingrese el precio:'));
var iva=parseFloat(prompt('Por favor ingrese el iva'));
document.write('<h4> Precio:💲 ' + precio + ' IVA: ' + iva + ' ✔ Precio con IVA: 💲' + precioConIva(precio,iva) + '</h4>')


function precioConIva(precio,iva) {
    return precio * (iva/100) + precio
}





