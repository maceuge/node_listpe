const { argv } = require('./config/yargs');
const color = require('colors');

// Comandos
// node app crear -d "Pasear al perro"
//*  Crear una tarea */
// node app listar
//*  Listar las tareas */

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        break;
    case 'crear':
        console.log('crear');
        break;
    case 'actualizar':
        console.log('actualizar');
        break;

    default:
        console.log('No es un comando valido'.red);
        break;
}