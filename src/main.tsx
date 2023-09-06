import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { store } from "./redux/store";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import Toolbar from "@mui/material/Toolbar";
import { ScrollTop } from "./components/ScrollToTopBtn";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/pokedex-app">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Toolbar id="back-to-top-anchor" />

          <App />
          <ScrollTop window={window}>
            <Fab size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
