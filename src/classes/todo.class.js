export class Todo{


    static fromJson({id,tarea,completado,creando}){
        const tempTodo = new Todo(tarea);
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creando;
        return tempTodo;

    }

    constructor (tarea){

        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }
}