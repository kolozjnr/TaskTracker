import TaskItem from "./TaskItem"

const Task = ({tasks, onDelete, addReminder}) => {
  return ( 
    <>
      {tasks.map((task) =>(
        <TaskItem key={task.id} task={task} onDelete={onDelete} addReminder={addReminder} />
      ))}
    </>
  )
}

export default Task
