import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Task from './components/Task';
import AddTask from './components/AddTask';
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState ([])

  useEffect(()=> {
    const getTask = async() =>{
      const getTaskFromServer = await fetchTask()

      setTasks(getTaskFromServer)
    }
    getTask()
  }, [])
  //Fect Tevent from server
  const fetchTask = async()=> {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json() 

    return data
  }

  //Togggle update Task
  //Fect Tevent from server
  const fetchTasks = async(id)=> {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json() 

    return data
  }
 const deleteTask = async(id) => {
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'DELETE'
  })

  setTasks(tasks.filter((task) => task.id !== id))
 }

 const addTask = async (task) => {
  const res = await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(task),
    
  })
  const data = await res.json()
  setTasks([...tasks, data])

  // const id = Math.floor(Math.random() * 1000) + 1
  // const newTask = {id, ...task}
  // setTasks([...tasks, newTask]) 
 }

 //set Reminder
 const addReminder = async (id) => {
  const taskToUpdate = await fetchTasks(id)
  const updTask = {...taskToUpdate, reminder: !taskToUpdate.reminder}

  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(updTask),
  })
  const data = res.json()
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !data.reminder} : task))
 }
 //Toggle form
 function toggleForm(){
  setShowAddTask(!showAddTask)
 }
  return (
    <div className="container">
      <Header toggleForm={toggleForm} showAdd={showAddTask} />
      {showAddTask && <AddTask addTask={addTask}/>}
      {tasks.length > 0 ? (<Task tasks={tasks} onDelete={deleteTask} addReminder={addReminder}/>) :  ('No Task at the Moment') }
    </div>
  );
}

export default App;
