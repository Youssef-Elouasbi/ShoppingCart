import { createContext, ReactNode, useContext, useState } from "react"

type DarkModeProviderProps = {
    children: ReactNode
}
type DarkModeContext = {
    Dark: boolean
    setDark: (value: boolean) => void
}

const DarkModeContext = createContext({} as DarkModeContext)


export function DarkModeProvider({ children }: DarkModeProviderProps) {
    const [Dark, setDark] = useState(false)

    return (<DarkModeContext.Provider value={{ Dark, setDark }}>
        {children}

    </DarkModeContext.Provider>)
}

export function useDarkMode() {
    return useContext(DarkModeContext)
}