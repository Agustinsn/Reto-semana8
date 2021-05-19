class ToDo{
    constructor(tarea){
        this.tarea =tarea;
    }
    addTarea(tarea){
        const formlist=document.getElementById('form')
        const element=document.createElement('div');
        element.innerHTML='<div class="row"><h1>${tarea}</h1></div>';
    }
}
document.getElementById('btn').addEventListener('click',function(e){
    e.preventDefault();
    let tareaIngresada= document.getElementById("input").value;
    const tarea =new ToDo(tareaIngresada);
    addTarea(tarea);
})