import { useContext } from "react";
import { categoryContext } from "../context/categoryContext";
import { cardContext } from "../context/cardContext";
import { categoryInterface } from "../interfaces/categoryInterface";
import { taskInterface } from "../interfaces/taskInterface";
import { CardComponent } from "../components/CardComponent";


export const Dashboard = () => {
  const {categoriesList, setCategoriesList, isLoading} = useContext(categoryContext);
  const { tasks } = useContext(cardContext);
  // const cacheadoSuma = useMemo(() => x + y, [x, y]);

  // const handleClick = useCallback(() => {
  //   calculate(x, y);
  // }, [calculate, x, y]);

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
                      return <CardComponent key={task.id} task={task} />
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
