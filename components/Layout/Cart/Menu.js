import React from "react";

// Icons
import { HiX } from "react-icons/hi";

// Contexts
import { useGlolContext } from "@/context/Global";

// Components
import Item from "@/components/Layout/Cart/Item";

const Menu = ({data, }) => {
  const { setCartMenu }= useGlolContext();


  return (
    <section className="h-screen pt-4 overflow-y-auto">
      <section className="flex flex-col justify-between w-full">
        <section className="flex justify-between px-6 mb-5 cursor-pointer" >
          <div className="text-2xl font-semibold flex-center">Количка</div>
          <div
            className="p-1 text-2xl border rounded-md border-slate-300 flex-center"
            onClick={() => setCartMenu(false)}
          >
            <HiX />
          </div>
        </section>
        <section className="px-6">{data.map(item=>{
          return  <Item key={item._id} data={item} />
        })
       }</section>
      </section>
    </section>
  );
};

export default Menu;
