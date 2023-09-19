"use client"
import React, { useState } from "react";
import Menu from "./Menu";


type ListItem =  {
  name: string
  link: string
  key?: string
  submenu? :{
    name: string
    link: string
  }[]
}
type ILinks =  {
  links: Array<ListItem>
}
const SideMenu = ({links}: ILinks) => {
    
  return (
    <section className="items-start min-h-screen border-r-4 border-gray-300">
      <ul className="sticky top-20">
      {
        links.map((data)=>{
          
          return <Menu key={data.key} name={data.name}  link={data.link} submenu={data.submenu}/>
        })
      }
        
     
      </ul>
    </section>
  );
};

export default SideMenu;





