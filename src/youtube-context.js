import { createContext, useState } from 'react';

export const YoutubeContext = createContext();

export function YoutubeContextProvider({ children }){
    const [selectedCategory, setSelectedCategory] = useState("New");
    
    return(
    <YoutubeContext.Provider 
    value={{selectedCategory, setSelectedCategory}}>
        {children}
    </YoutubeContext.Provider>
    )
}