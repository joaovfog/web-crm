import { Route, Routes } from "react-router-dom";
import { BusinessPage, CustomersListPage, HomePage, LeadsPage } from "../pages";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/customers" element={<CustomersListPage />} />
      <Route path="/business" element={<BusinessPage />} />
      <Route path="/leads" element={<LeadsPage />} />
    </Routes>
  );
};
