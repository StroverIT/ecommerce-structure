"use client"
import React, { useState } from 'react';
// Components
import Pricing from "@/components/ProductsComps/Pricing";
import AddProductInput from "@/components/Inputs/AddProductInput";

// Redux
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/actions/productActions";

// Interfaces
import ProductData from "@/interface/ProductData"

const Fourth = ({product, itemName}) => {

    const dispatch = useDispatch();

  const [currQty, setQty] = useState(1);
  
  const price = (product?.price * currQty)?.toFixed(2)?.split(".");
  
  const addProduct = ()=>{
    
    const productObj = {
      title: itemName,
      imageUrl: product.imageUrl,
      price: product.price,
      route: product.route,
      _id: product.item._id
    }
    
    dispatch(addToCart(productObj, currQty));
    
  }
    return (
        <section className="flex flex-col p-5 space-y-5">
        <section className="flex items-center justify-between border-b border-gray-bord">
          <div className="text-lg font-bold">Цена:</div>
          <div>
            {price[0] != "NaN"  ? (
              <Pricing price={price[0] || 0} priceDec={price[1] || 0} size="2xl" />
            ): "Зарежда се..."}
          </div>
        </section>
        <section className="flex flex-col justify-center h-full mx-auto sm:w-1/2 md:w-3/4">
          <div className="mb-1">
            <label htmlFor="qty" className="font-semibold text-gray-400">
              Количество:
            </label>
          </div>
          <AddProductInput setQty={setQty} currQty={currQty} />
          <button
            type="button"
            className={`w-full px-2 flex py-2  justify-center items-end font-semibold text-white  bg-cyan-500 mt-6 text-xl border border-cyan-500 hover:bg-transparent hover:text-cyan-500 transition-colors `}
            onClick={() => addProduct()}
          >
            Купи
          </button>
   
        </section>
      </section>
    );
}

export default Fourth;



       {/* Favourites div */}
          {/* {userData && !isFav && (
            <div
              className="flex items-center justify-center col-span-2 mt-6 transition-transform cursor-pointer group hover:-translate-y-1"
              onClick={() => addFavourites()}
            >
              <div className="inline-flex p-2 text-xl rounded-full bg-gray group-hover:text-white group-hover:bg-primary md:ml-5 ">
                <AiOutlineHeart />
              </div>
              <span className="ml-1 text-sm select-none group-hover:text-primary">
                Добави в любими
              </span>
            </div>
          )}
          {userData && isFav && (
            <div
              className="flex items-center justify-center col-span-2 mt-6 transition-transform cursor-pointer group hover:-translate-y-1"
              onClick={() => removeFavourites(product.item._id)}
            >
              <div className="inline-flex p-2 text-xl rounded-full bg-gray group-hover:text-white group-hover:bg-secondary md:ml-5 ">
                <AiOutlineHeart />
              </div>
              <span className="ml-1 text-sm select-none group-hover:text-secondary">
                Премахни от любими
              </span>
            </div>
          )} */}