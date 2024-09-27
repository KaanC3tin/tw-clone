import { createContext, useContext } from "react"


interface TabContextType {
    active: string;
    setActive: (id: string) => void;
    onChange: (id: string) => void;


}

export const TabContext = createContext<TabContextType | undefined>(undefined)

export const useTab = () => {
    const context = useContext(TabContext)
    if (!context) {
        throw new Error("Context yok!")
    }
    return context;
}



