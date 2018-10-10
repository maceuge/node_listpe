const fs = require('fs');
const colors = require('colors');

let toDoList = [];


let borrarTarea = (descripcion) => {
    cargarDb();
    let index = toDoList.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });
    if (index >= 0) {
        toDoList.splice(index, 1);
        writeDb();
        return `La tarea fue eliminada con exito!`.green;
    } else {
        return `No se pudo eliminar la tarea ${descripcion}`.red;
    }
};

let actualizTarea = (descripcion, completado) => {
    cargarDb();

    let index = toDoList.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        toDoList[index].completado = completado;
        writeDb();
        return `La tarea fue actualizada con exito!`.green;
    } else {
        return `No se pudo actualizar la tarea ${descripcion}`.red;
    }
};


let getListado = () => {
    cargarDb();
    return toDoList;
};

const cargarDb = () => {
    try {
        toDoList = require('../db/data.json');
    } catch (error) {
        toDoList = [];
    }
};

const writeDb = () => {
    let data = JSON.stringify(toDoList);
    fs.writeFile('db/data.json', data, (err) => {
        if (err)
            throw new Error('No se pudo guardar la data', err);
        else
            console.log(`La tarea fue grabada con exito`.green);
    });
};

const crear = (descripcion) => {
    cargarDb();
    let toDo = {
        descripcion,
        completado: false
    }
    toDoList.push(toDo);
    writeDb();
    return toDo;
};

module.exports = {
    crear,
    cargarDb,
    getListado,
    actualizTarea,
    borrarTarea
}