import React from "react";

// Icons
import { HiX } from "react-icons/hi";

// Contexts
import { useGlolContext } from "@/context/Global";

// Components
import ListMenu from "@/components/Layout/Category/ListMenu";

const Menu = ({categoryes, setMenuOpen, menuOpen}) => {
  const { setHamburgerMenu } = useGlolContext();

  return (
    <section className="pt-4 ">
      <section className="flex flex-col justify-between w-full">
        <section className="flex justify-between px-6 mb-5 cursor-pointer" >
          <div className="text-2xl font-semibold flex-center">Продукти</div>
          <div
            className="p-1 text-2xl border rounded-md border-slate-300 flex-center"
            onClick={() => setHamburgerMenu(false)}
          >
            <HiX />
          </div>
        </section>
        <ListMenu categoryes={categoryes} setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>

      </section>
    </section>
  );
};

export default Menu;
