export {};

import React, { createContext, useContext, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

interface AppState {
  activeCategory: string;
  setActiveCategory: Dispatch<SetStateAction<string>>;
}
const AppStateContext = createContext({} as AppState);

export const useAppState = () => useContext(AppStateContext);

export const AppStateProvider = ({ children }: { children: any }) => {
  const [activeCategory, setActiveCategory] = useState("");

  const value = {
    activeCategory,
    setActiveCategory,
  };

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
};
