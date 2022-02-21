import { Box, Toolbar } from "@mui/material";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IconButton } from "../../components";
import { useCrmLayoutContext } from "../crmLayout.context";

export const Header = () => {
  const { showSidebar, setShowSidebar } = useCrmLayoutContext();

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        background: "#10b981",
      }}
    >
      <div style={{ background: "#f5f5f5" }}>
        <Toolbar sx={{ justifyContent: { xs: 'space-between', md: 'normal' } }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginRight: 4
            }}
          >
            <img
              src="src/assets/images/logoCIGAM.png"
              alt="logo"
              width={150}
              style={{ objectFit: 'contain' }}
            />
          </Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <HiMenu size={24} style={{ color: "#000000" }} />
          </IconButton>
          {/* <div>
            <img src="src/assets/images/logoRobustec.png" alt="logo" width={155} />
          </div> */}
        </Toolbar>
      </div>
    </Box>
  );
};
