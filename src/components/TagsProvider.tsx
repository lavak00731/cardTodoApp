import { useState, ReactNode } from 'react';
import { tagsContext } from '../context/tagsContext';

export default function TagsProvider(props: { children: ReactNode }) {
    const [tags, setTags] = useState<[]>([]);
    const {isAuthenticated} = useContext<AuthProviderInterface | null>(appContext);
    
    
    
    return (
        <tagsContext.Provider value={{tags, setTags}}>
            {props.children}
        </tagsContext.Provider>
    );
}