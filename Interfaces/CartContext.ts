import React from "react";

export type ICartContext = {
    adjustQty: React.Dispatch<React.SetStateAction<boolean>>
    removeFromCart: React.Dispatch<React.SetStateAction<boolean>>

  }

