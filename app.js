require("colors")
const { guardarDB } = require("./helpers/guardarArchivo");
const { inquirerMenu, pausa , leerInput } = require("./helpers/inquirer");

const Tareas = require("./models/tareas");




console.clear();


const main = async() => {

 
   
    let opt = '';
    const tareas = new Tareas();

    // pausa();
    do {

        opt = await inquirerMenu();
        
        switch (opt) {

            case '1':
                const desc = await leerInput('Descripcion');
          tareas.crearTarea(desc)
                break;
            case '2':
                console.log(tareas.listadoArr);
                break;
        }
       
        
        // guardarDB(tareas.listadoArr);

        await pausa();
        
    }
    while( opt !== '0') }
 

main();