var nota = parseInt(prompt('ingrese un numero del 1 al 7 para el dia de al semanas'))



switch (nota){

    case 1:
        console.log('lunes')
        document.write('ha elegido el dia Lunes...🧉')
        break
    case 2:
        console.log('martes')
        break
    case 3:
        console.log('miercoles')
        break
    case 4:
        console.log('jueves')
        break
    case 5:
        console.log('Viernes...')
        document.write('Es viernes.. 🍕🍕🍕🍕')
        alert('vamoooss!!!! 🥗🥗🥗🥗')
        break
    default:
        console.log('no eligio un dia de la semana')

}