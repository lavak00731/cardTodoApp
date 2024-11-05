import { useContext } from "react";
import { categoryContext } from "../context/categoryContext";
import { cardContext } from "../context/cardContext";
import { categoryInterface } from "../interfaces/categoryInterface";
import { taskInterface } from "../interfaces/taskInterface";


export const Dashboard = () => {
  const {categoriesList, setCategoriesList, isLoading} = useContext(categoryContext);
  console.log(categoriesList);
  const { tasks } = useContext(cardContext);
  console.log(tasks)

  if(isLoading) {
    return (<h1>Cargando...</h1>)
  }

  return (
    <>
      <header>
        <nav></nav>
      </header>
      <main aria-labelledby="h1" className="container mx-auto">
        <h1 id="h1" className="text-6xl mb-7 mt-7">Dashboard</h1>
        <ul className="lg:flex lg:flex-row lg:justify-between">
          {
            categoriesList.map(({id, name}:categoryInterface, i: number) =>{
              return <li className={ ( i !== categoriesList.length - 1) ? "lg:basis-1/6 border-r-2 px-1" : "lg:basis-1/6 px-1" }  key={id}>
                <h2 className="text-2l text-center">{name}</h2>
                {
                  tasks.map((task:taskInterface) =>{
                    if(name === task.category) {
                      return <div key={id} className="max-w-sm rounded overflow-hidden shadow-lg">                  
                              <div className="px-6 py-4">
                                <h3 className="font-bold text-xl mb-2">{task.name}</h3>
                                <p className="text-gray-700 text-base">
                                 {task.comment}
                                </p>
                              </div>
                              <div className="px-6 pt-4 pb-2">
                                {
                                  Array.from(task.tags).map((tag, i) => {
                                    return <span id={tag+i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
                                  })
                                }
                              </div>
                            </div>
                    }                    
                  })
                }
                </li>
            })
          }
        </ul>
      </main>
      <footer>

      </footer>
    </>
  )
}
