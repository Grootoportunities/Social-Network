import React from "react";
import { RootStoreType } from "./redux/redux-store";

export const StoreContext = React.createContext({} as RootStoreType);

type ProviderProps = { store: RootStoreType; children: React.ReactNode };

export const Provider: React.FC<ProviderProps> = ({ store, children }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
