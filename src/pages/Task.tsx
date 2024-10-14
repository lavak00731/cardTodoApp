import { taskInterface } from "../interfaces/taskInterface"

export const Task:React.FC<taskInterface> = ({name}) => {
  return (
    <div>{name}</div>
  )
}
