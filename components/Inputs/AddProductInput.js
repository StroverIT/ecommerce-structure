"use client"
import React, { useState, useEffect } from "react";
// Icons
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";



  const sizeDictionary = {
    sm: ["text-sm", "px-1 "],
    xl: ["text-lg", "px-4 py-3 text-lg"],
  };


export default function AddProductInput({
  contClass,
  inputClass,
  currQty,
  setQty,
  size="xl"
}) {
  // ----- NOTE ---- This is working only with the cart, it's not working with the state
  const iconClass =
  `cursor-pointer h-full border-gray-400 border py-3 ${sizeDictionary[size][1]}  font-bold select-none`;

  const changeHandler = (e) => {
    if (e.target.value < 1) e.target.value = 1;
    setQty(e.target.value);
  };
  return (
    <div
      className={` ${
        contClass ? contClass : ""
      } flex items-center justify-center `}
    >
      <div className={iconClass} onClick={() => setQty((c) => parseInt(c) + 1)}>
        <AiOutlinePlus />
      </div>
      <input
        type="number"
        className={`w-full border border-gray-400 text-center py-2 ${sizeDictionary[size][0]} bg-transparent font-[300] ${
          inputClass ? inputClass : ""
        }`}
        value={currQty}
        id="qty"
        onChange={changeHandler}
      />

      <div
        className={iconClass}
        onClick={() => setQty((c) => (parseInt(c) < 2 ? 1 : parseInt(c) - 1))}
      >
        <AiOutlineMinus />
      </div>
    </div>
  );
}
