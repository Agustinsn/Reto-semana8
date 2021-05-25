const url="https://60a4b6f2fbd48100179dcbe1.mockapi.io/Tareas"
//Para veriicar conexion con basedatos y obtener las tareas ya creadas
class comunicaciones{
    obtenerTarea(){
        return new Promise((resolve,reject)=>{
            fetch(url)
            .then(respuesta=>{
                return respuesta.json()
            })
            .then(productos=>{
                resolve(productos)
            })
            .catch(error=>reject(error))
    })
    }
    //Mandar el dato a la base de datos
    crearTarea(objetoTarea){
        return new Promise((resolve,reject)=>{
            let configuracion={
                method: 'POST',
                body: JSON.stringify(objetoTarea),
                headers:{'Content-Type':'application/json'}
            }
            fetch(url,configuracion)
            .then(respuesta=>respuesta.json())
            .then(tareaCreada=>resolve(tareaCreada))
            .catch(error=>reject(error))
        })

    }
}
export{
    comunicaciones
}