import { FaTimes } from "react-icons/fa"
const TaskItem = ({ task, onDelete, addReminder }) => {
  return (
    <div className={`event ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => addReminder(task.id)}>
      <h3>{task.text} <FaTimes onClick={ () => onDelete(task.id)} style={{color:'red'}} /> </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default TaskItem
