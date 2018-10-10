const { argv } = require('./config/yargs');
const color = require('colors');
const { crear, getListado, actualizTarea, borrarTarea } = require('./tareas/por-hacer');

// Comandos
// node app crear -d "Pasear al perro"
//*  Crear una tarea */
// node app listar
//*  Listar las tareas */

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        let listado = getListado();
        console.log('================ Tareas Por Hacer ================'.rainbow);
        for (const tarea of listado) {
            console.log('Tarea: '.yellow + tarea.descripcion);
            console.log('Estado: '.yellow + color.cyan(tarea.completado));
            console.log('=================================================='.rainbow);
        }
        break;
    case 'crear':
        let tarea = crear(argv.descripcion);
        // console.log(tarea);
        break;
    case 'actualizar':
        let actualizado = actualizTarea(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = borrarTarea(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('No es un comando valido'.red);
        break;
}