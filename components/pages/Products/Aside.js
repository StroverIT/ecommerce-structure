"use client";
import React, { useEffect, useRef, useState } from "react";

// Icons
import { HiX } from "react-icons/hi";
import { IoIosFunnel } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

import Sorting from "@/components/ProductsComps/Sorting";
import AsideHeader from "@/components/ProductsComps/AsideHeader";
// Dictionaries
import sortByDictionary from "@/components/ProductsComps/allProductDicFilters";

// translation
import Checkbox from "@/components/Inputs/Checkbox";
// Redux
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../../redux/actions/productActions";
// Notifications
// import { toastProduct } from "../../../components/notificataions/Toast";
//Utils
import getBrands from "@/utils/getBrands";
import getKolichestvo from "@/utils/getKolichestvo";
const Aside = ({ sections, setProducts, setCurrPage }) => {
  const sortingMenu = useRef(null);
  const [isHidden, setHidden] = useState(true);

  const [filterMenu, setFilterMenu] = useState(false);

  //Product state
  // total filters
  const [filters, setFilters] = useState({
    series: [],
    price: {},
    liters: [],
    name: [],
  });

  useEffect(() => {
    const newProdArt = sections?.slice();

    let filteredArticles = [];

    if (filters.series.length > 0) {
      filters.series.forEach((serie) => {
        const result = newProdArt.filter((e) => e.brand == serie);

        filteredArticles.push(...result);
      });
    }

    if (filters.liters.length > 0 && filteredArticles.length > 0) {
      // Getting the object and filtering
      filteredArticles = filteredArticles.filter((serie) => {
        return filters.liters.some((e) => e == serie.weight);
      });
    } else {
      filters.liters.forEach((weight) => {
        const result = newProdArt.filter((e) => e.weight == weight);

        filteredArticles.push(...result);
      });
    }

    if (filteredArticles.length > 0) {
      setCurrPage(1);

      setProducts(filteredArticles);
    } else setProducts(newProdArt);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  useEffect(() => {
    if (filterMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [filterMenu]);
  const clearAllFiilters = () => {
    setFilters({ series: [], price: {}, liters: [], name: "" });
  };

  return (
    <aside
      className={` w-full h-full lg:block  max-lg:overflow-auto pb-10  lg:relative pt-4 px-5 sticky top-0 ${
        filterMenu ? "fixed top-0 z-20 left-0 bg-[#f5f5f5] pt-20" : "hidden"
      }`}
    >
      <div className="mt-10">
        <div className="flex items-center justify-between">
          <h3 className="mb-3 text-2xl text-bold">Филтри</h3>

          <div
            className={`text-lg cursor-pointer text-primary lg:hidden`}
            onClick={() => setFilterMenu(false)}
          >
            <HiX />
          </div>
        </div>
        {/* Button to clear all the filters */}
        <button
          className="flex items-center px-6 py-1 mt-2 font-bold border rounded-full cursor-pointer text-cyan-600 border-cyan-600"
          onClick={clearAllFiilters}
        >
          Изчисти
        </button>
        {/* <AsideHeader text="Цена" /> */}
        <div></div>
      </div>
      <AsideHeader text="Серии" />
      {getBrands(sections).map((obj, index) => {
        return (
          <Checkbox
            key={obj.name + obj.length}
            text={`${obj.name} (${obj.length})`}
            id={`series-${obj.name}`}
            // quantity={2}
            filters={filters}
            setFilters={setFilters}
          />
        );
      })}
      <AsideHeader text="Количество" />
      {getKolichestvo(sections).map((obj, index) => {
        return (
          <Checkbox
            key={`${obj.name}`}
            text={`${obj.name} (${obj.length})`}
            id={`liters-${obj.name}`}
            // quantity={2}
            filters={filters}
            setFilters={setFilters}
          />
        );
      })}
    </aside>
  );
};

export default Aside;
