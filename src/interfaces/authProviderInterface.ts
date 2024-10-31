export interface AuthProviderInterface { 
    isAuthenticated: boolean | null;
    login: () => void;
}