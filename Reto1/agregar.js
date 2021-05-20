const url = "https://60a4b6f2fbd48100179dcbe1.mockapi.io/lista";

class ToDo{
    constructor(tarea){
        this.tarea =tarea;
    }
    get imprimir(){
        return this.juntar();
    }
    juntar(){
        fetch(url,{
            method:'POST',
            body:JSON.stringify('lista'),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
        return this.tarea+"prueba";
    }
    }

document.getElementById('btn').addEventListener('click',function(e){
    e.preventDefault();
    let tareaIngresada= document.getElementById("input").value;
    const nuevaTarea= new ToDo(tareaIngresada)
    console.log(nuevaTarea.imprimir)
})