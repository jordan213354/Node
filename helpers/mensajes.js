const { resolve } = require('path')

require('colors')



const mostrarMenu = () => {
    return new Promise(resolve => {
          console.clear()
    console.log('========================='.green)
    console.log(' Seleccione una opcion'.green);
console.log('=========================\n'.green)


    console.log('1.Crear un tarea')
    console.log('2.Lista de tareas')
    console.log('3.Lista de tareas completadas')
    console.log('4.Lista de tareas pendientes')
    console.log('5.Completar tareas')
    console.log('6.Borrar tareas')
    console.log('0.Salir\n')
    
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Seleccione una opcion:', (opt) => {

        readline.close();
        resolve(opt);
    })
  
    })
   }
const pausa = () => {
    return new Promise(resolve => {
                const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout  
        })
   readline.question('\nPresione Enter para continuar\n', (opt) => {
       
       readline.close();
       resolve();
    }) 
    });

   
 
}
module.exports = {
    mostrarMenu,
  pausa
}