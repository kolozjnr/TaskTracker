
const TaskItem = ({ task, onDelete }) => {
  return (
    <div className="event">
      <h3>{task.text} </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default TaskItem
