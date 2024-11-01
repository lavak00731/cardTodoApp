import { useContext } from "react";
import { categoryContext } from "../context/categoryContext";
import { cardContext } from "../context/cardContext";
import { categoryInterface } from "../interfaces/categoryInterface";


export const Dashboard = () => {
  const {categoriesList, setCategoriesList, isLoading} = useContext(categoryContext);
  console.log(categoriesList);

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
        <ul className="lg:flex lg:flex-row">
          {
            categoriesList.map(({id, name}:categoryInterface) =>{
              return <li key={id}><h2 className="">{name}</h2></li>
            })
          }
        </ul>
      </main>
      <footer>

      </footer>
    </>
  )
}
