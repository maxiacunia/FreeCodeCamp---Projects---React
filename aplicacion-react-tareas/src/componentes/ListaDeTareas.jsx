import React, {useState} from 'react'
import TareaFormulario from './TareaFormulario'
import '../hojas-de-estilo/ListaDeTareas.css'
import Tarea from './Tarea'


function ListaDeTareas(){

    //useState() es el hook que importamos
    //le pasamos un array vacio que es el valor inicial de tareas

    const [tareas, setTareas] = useState([]);
    
    const agregarTarea = tarea => {
        console.log(tarea);
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim(); {/** trim recorta espacio del principio y el final */}
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
    };

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter( tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    };

    const completarTarea = id => {
        const tareasActualizadas = tareas.map( tarea =>{
            if(tarea.id === id){
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    };


    return (
        <>
            <TareaFormulario onSubmit={agregarTarea}/>
            <div className='tareas-lista-contenedor'>
                {
                    tareas.map((tarea)=>
                        <Tarea
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            eliminarTarea={eliminarTarea}
                            completarTarea={completarTarea}
                        />
                    )
                }
            </div>
        
        </>
    );
}

export default ListaDeTareas;