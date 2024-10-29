import { useState, ReactNode, useContext, useEffect } from 'react';
import { categoryContext } from '../context/categoryContext'; 
import { appContext } from '../context/appContext';
import serviceGet from '../utils/serviceGet'


export default function CategoriesProvider(props: { children: ReactNode }) {
    const [categoriesList, setCategoriesList] = useState<[]>([]);
    const [isLoading, setisLoading] = useState<boolean>(false);
    const context = useContext(appContext);

    const requestCategories = async (url: string, abortController: AbortController) => {
        const categories = await serviceGet(url, abortController);
        setCategoriesList(categories);
        setisLoading(false);
    }

    useEffect(() => {
      const abortController = new AbortController();
      setisLoading(true);
      if(context.isAuthenticated) {
        requestCategories("http://localhost:5173/api/categories", abortController);
      }      
      return () => {
        abortController.abort();
        setisLoading(false)
      }
    }, [])
    
    
    
    
    return (
        <categoryContext.Provider value={{categoriesList, setCategoriesList, isLoading}}>
            {props.children}
        </categoryContext.Provider>
    );
}