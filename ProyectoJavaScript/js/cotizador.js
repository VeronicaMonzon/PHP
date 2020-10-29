    // obtengo el id del boton
   var btTotal=document.getElementById('calcular');
   // escucho el evento y llamo a la funcion
   btTotal.addEventListener('click',calcularTotal)
    // obtengo todos los valores que necesito
    var pase_dia=document.getElementById('pase_dia');
    var pase_completo=document.getElementById('pase_completo');
    var pase_dosdias=document.getElementById('pase_dosdias');
    var suma_total= document.getElementById('suma-total');
    var detalle=document.getElementById('lista-productos');
function calcularTotal(){
    detalle.textContent="";
    var xDia= pase_dia.value * 30 ;
    var Completo= pase_completo.value * 50 ;
    var p2dias= pase_dosdias.value * 45;
    total=xDia + Completo + p2dias;
    detalle.style.display="block"
    detalle.innerHTML+="<p>" + pase_dia.value + " Pase por dia: $" + xDia + "</p>";
    detalle.innerHTML+="<p>" + pase_completo.value + " Pase completo: $" + Completo + "</p>";
    detalle.innerHTML+="<p>" + pase_dosdias.value + " Pase por dos días: $" + p2dias + "</p>";
  //aca pongo el total en el html
  suma_total.textContent="$ " + total;
}