"use client";
import React, { useState } from "react";

// Icons
import { HiX } from "react-icons/hi";
const SubMenu = ({ subMenuData, setMenuOpen }) => {


  return (
    <section className={`  pt-4 `}>
       <section className="flex justify-between px-6 mb-5 cursor-pointer" >
          <div className="text-2xl font-semibold flex-center">        {subMenuData.name}
</div>
          <div
            className="p-1 text-2xl border rounded-md border-slate-300 flex-center"
            onClick={() => setMenuOpen(null)}
          >
            <HiX />
          </div>
        </section>
     

    <ListMenu subMenuData={subMenuData}/>
    </section>
  );
};

export default SubMenu;

function ListMenu({subMenuData}){

  return (
    
      <ul className="pt-2 border-t border-slate-300">
        {subMenuData?.subMenu?.map((subMenu) => {
          return (
            <li
              key={subMenu._id}
              className={`px-6 mb-1 transition-colors cursor-pointer hover:text-white hover:bg-indigo-400`}
              //   onMouseEnter={() => setMenuOpen(subMenu._id)}
              //   onClick={() => setMenuOpen(category._id)}
            >
              {subMenu.name}
            </li>
          );
        })}
      </ul>
  )
}