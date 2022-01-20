import React from 'react';
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext()

export const ThemeProvider = (
  { 
    children, 
    value = {
      isDark: false, 
      navBarClass:'light', 
      buttonClass:'outline-dark'
    } 
  }
  ) => {
  const [themeConfig, setThemeConfig] = useState(value);

  const propsToPass = {
    themeConfig,
    setThemeConfig
  }

  return (
    <ThemeContext.Provider value={propsToPass}>
      { children }
    </ThemeContext.Provider>
  )
}

export const useStateTheme = () => {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error("useStateNumber must be used within a ThemeContext")
  }

  return context
}