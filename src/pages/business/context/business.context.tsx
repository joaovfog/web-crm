import { createContext, useContext, useState } from "react";

interface BusinessContextData {
  showBusinessFilter: boolean;
  setShowBusinessFilter: React.Dispatch<React.SetStateAction<boolean>>;
  showModalBusiness: boolean;
  setShowModalBusiness: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BusinessContext = createContext<BusinessContextData>(
  {} as BusinessContextData
);

export const BusinessProvider: React.FC = ({ children }) => {
  const [showBusinessFilter, setShowBusinessFilter] = useState(false);
  const [showModalBusiness, setShowModalBusiness] = useState(false);

  return (
    <BusinessContext.Provider
      value={{
        showBusinessFilter,
        setShowBusinessFilter,
        showModalBusiness,
        setShowModalBusiness,
      }}
    >
      {children}
    </BusinessContext.Provider>
  );
};

export function useBusinessContext() {
  return useContext(BusinessContext);
}
