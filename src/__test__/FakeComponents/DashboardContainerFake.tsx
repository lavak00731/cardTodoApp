
import { Dashboard } from './../../pages/Dashboard';
import { cardContext } from '../../context/cardContext';
import { appContext } from '../../context/appContext';
import { categoryContext } from '../../context/categoryContext';
import  tasksFake from '../Stubs/tasksFake';
import categoriesListFake from '../Stubs/categoriesListFake';


export const DashboardContainerFake = ({setCategoriesList, isLoading}) => {
   
  return (

        <appContext.Provider value={{ isAuthenticated: true, login: () => {} }}>
            <cardContext.Provider value={{ tasks: tasksFake }}>
                <categoryContext.Provider value={{categoriesList: categoriesListFake, setCategoriesList:() =>{}, isLoading}}>
                    <Dashboard />
                </categoryContext.Provider>
            </cardContext.Provider>
        </appContext.Provider>              

  )
}
