"use client";
import React, { useEffect, useState } from "react";

// Icons
import { IoIosFunnel } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

import { usePathname } from "next/navigation";

// Components
import Product from "@/components/ProductsComps/Product";
import Pagination from "@/components/ProductsComps/Pagination";

// Contexts
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../../redux/actions/productActions";

const ListProducts = ({ products, currPage, setCurrPage }) => {
  //   const dispatch = useDispatch();
  const addProduct = (product, productName) => {
    toastProduct(productName);
    dispatch(addToCart(product));
  };

  let range = 12
 
  
  return (
    <section className="px-10 pt-10 bg-white">
      {/* Filters for mobile */}

      <div className="relative z-10 grid grid-cols-2 gap-2 mb-5 lg:mb-14 lg:grid-cols-1">
        {/* TODO: add icons */}
        <button
          type="button"
          className="flex items-center w-full h-full py-2 pl-4 text-left text-white bg-primary lg:hidden "
          // onClick={() => setFilterMenu(!filterMenu)}
        >
          <span>
            <IoIosFunnel />
          </span>
          <span className="pl-1">Филтри</span>
        </button>
        <button
          type="button"
          className="flex items-center justify-between w-full h-full py-2 pl-4 text-left border border-gray lg:hidden"
          // onClick={() => setHidden(!isHidden)}
        >
          <div>Сортирай по:</div>
          <div className="mr-2 text-sm lg:text-3xl">
            <MdKeyboardArrowDown />
          </div>
        </button>

        {/* <div
                  className={` w-full absolute lg:flex top-full bg-white z-10 lg:relative h-48 lg:h-auto shadow-2xl lg:shadow-none ${
                    isHidden ? "hidden" : ""
                  } `}
                  ref={sortingMenu}
                >
                  <div>
                    <Sorting
                      title="Сортирай"
                      name="sortBy"
                      setFilters={setFilters}
                      data={sortByDictionary}
                    />
                  </div>
                </div> */}
      </div>
      <Pagination products={products} currPage={currPage} setCurrPage={setCurrPage}/>

      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6">
        {products.slice((currPage-1 )* range, currPage * range).map((data) => {
          return (
            <Product
              key={data._id}
              imageUrl={data.imageUrl}
              price={data.price}
              name={data.name}
              route={data.route}
            />
          );
        })}
      </section>
      

        <Pagination products={products} currPage={currPage} setCurrPage={setCurrPage}/>
        

    </section>
  );
};

export default ListProducts;
