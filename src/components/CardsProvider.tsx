import { useEffect, useState } from "react"
import { cardContext } from "../context/cardContext"
const CardsProvider = (props: { children: ReactNode }) => {
    const [isLoading, setisLoading] = useState<boolean>(false);
    const [tasks, setTasks] = useState([])
    const requestTasks = async(abortController:any) => {
        let tasksRequested
        try {
            const taskResponse = await fetch("http://localhost:5173/api/tasks", {
                signal: abortController.signal,
            })
            if(!taskResponse.ok) {
                throw new Error('Fetch Error')
            }
            setTasks(await taskResponse.json());
            setisLoading(false)
        } catch (error) {
            console.log(error)
        }
        return tasksRequested;
    }
    
    useEffect(() => {
        const abortController = new AbortController();
        setisLoading(true);
        requestTasks(abortController)
        console.log(tasks)
      return () => {
        abortController.abort();
      }
    }, [])
    
    
  return (
    <cardContext.Provider value={{tasks, isLoading}}>
        {props.children}
    </cardContext.Provider>
  )
}

export default CardsProvider