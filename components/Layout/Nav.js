import React from "react";

// Components
import LeftPart from "@/components/Layout/NavComps/LeftPart";
import RightPart from "@/components/Layout/NavComps/RightPart";
import Category from "@/components/Layout/Category";
import Hamburger from "@/components/Layout/NavComps/Hamburger";

import SearchIcon from "@/components/Layout/Icons/Search";




const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white ">
      <section className="container flex items-center justify-between">
        <div className="flex lg:hidden">
        
          <Hamburger />
        <SearchIcon/>
        </div>
        <LeftPart />
        <RightPart />
        <Category />
      </section>
    </nav>
  );
};

export default Nav;
1;
