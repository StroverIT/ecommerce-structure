"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";

// Icons
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import SearchIcon from "@/components/Layout/Icons/Search";

// Context
import { useGlolContext } from "@/components/Context/Global";
// Redux
import { connect } from "react-redux";

const RightPart = ({ cart }) => {
  const { setCartMenu } = useGlolContext();

  const [cartNum, setCartNum] = useState(0)
  useEffect(()=>{

  setCartNum(cart.cart.length)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[cart])
  return (
    <section>
      <ul className={` flex items-center justify-center `}>
        {/* Search icon */}
        <li className="max-lg:hidden">
          <SearchIcon />
        </li>

        {/* Favourite items */}

        <li>
          <Link
            href="/account#my-favourites"
            className="flex-col items-center justify-center hidden px-4 transition-colors lg:flex h-14 lg:h-20 hover:text-white hover:bg-gray-300"
          >
            <span className="text-3xl">
              <AiOutlineHeart className="icon" />
            </span>
          </Link>
        </li>

        {/* Account */}
        <li>
          <Link
            href="/account"
            className="flex flex-col items-center justify-center px-4 transition-colors h-14 lg:h-20 hover:text-white hover:bg-gray-300"
          >
            <span className="text-2xl md:text-3xl">
              <AiOutlineUser className="icon" />
            </span>
          </Link>
        </li>

        {/* Cart */}
        <li
          className="relative flex flex-col items-center justify-center px-4 transition-colors h-14 lg:h-20 hover:text-white hover:bg-gray-300"
          onClick={() => setCartMenu(true)}
        >
          <span className="relative text-2xl md:text-3xl">
            <BsCart3 className="icon" />
            <span className="absolute md:px-2 md:py-1 px-[0.50rem] md:text-sm h-7 flex items-center justify-center text-[0.65rem] font-bold text-white border-2 border-white rounded-full -right-3 -top-3 bg-cyan-600">
              {cartNum}
            </span>
          </span>
        </li>
      </ul>
    </section>
  );
};

export default connect(
  (state) => ({
    cart: state.allProducts,
  }),
  {}
)(RightPart);
