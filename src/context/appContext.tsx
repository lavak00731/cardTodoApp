import { createContext } from "react";
import { AuthProviderInterface } from "../interfaces/authProviderInterface";


export const appContext = createContext<AuthProviderInterface>({ 
    isAuthenticated: null,
    login: () => {}
});