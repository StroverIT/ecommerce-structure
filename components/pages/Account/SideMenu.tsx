"use client"
import React, { useState } from "react";
import Menu from "./Menu";


type ListItem =  {
  name: string
  link: string
  key?: string
  icon: string
  imageData: string
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
          // this must be fixed !!!
          return <Menu key={data.link} name={data.name}  link={data.link} submenu={data.submenu} icon={data.icon} imageData={data.imageData}/>
        })
      }
        
     
      </ul>
    </section>
  );
};

export default SideMenu;





