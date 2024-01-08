"use client";

import { SetStateAction, createContext, useContext, useState } from "react";
import { IContext } from "@/interface/GlobalContextInterface";

const GlobalContext = createContext<IContext>({
  hamburgerMenu: false,
  cartMenu: false,
  setHamburgerMenu: function (value: SetStateAction<boolean>): void {
    throw new Error("Function not implemented.");
  },
  setCartMenu: function (value: SetStateAction<boolean>): void {
    throw new Error("Function not implemented.");
  }
});

export const GlobalContextProvider = ({ children }: any) => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const [cartMenu, setCartMenu] = useState(false);

  return (
    <GlobalContext.Provider
      value={{ hamburgerMenu, setHamburgerMenu, cartMenu, setCartMenu }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlolContext = () => useContext(GlobalContext);
 