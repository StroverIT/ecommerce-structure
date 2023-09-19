"use client"
import { useState, useRef, useEffect } from "react";



import SubMenu from "./SubMenu";

import MenuItem from "./MenuItem";
import { usePathname } from "next/navigation";


const Menu = (props: any) => {
  const pathname = usePathname()  
  const splitLink = props.link.split("/")
  const destructedLink = `/${splitLink[1]}/${splitLink[2]}/${splitLink[3]}`
  
  const condition = pathname.includes( destructedLink)

  const [subMenuState, subMenuSetState] = useState(condition ? true : false)
    
 
  return (
    <>

      <MenuItem submenu={props.submenu} 
      link={props.link} name={props.name}
       subMenuSetState={subMenuSetState}
       subMenuState={subMenuState}
       condition={condition}
       />

      {props.submenu && <SubMenu submenu={props.submenu} link={props.link} subMenuState={subMenuState}/>}
    </>

  );
};

export default Menu