
import { useState, ReactNode } from 'react';
import { appContext } from '../context/appContext';

export default function AuthProvider(props: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(localStorage.getItem('isLogged') === 'true'? true : false)
    
    const login = (isLogged: boolean) => {
        if(isLogged) {
            localStorage.setItem('isLogged', 'true')
        }
        
        setIsAuthenticated(isLogged);
    }
    
    return (
        <appContext.Provider value={{ isAuthenticated, login }}>
            {props.children}
        </appContext.Provider>
    );
}
