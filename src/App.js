import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Task from './components/Task';
import AddTask from './components/AddTask';
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState ([
   
 
 ])
 function deleteTask(id){
  setTasks(tasks.filter((task) => task.id !== id))
 }

 function addTask(task){
  const id = Math.floor(Math.random() * 1000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask]) 
 }

 //set Reminder
 function addReminder(id){
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
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
