import { createContext, ReactNode, useState } from "react";

type ContextType={
    isLoginPage:boolean,
    setIsLoginPage: React.Dispatch<React.SetStateAction<boolean>>
    }
export const LoginPageContext = createContext<ContextType|null>(null);

type ProviderType={
    children:ReactNode
}
export const LoginPageContextProvider:React.FC<ProviderType> =({children})=>{
    const [isLoginPage, setIsLoginPage]= useState(true);

    return(
        <LoginPageContext.Provider value={{isLoginPage,setIsLoginPage}} >
            {children}
        </LoginPageContext.Provider>
    )
}