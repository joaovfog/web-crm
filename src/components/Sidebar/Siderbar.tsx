import { AdminPanelSettings, Settings } from "@mui/icons-material";
import { Badge, Divider, Drawer, IconButton } from "@mui/material";
import {
  MdOutlineGroup,
  MdOutlineReceiptLong,
  MdOutlineInsertChartOutlined,
  MdOutlineDashboard,
  MdOutlineRequestPage,
  MdOutlinePaid,
  MdOutlineEvent,
} from "react-icons/md";
import { useCrmLayoutContext } from "../../layout/crmLayout.context";

import { MenuItem } from "./components";

import "./style.css";

interface SidebarProps {
  show?: boolean;
  onClose: any;
}

export const Sidebar = (props: SidebarProps) => {
  const { show } = props;
  const { setShowSidebar } = useCrmLayoutContext();

  return (
    <>
      <Drawer
        className="drawer"
        sx={{
          width: 250,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 250,
            boxSizing: "border-box",
            borderRight: "none",
          },
          zIndex: 999,
          height: "100vh",
        }}
        variant="temporary"
        anchor="left"
        open={show}
        onBackdropClick={() => setShowSidebar(false)}
      >
        <div
          style={{
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <div
            style={{
              display: show ? "flex" : "none",
              flex: 1,
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: "#f2f5f9",
                width: 200,
                borderRadius: 4,
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              <div
                style={{
                  padding: "4px 8px 4px 8px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src="src/assets/images/logoRobustec.png"
                  alt="logo"
                  width={155}
                />
              </div>
            </div>
          </div>
        </div>
        <div style={{ paddingLeft: 16, paddingRight: 16 }}>
          <div style={{ marginBottom: 8 }}>
            {/* <MenuItem
              icon={<MdOutlineGroup size={24} className="icon" />}
              name={show ? "Clientes" : ""}
              to="/customers"
            />
            <MenuItem
              icon={<MdOutlineReceiptLong size={24} className="icon" />}
              name={show ? "Oportunidades" : ""}
              to="/proposals"
            /> */}
            <MenuItem
              icon={<MdOutlineGroup size={24} className="icon" />}
              name="Leads"
              to="/leads"
            />
            <MenuItem
              icon={<MdOutlinePaid size={24} className="icon" />}
              name="Negócios"
              to="/business"
            />
            <MenuItem
              icon={<MdOutlineEvent size={24} className="icon" />}
              name="Atividades"
              to="/activities"
            />
          </div>
          <Divider />
        </div>
      </Drawer>
      <div
        className="container"
        style={{
          width: 200,
          marginLeft: show ? 0 : -233,
          paddingLeft: 16,
          paddingRight: 16,
          transitionDuration: "300ms",
          borderRight: "1px solid #e0e0e0",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            marginBottom: 5,
            marginTop: 3,
          }}
        >
          <div
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: "#f5f5f5",
                width: 200,
                borderRadius: 4,
                marginBottom: 10,
                marginTop: 75,
              }}
            >
              <div
                style={{
                  padding: "4px 8px 4px 8px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <IconButton size="small" color="inherit">
                  <img
                    src="src/assets/images/user.png"
                    alt="user"
                    style={{ margin: "auto", height: 36, width: 36 }}
                  />
                </IconButton>
                <div style={{ marginLeft: 10 }}>
                  <div style={{ fontWeight: 500, fontSize: 16 }}>João Vitor</div>
                  <div
                    style={{ fontSize: 10, fontWeight: 500, color: "#006fb2" }}
                  >
                    ADMINISTRADOR
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: 14 }}>
          {/* <MenuItem
            icon={<MdOutlineGroup size={24} className="icon" />}
            name="Clientes"
            to="/customers"
          />
          <MenuItem
            icon={<MdOutlineReceiptLong size={24} className="icon" />}
            name="Oportunidades"
            to="/proposals"
          /> */}
          <MenuItem
            icon={<MdOutlineGroup size={24} className="icon" />}
            name="Leads"
            to="/leads"
          />
          <MenuItem
            icon={<MdOutlinePaid size={24} className="icon" /> }
            name="Negócios"
            to="/business"
          />
          <MenuItem
            icon={
              <Badge
                badgeContent={1}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                color="info"
              >
                <MdOutlineEvent size={24} className="icon" />
              </Badge>
            }
            name="Atividades"
            to="/activities"
          />
        </div>
        <Divider />
      </div>
    </>
  );
};

Sidebar.defaultPtops = {
  show: false,
};
