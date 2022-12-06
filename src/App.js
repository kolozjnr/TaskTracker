import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Task from './components/Task';
import AddTask from './components/AddTask';
function App() {
  const [tasks, setTasks] = useState ([
    {
     id: 1,
     text: 'Doctors Apointment',
     day: 'Feb 5th at 2pm',
     reminder: true,
    },{
     id: 2,
     text: 'Code with Traversy',
     day: 'Aug 10th at 2pm',
     reminder: true,
    },
    {
     id: 3,
     text: 'Learn React',
     day: 'Dec 1st at 9pm',
     reminder: false,
    },
 
 
 ])
 function deleteTask(id){
  setTasks(tasks.filter((task) => task.id !== id))
 }

 function addTask(task){
  console.log(task)
 }

 //set Reminder
 function addReminder(id){
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
 }
  return (
    <div className="container">
      <Header />
      <AddTask addTask={addTask} />
      {tasks.length > 0 ? (<Task tasks={tasks} onDelete={deleteTask} addReminder={addReminder}/>) :  ('No Task at the Moment') }
    </div>
  );
}

export default App;
