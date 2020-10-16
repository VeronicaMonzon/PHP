var alumno = {
    //atributo o Key........Valor
              nombre: 'Alejandra',
              apellido: 'gonzales',
              edad: 15,
              entregoPractico: true,
              hobbies: ['cine','guitarra','videojuegos','rollers'],
              accion: function(a){
                  console.log('Alejandra esta tocando la guitarra')
                  console.log(a)
              }
      
    }
    
    console.log(alumno.nombre)
    console.log(alumno.apellido)
    console.log(alumno.hobbies)
    console.log(alumno.hobbies[2])