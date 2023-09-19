"use client";
import Image from "next/image";
import React, { useState } from "react";

import AddProductInput from "@/components/Inputs/MinusAndPlus";
import Pricing from "@/components/ProductsComps/Pricing";
import { HiX } from "react-icons/hi";
import { useCartContext } from "@/components/Context/CartContext";

const Item = ({data}) => {
  const {adjustQty,removeFromCart} = useCartContext()

  const changeQty = (qty)=>{
    console.log(qty);
    adjustQty(data.item._id, qty)
  }
  return (
    <section className="grid grid-cols-[30%45%25%] pt-2 pb-4 border-b border-gray-300">
      <div class="flex-center">
          <div className="relative w-24 h-24 ">
            <Image
              src={`/uploads/${data.item.imageUrl}`}
              fill
              alt="testvam brat"
              className="object-contain"
            />
            <div className="absolute top-0 right-0 p-1 text-white bg-gray-700 rounded-full" onClick={()=> removeFromCart(data.item._id)}><HiX/></div>
          </div>
      </div>
      <div className="pl-3 pr-2 flex-center ">
        <h2 className="font-semibold ">{data.item.title}</h2>
        {/* <p className="">Допълнителна малка информация</p> */}
      </div>
      <div className="flex flex-col items-center font-medium">
        <div className="mb-2">
            {(data.item.price * data.qty).toFixed(2)} BGN
        </div>
        <div>
          <AddProductInput size="sm" setQty={changeQty} currQty={data.qty} />
        </div>
      </div>
    </section>
  );
};

export default Item;
