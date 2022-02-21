import { useCrmLayoutContext } from "../crmLayout.context";
import { Sidebar as AppSidebar } from "../../components";

export const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useCrmLayoutContext();

  return (
    <AppSidebar show={showSidebar} onClose={() => setShowSidebar(false)} />
  );
};
