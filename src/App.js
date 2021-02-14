import React, {useState} from 'react'
import { isEmpty } from 'lodash'
import shortid from 'shortid'

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [id, setId] = useState("")
  const addTask =(e) => {
    e.preventDefault()
    if (isEmpty(task)) {
      console.log("Task empty")
      return
    }
   const newTask ={
     id:shortid.generate(),
     name: task
     }

      setTasks([...tasks, newTask])
    setTask("")
  }
  const saveTask = (e) => {
    e.preventDefault()
    if (isEmpty(task)) {
      console.log("Task empty")
      return
    }
  

    const editedTasks = tasks.map(item => item.id === id ? { id, name: task } : item) 
    setTasks(editedTasks)
    setEditMode(false)
    setTask("")
    setId("")
  }
    const deleteTask = (id) => {
      const filteredTask = tasks.filter(task => task.id !== id)
      setTasks(filteredTask)
  }
  const editTask = (theTask) => {
    setTask(theTask.name)
    setEditMode(true)
    setId(theTask.id)
}

  return (
    <div className="container mt-10">
      <h1>Tareas de Ricardo</h1> 
      <hr/>
      <div className="row">
       <div className="col-8">
        <h4 className="text-center">Lista de Tareas</h4>
        <hr/>
        <ul className="list-gruop">
        {
          tasks.map ((task) => (
            <li className="list-gruop-item" key={task.id}>
            <span className="lead">{task.name} </span>
            <button 
              className="btn btn-danger btn sm float-right mx-2"
              onClick={() => deleteTask(task.id)}
            >
              Eliminar
            </button>
            <button 
              className="btn btn-warning btn sm float-right"
              onClick={() => editTask(task.id)}
            >
              Editar
              </button>
            </li>
          ))
        }
        </ul>
        </div>
          <div className="col-4">
          <h4 className="text-center">{ editMode ? "Modificar Tarea" : "Agregar Tarea" }</h4>
          <form onSubmit={ editMode ? saveTask : addTask }>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingresar tarea..."
              onChange={(text) => setTask(text.target.value)}
              value={task}
            />
            <button className={ editMode ? "btn btn-warning btn-block" : "btn btn-dark btn-block" }
            type="submit"
            >
              { editMode ? "Guardar" : "Agregar" }
            </button>
          </form>
          </div>
        </div>
    </div>
   
   )
}

export default App;
