"use client";

import { SetStateAction, createContext, useContext, useState } from "react";
import { ICartContext } from "@/interface/CartContext";

export const CartContext = createContext<ICartContext>({
  adjustQty: function (value: SetStateAction<boolean>): void {
    throw new Error("Function not implemented.");
  },
  removeFromCart: function (value: SetStateAction<boolean>): void {
    throw new Error("Function not implemented.");
  }
});



export const useCartContext = () => useContext(CartContext);
 