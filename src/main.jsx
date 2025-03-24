import { Elements } from "@stripe/react-stripe-js";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import GlobalStyles from "./styles/globalStyles";
import AppProvider from "./hooks";
import stripePromise from "./config/stripeConfig";
import { ThemeProvider } from "styled-components";
import { standardTheme } from "./styles/themes/standard";
import { Router } from "./routes";
import { CartProvider } from './hooks/CartContext';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
      <AppProvider>
        <CartProvider>
          <Elements stripe={stripePromise}>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </Elements>
        </CartProvider>
      </AppProvider>
      <GlobalStyles />
      <ToastContainer autoClose={2000} theme="dark" />
    </ThemeProvider>
  </StrictMode>
);
