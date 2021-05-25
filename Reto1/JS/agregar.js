import { comunicaciones } from './comunicacion.mjs';
import {Interface} from './interfaz.mjs'

let comunicacion = new comunicaciones()
let interfaz = new Interface()

let btn= document.getElementById("btn")

let getTarea=()=>{
    comunicacion.obtenerTarea()
    .then(tareas=>{
        interfaz.imprimirTarea(tareas)
    })
    .catch(err=>console.log(err))
}
getTarea();

btn.addEventListener('click',()=>{
    let lista= document.getElementById("input");
    let tareaIngresada={
        Tarea:lista.value
    }
   
    comunicacion.crearTarea(tareaIngresada)
    .then(tareaCreada=>{
        getTarea()
        lista.value="";
        console.log(tareaIngresada)
    })
    
  
})