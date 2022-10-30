import React, {useState} from 'react'
import '../hojas-de-estilo/TareaFormulario.css'
import {v4 as uuidv4} from 'uuid';

function TareaFromulario(props){

    const [input, setInput] = useState('');

    const manejarCambio = e =>{
        setInput(e.target.value);
    };

    const manejarEnvio = e => {
        e.preventDefault();
        
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva);
    };


    return(
        <form 
            onSubmit={manejarEnvio}
            className='tarea-formulario'>
            <input
                className='tarea-input'
                type='text'
                placeholder='Escribe una tarea...'
                name='texto'
                onChange={manejarCambio}
            />            
            <button className='tarea-boton'>
                agregar tarea
            </button>
        </form>
    );
}

export default TareaFromulario;