import { Content } from "./content";
import { CrmLayoutProvider } from "./crmLayout.context";
import { Header } from "./header";
import { Sidebar } from "./sidebar";

interface CrmLayoutProps {
  children: React.ReactNode;
}

export const CrmLayout = (props: CrmLayoutProps) => {
  const { children } = props;

  return (
    <CrmLayoutProvider>
      <div>
        <Header />
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            height: "100vh",
          }}
        >
          <Sidebar />
          <Content>{children}</Content>
        </div>
      </div>
    </CrmLayoutProvider>
  );
};
