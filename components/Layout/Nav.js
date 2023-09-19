import React from "react";

// Components
import LeftPart from "@/components/Layout/NavComps/LeftPart";
import RightPart from "@/components/Layout/NavComps/RightPart";
import Hamburger from "@/components/Layout/NavComps/Hamburger";

import SearchIcon from "@/components/Layout/Icons/Search";

import Category from "@/components/Layout/Category";
import Cart from "@/components/Layout/Cart";




const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-lg">
      <section className="container flex items-center justify-between ">
        <div className="flex lg:hidden">
        
          <Hamburger />
        <SearchIcon/>
        </div>
        <LeftPart />
        <RightPart />
        <Category />
        <Cart/>
      </section>
    </nav>
  );
};

export default Nav;
1;
