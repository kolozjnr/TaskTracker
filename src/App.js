import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Task from './components/Task';
function App() {
  const [tasks, setTask] = useState ([
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
 function deleteTask(jd){
  console.log('delete'. id)
 }
  return (
    <div className="container">
      <Header />
      <Task tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
