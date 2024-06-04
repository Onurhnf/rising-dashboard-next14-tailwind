"use client";
import React, { createContext, ReactNode } from "react";

const TableContext = createContext({});

const TableProvider = ({ children }: { children: ReactNode }) => {
  return <TableContext.Provider value={{}}>{children}</TableContext.Provider>;
};

export { TableProvider, TableContext };
