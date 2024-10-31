import { useContext } from "react";
import { categoryContext } from "../context/categoryContext";
import { cardContext } from "../context/cardContext";
import Title from "antd/es/typography/Title";
import { categoryInterface } from "../interfaces/categoryInterface";


export const Dashboard = () => {
  const { Header, Footer, Content } = Layout;
  const {categoriesList, setCategoriesList, isLoading} = useContext(categoryContext);
  console.log(categoriesList);

  if(isLoading) {
    return (<h1>Cargando...</h1>)
  }



  return (
    
        /* {
            categoriesList.map(({id, name}: categoryInterface) => {
              return <div key={id}>
                      <h2 >{name}</h2>
                      
                      {
                        categoriesList.map()
                      }
                    </div>
            })
          } */
       <div>Dashboard</div>
  )
}
