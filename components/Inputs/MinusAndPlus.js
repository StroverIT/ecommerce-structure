"use client"
import React, { useState, useEffect } from "react";
// Icons
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";



 


export default function AddProductInput({
  contClass,
  inputClass,
  currQty,
  setQty,
  size="xl"
}) {
  const changeHandler = (e) => {
    if (e.target.value < 1) e.target.value = 1;
    setQty(e.target.value);
  };
  return (
    <div
      className={` ${
        contClass ? contClass : ""
      } flex items-center justify-center border border-gray-200 rounded-3xl  px-4 `}
    >
        <div
      className="text-xs cursor-pointer"
        onClick={() => setQty((parseInt(currQty) < 2 ? 1 : parseInt(currQty) - 1))}
      >
        <AiOutlineMinus />
      </div>
      <input
        type="number"
        className={`w-10  text-center py-2  bg-transparent  `}
        value={currQty}
        id="qty"
        disabled
        onChange={changeHandler}
      />
<div className="text-xs cursor-pointer" onClick={() => setQty(parseInt(currQty) + 1)}>
        <AiOutlinePlus />
      </div>
    
    </div>
  );
}
