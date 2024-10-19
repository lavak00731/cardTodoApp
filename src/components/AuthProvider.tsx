
import { useState, ReactNode } from 'react';
import { appContext } from '../context/appContext';

export default function AuthProvider(props: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    
    const login = (isLogged: boolean) => {
        setIsAuthenticated(isLogged);
    }
    
    return (
        <appContext.Provider value={{ isAuthenticated, login }}>
            {props.children}
        </appContext.Provider>
    );
}
