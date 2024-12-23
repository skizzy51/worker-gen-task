"use client"

import React, { createContext, useState, useContext, ReactNode } from "react"

// interface AppState {
//     agentSkillOpen: boolean
// }

interface AppContextType {
    agentSkillOpen: boolean
    setAgentSkillOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [agentSkillOpen, setAgentSkillOpen] = useState(false)

    return (
        <AppContext.Provider value={{ agentSkillOpen, setAgentSkillOpen }}>
            {children}
        </AppContext.Provider>
    )
}

// Custom hook for accessing the context
export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext)
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider")
    }
    return context
}

export default AppContext
