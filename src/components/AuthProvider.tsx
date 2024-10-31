
import { useState, ReactNode } from 'react';
import { appContext } from '../context/appContext';

export default function AuthProvider(props: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(localStorage.getItem('isLogged') === 'true'? true : false)
    
    // Flag parameter -> booleano
    const login = () => {
        localStorage.setItem('isLogged', 'true')
 
        setIsAuthenticated(true);
    }
    
    return (
        <appContext.Provider value={{ isAuthenticated, login }}>
            {props.children}
        </appContext.Provider>
    );
}
