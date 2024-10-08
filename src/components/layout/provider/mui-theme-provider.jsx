// src/components/layout/layout-provider.js
"use client";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "@/configs/theme/theme";
import createEmotionCache from "@/configs/theme/createEmotionCache";
import { Toaster } from "react-hot-toast";
import { store } from "@/lib/redux";
import { Provider } from "react-redux";

// Create an Emotion cache instance for client-side rendering
const clientSideEmotionCache = createEmotionCache();

const MUIThemeProvider = ({ children }) => {
  return (
    <>
      <CacheProvider value={clientSideEmotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Provider store={store}>{children}</Provider>
        </ThemeProvider>
      </CacheProvider>
      <Toaster />
    </>
  );
};

export default MUIThemeProvider;
