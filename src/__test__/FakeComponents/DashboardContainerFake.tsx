import React from 'react';
import { Dashboard } from '../pages/Dashboard';
import { cardContext } from '../../context/cardContext';
import { appContext } from '../../context/appContext';
import { categoryContext } from '../../context/categoryContext';


export const DashboardContainerFake = () => {
  return (

        <appContext.Provider value={{ isAuthenticated: authenticated, login: () => {} }}>
            <cardContext.Provider value={{tasks: tasks}}>
                <categoryContext.Provider value={{categoriesList, setCategoriesList, isLoading}}>
                    <Dashboard />
                </categoryContext.Provider>
            </cardContext.Provider>
        </appContext.Provider>              

  )
}
