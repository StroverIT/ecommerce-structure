import React from 'react';

import Link from "next/link";

// Icons
import {
    AiOutlineUser,
    AiOutlineHeart,
    AiOutlineSearch,
    AiTwotonePhone,
  } from "react-icons/ai";
  import { HiLocationMarker } from "react-icons/hi";
  import { BsCart3 } from "react-icons/bs";
import SearchIcon from '@/components/Layout/Icons/Search';


const RightPart = () => {
    let cartNum = 1

    return (
        <section>
        <ul className={` flex items-center justify-center `}>

            {/* Search icon */}
           <div className='max-lg:hidden'><SearchIcon/></div>

            {/* Favourite items */}
            <Link href="/account#my-favourites">
              <li className="flex-col items-center justify-center hidden px-4 transition-colors lg:flex h-14 lg:h-20 hover:text-white hover:bg-gray-300">
                <div className="text-3xl">
                  <AiOutlineHeart className="icon" />
                </div>
              </li>
            </Link>

            {/* Account */}
            <Link href="/account">
              <li className="flex flex-col items-center justify-center px-4 transition-colors h-14 lg:h-20 hover:text-white hover:bg-gray-300">
                <div className="text-2xl md:text-3xl">
                  <AiOutlineUser className="icon" />
                </div>
              </li>
            </Link>

            {/* Cart */}
            <Link href="/cart">
              <li className="relative flex flex-col items-center justify-center px-4 transition-colors h-14 lg:h-20 hover:text-white hover:bg-gray-300">
                <div className="relative text-2xl md:text-3xl">
                  <BsCart3 className="icon" />
                  <div className="absolute md:px-2 md:py-1 px-[0.50rem] md:text-sm h-7 flex items-center justify-center text-[0.65rem] font-bold text-white border-2 border-white rounded-full -right-3 -top-3 bg-cyan-600">
                    {cartNum}
                  </div>
                </div>
              </li>
            </Link>
          </ul>
        </section>
    );
}

export default RightPart;
