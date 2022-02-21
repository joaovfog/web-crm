import { QueryClientProvider } from "react-query";

import { queryClient } from "./services/lib";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes } from "./routes";
import { ThemeProvider } from "@mui/material";
import { muiTheme } from "./theme";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      {/* <ThemeProvider theme={muiTheme}> */}
        <Routes />
      {/* </ThemeProvider> */}
    </QueryClientProvider>
  );
}

export default App;
