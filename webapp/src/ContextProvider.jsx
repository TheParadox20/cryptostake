import { createContext, useState } from "react";

export const Context = createContext();

export default function ContextProvider({children}){
    let User = useState(null)
    let Wallet = useState(null)
    return(
        <Context.Provider value={{User, Wallet}}>
            {children}
        </Context.Provider>
    )
}