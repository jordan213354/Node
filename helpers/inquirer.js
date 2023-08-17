const inquirer = require('inquirer')
require('colors')



const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'que desea hacer ?',
     choices:[
        {
            value: '1',
            name: '1.crear tarea'
        },
          {
            value: '2',
            name: '2.listar tarea'
        },
          {
            value: '3',
            name: '3.tareas completadas'
        },
          {
            value: '4',
            name: '4.tareas pendientes'
        },
          {
            value: '5',
            name: '5.completar tareas'
        },
          {
            value: '6',
            name: '6.borrar tarea'
        },
          {
            value: '7',
            name: '7.salir'
        }
     ]
    }
]

const inquirerMenu = async () => {
    console.clear()

    console.log('========================='.green)
    console.log(' Seleccione una opcion'.green);
    console.log('=========================\n'.green)
    

  const {opcion} =  await inquirer.prompt(preguntas);
    return opcion;
}

const pausa = async() => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: 'presione enter para continuar'
        }
    ]
    
  await inquirer.prompt(question);
  }
  const leerInput = async (message) => {
    const question = [
      {
        type: 'input',
        name: 'desc',
        message,
        validate(value) {
          if (value.length === 0) {
            return 'por favor ingrese su valor'
          }
          return true;
        }
      }
    ];
     const { desc } = await inquirer.prompt(question);
  return desc;  
  };
 

module.exports = {
    inquirerMenu,
  pausa,
    leerInput
}