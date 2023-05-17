import './App.css';
import { useState } from "react";

function App() {
  function agregarTareas(tarea){
    setTareas([...tareas, { text: tarea }])
  }
  function trabajarSubmit(e){
    e.preventDefault();
    agregarTareas(e.target.texto1.value);
    e.target.texto1.value="";
  }

  const [tareas, setTareas] = useState([
    {
      id:'a',
      quehacer:'Abrir el local'
    }, 
    {
      id:'b',
      quehacer:'Sacar los cajones vacíos'
    }, 
    {
      id:'c',
      quehacer:'Sacar los cajones de fruta'
    }, 
    {
      id:'d',
      quehacer:'Revisar la verdura del día anterior'
    }, 
    {
      id:'e',
      quehacer: 'Limpiar el local'
    }]);
  
  return (
    <div>
      <ul>
        {tareas.map(task =>{
           return (
            <li key={task.id}>
               {task.quehacer} <input type="checkbox"></input>
             </li>
          )
        })}
      </ul>
      <div>
        <form onSubmit={trabajarSubmit}>
          <input type="text" name="texto1" placeholder="Ingrese una nueva tarea..." required></input>
          <input type="submit" value="Subir"></input>
        </form>
      </div>
    </div>
  );
}

export default App;
