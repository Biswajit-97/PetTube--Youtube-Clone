import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "../context/auth-context";
import GlobalStyle from "../styles/GlobalStyle";
import { darkTheme } from "../styles/theme";
import { ReactQueryConfigProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import SnackbarProvider from "react-simple-snackbar";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";

const config = {
  queries: {
    refetchOnWindowFocus: false,
    retry(failureCount, error) {
      if (error.status === 404) return false;
      else if (failureCount < 2) return true;
      else return false;
    },
  },
};

function AppProviders({ children }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ReactQueryConfigProvider config={config}>
        <Router>
          <AuthProvider>
            <SnackbarProvider>
              <ThemeProvider theme={darkTheme}>
                <GlobalStyle />
                <ReactQueryDevtools />
                {children}
              </ThemeProvider>
            </SnackbarProvider>
          </AuthProvider>
        </Router>
      </ReactQueryConfigProvider>
    </ErrorBoundary>
  );
}

export default AppProviders;
