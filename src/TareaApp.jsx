import { useState } from 'react';

function TareaApp() {
    const [tareas, setTareas] = useState([])
    const [textValue, setTextValue] = useState('')

    const handleTextChange = (event) => {
        setTextValue(event.target.value)
    }

    const setTarea = () => {
        if (textValue === '') return;
        setTareas([...tareas, textValue])
        setTextValue('')
    }

    const deleteTarea = (index) => {
        setTareas(tareas.filter((tarea, i) => i !== index))
    }

    return (
        <>
            <div id="cajaTarea">
                <h1 id="cabezaTarea">Tareas</h1>
                <div className="input-group mb-3">
                    <input type="text" value={textValue} onChange={handleTextChange} className="form-control" placeholder="Ingrese una tarea" aria-label="Ingresar una Tarea... " />
                        <button onClick={setTarea} className="btn btn-outline-success" type="button">Añadir Tarea</button>
                </div>
                <ul className="list-group">
                    {tareas.map((tarea, index) => (
                        <li className="list-group-item list-group-item-action" key={index}>
                            <span className='tareaText'>{tarea}</span>
                            <a onClick={() => deleteTarea(index)} type="button" className="btn btn-outline-danger">Eliminar</a>
                        </li>
                    ))}
                    </ul>
            </div>
        </>
    );
};

export default TareaApp;