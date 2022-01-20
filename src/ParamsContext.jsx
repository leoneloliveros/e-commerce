import React from 'react';
import { createContext, useContext, useState } from "react";

const ParamsContext = createContext()

export const ParamsProvider = ({ children, value = {} }) => {
  const [params, setParams] = useState(value);

  const propsToPass = {
    params,
    setParams
  }

  return (
    <ParamsContext.Provider value={propsToPass}>
      { children }
    </ParamsContext.Provider>
  )
}

export const useStateParams = () => {
  const context = useContext(ParamsContext)

  if (context === undefined) {
    throw new Error("useStateNumber must be used within a ParamsContext")
  }

  return context;
}