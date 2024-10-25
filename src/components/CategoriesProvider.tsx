import { useState, ReactNode } from 'react';
import { categoryContext } from '../context/categoryContext'; 

export default function CategoriesProvider(props: { children: ReactNode }) {
    const [categories, setCategories] = useState<[]>([]);

    
    
    
    return (
        <categoryContext.Provider value={{categories, setCategories}}>
            {props.children}
        </categoryContext.Provider>
    );
}