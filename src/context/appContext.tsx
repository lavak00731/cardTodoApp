import { createContext } from "react";

interface AuthProviderI { 
    isAuthenticated: boolean;
    login: (isLogged: boolean) => void;
}

export const appContext = createContext<AuthProviderI | null>(null);