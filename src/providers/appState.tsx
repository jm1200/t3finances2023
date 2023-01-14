export {};

import React, { createContext, ReactNode, useContext, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

interface AppState {
  selectedCategory: {
    name: string;
    id: string;
  };
  setSelectedCategory: Dispatch<
    SetStateAction<{
      name: string;
      id: string;
    }>
  >;
  editCategory: {
    name: string;
    id: string;
  };
  setEditCategory: Dispatch<
    SetStateAction<{
      name: string;
      id: string;
    }>
  >;
  addCategoryForm: boolean;
  setAddCategoryForm: Dispatch<SetStateAction<boolean>>;
  addSubcategoryForm: boolean;
  setAddSubcategoryForm: Dispatch<SetStateAction<boolean>>;
  resetAll: () => void;
  closeCategories: () => void;
}

const AppStateContext = createContext({} as AppState);

export const useAppState = () => useContext(AppStateContext);

export const AppStateProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCategory, setSelectedCategory] = useState({
    name: "",
    id: "",
  });
  const [editCategory, setEditCategory] = useState({
    name: "",
    id: "",
  });
  const [addCategoryForm, setAddCategoryForm] = useState(false);
  const [addSubcategoryForm, setAddSubcategoryForm] = useState(false);

  const resetAll = () => {
    setEditCategory({ name: "", id: "" });
    setAddCategoryForm(false);
    setAddSubcategoryForm(false);
  };

  const closeCategories = () => {
    setSelectedCategory({ name: "", id: "" });
  };

  const value = {
    selectedCategory,
    setSelectedCategory,
    editCategory,
    setEditCategory,
    addCategoryForm,
    setAddCategoryForm,
    addSubcategoryForm,
    setAddSubcategoryForm,
    resetAll,
    closeCategories,
  };

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
};
