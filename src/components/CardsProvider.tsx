import { useEffect, useState, useContext, ReactNode } from "react"
import { cardContext } from "../context/cardContext";
import { appContext } from "../context/appContext";
import serviceGet from "../utils/serviceGet";


const CardsProvider = (props: { children: ReactNode }) => {
    const [isLoading, setisLoading] = useState<boolean>(false);
    const [tasks, setTasks] = useState([]);
    const context = useContext(appContext);

    const requestTasks = async(url:string, abortController:AbortController) => {
      const tasks = await serviceGet(url, abortController);
      setTasks(tasks);
    }

    useEffect(() => {
        const abortController = new AbortController();
        setisLoading(true);
        if(context.isAuthenticated) {
          requestTasks("http://localhost:5173/api/tasks", abortController);
        }        
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