import { useEffect, useState, useContext, ReactNode } from "react"
import { cardContext } from "../context/cardContext";
import { appContext } from "../context/appContext";


const CardsProvider = (props: { children: ReactNode }) => {
    const [isLoading, setisLoading] = useState<boolean>(false);
    const [tasks, setTasks] = useState([]);
    const context = useContext(appContext);

    const requestTasks = async(abortController: AbortController) => {
        if(context.isAuthenticated) {
          try {
            const taskResponse = await fetch("http://localhost:5173/api/tasks", {
                signal: abortController.signal,
            })
            if(!taskResponse.ok) {
                throw new Error('Fetch Error')
            }
            setTasks(await taskResponse.json());
          } catch (error) {
              console.log(error)
          }
        }
    }

    useEffect(() => {
        const abortController = new AbortController();
        setisLoading(true);
        requestTasks(abortController);
        
      return () => {
        abortController.abort();
      }
    }, []); // [] -> Se ejecute solo 1 vez cuando arranque la aplicación. Cierre la aplicación -> return
    
    // Mal
    // useEffect(() => {
    //   setTasks();
    // }, [tasks]);

  return (
    <cardContext.Provider value={{tasks, isLoading}}>
        {props.children}
    </cardContext.Provider>
  )
}

export default CardsProvider