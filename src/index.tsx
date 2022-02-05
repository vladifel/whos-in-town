import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./styles/theme";
import LandingPage from "./components/LandingPage";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LandingPage />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
