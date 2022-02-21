import React, { createContext, useContext, useState } from 'react'

interface CustomersListContextData {
  showCustomerFilter: boolean
  setShowCustomerFilter: React.Dispatch<React.SetStateAction<boolean>>
  setFilters: React.Dispatch<React.SetStateAction<any>>
  filters: any
}

export const CustomersListContext = createContext<CustomersListContextData>(
  {} as CustomersListContextData
)

export const CustomerListProvider: React.FC = ({ children }) => {
  const [showCustomerFilter, setShowCustomerFilter] = useState(false)
  const [filters, setFilters] = useState<any>({})

  return (
    <CustomersListContext.Provider
      value={{
        showCustomerFilter,
        setShowCustomerFilter,
        setFilters,
        filters
      }}
    >
      {children}
    </CustomersListContext.Provider>
  )
}

export function useCustomerListContext() {
  return useContext(CustomersListContext)
}
