import TaskItem from "./TaskItem"

const Task = ({tasks, onDelete}) => {
  return ( 
    <>
      {tasks.map((task) =>(
        <TaskItem key={task.id} task={task} onDelete={onDelete} />
      ))}
    </>
  )
}

export default Task
