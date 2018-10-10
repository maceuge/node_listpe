const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualizar el estado completado de una tarea', { descripcion, completado })
    .command('borrar', 'Borrar la tarea espesifica', { descripcion })
    .command('listar', 'Listar todas las tareas')
    .help()
    .argv;

module.exports = {
    argv
}