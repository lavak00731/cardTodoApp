export interface AuthProviderInterface { 
    isAuthenticated: boolean | null;
    login: (isLogged: boolean) => void;
}