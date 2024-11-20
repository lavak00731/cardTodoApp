import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { cardContext } from '../../context/cardContext.tsx';
import { Login } from '../../pages/Login.tsx';
import { Dashboard } from '../../pages/Dashboard.tsx';
import { Auth } from '../../components/Auth.tsx';
import { appContext } from '../../context/appContext.tsx';
import { categoryContext } from '../../context/categoryContext.tsx';
import tasks from "../Stubs/tasks";
import categoriesList from '../Stubs/categoriesList.ts';

interface AppFakeInterface {
    authenticated: boolean;
    //children: React.ReactNode;
}

//{ authenticated }: { authenticated: string }


const setCategoriesList = () => {};
const isLoading = false;

export const AppFake = ({authenticated}: AppFakeInterface) => {  return (
    <BrowserRouter>
                <appContext.Provider value={{ isAuthenticated: authenticated, login: () => {} }}>
                    <cardContext.Provider value={{tasks: tasks}}>
                        <categoryContext.Provider value={{categoriesList, setCategoriesList, isLoading}}>
                            <Routes>
                                <Route path="/" element={<Login />}></Route>
                                <Route  element={<Auth />}>
                                <Route path="/dashboard" element={<Dashboard />}></Route>
                                </Route>                        
                            </Routes>
                        </categoryContext.Provider>
                    </cardContext.Provider>
                </appContext.Provider>              
            </BrowserRouter>
  )
}


