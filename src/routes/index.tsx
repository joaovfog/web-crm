import { CrmLayout } from "../layout/crmLayout";
import { AppRouter } from "./Router";

export const Routes: React.FC = () => {
  return (
    <CrmLayout>
      <AppRouter />
    </CrmLayout>
  );
};
