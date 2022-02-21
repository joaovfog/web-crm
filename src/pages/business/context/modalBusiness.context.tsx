import { createContext, useContext, useState } from "react";

interface ModalBusinessContextData {
  showModalBusiness: boolean;
  setShowModalBusiness: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalBusinessContext = createContext<ModalBusinessContextData>(
  {} as ModalBusinessContextData
);

export const ModalBusinessProvider: React.FC = ({ children }) => {
  const [showModalBusiness, setShowModalBusiness] = useState(false);

  return (
    <ModalBusinessContext.Provider
      value={{
        showModalBusiness,
        setShowModalBusiness,
      }}
    >
      {children}
    </ModalBusinessContext.Provider>
  );
};

export function useModalBusinessContext() {
  return useContext(ModalBusinessContext);
}
