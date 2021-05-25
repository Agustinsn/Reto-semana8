class Interface{
    imprimirTarea(arregloTarea){
        let contenido = document.getElementById("ParaLista")
        let tareasContenido='';
    arregloTarea.forEach(({id,Tarea})=> {
        let listaTarea =`<div class="col-7 mx-4 my-3 bg-primary text-white">
                        ${Tarea} 
                        </div>
                        <div class="form-check col-auto my-auto">
                        <input class="form-check-input" type="checkbox" style="background-color:red">
                        </div>
                        `;
    tareasContenido=tareasContenido+listaTarea;  
    })
    contenido.innerHTML=tareasContenido
    }
}
export {
    Interface
}