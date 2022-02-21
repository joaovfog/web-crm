import { createContext, useContext, useState } from "react";

interface CrmLayoutContextData {
    showSidebar: boolean
    setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

export const CrmLayoutContext = createContext<CrmLayoutContextData>(
    {} as CrmLayoutContextData
)

export const CrmLayoutProvider: React.FC = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(true)

    return (
        <CrmLayoutContext.Provider
            value={{
                showSidebar,
                setShowSidebar
            }}
        >
            {children}
        </CrmLayoutContext.Provider>
    )
}

export function useCrmLayoutContext() {
    return useContext(CrmLayoutContext)
}