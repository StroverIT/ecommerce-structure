"use client"

import React from "react";
import { motion } from "framer-motion";


import themeColors from "./Themes";
import Icons from "@/components/Icons/Icons"

import {InputIcons} from "@/components/Icons/IconInterface"

type GlowBtn = {
  text: string
  onClick?:   () => void
  type?: "button" | "submit" | "reset" | ""
  className?: string
  theme?: "primary" | string
  color?: string
  isBg?: true | boolean
  isPos?: boolean
  icon?: [InputIcons]
  classNameIcon?: string
  iconPos?: string
  classNameText?: string
  isLoading?: false | boolean
  pending?: boolean

}




const GlowBtn = ({
  text,
  onClick,
   type = "button",
  className,
  theme = "primary",
  color,
  isBg = true,
  isPos,
  icon,
  classNameIcon,
  iconPos,
  classNameText,
  isLoading = false,
  pending
}: GlowBtn) => {
  const boxShadowStyle = `0 0 0 3px white, 0 0 0 6px ${
    color? color : getValueOf(themeColors, theme, 1)
  }`;
  return (
    <motion.button
      style={
        isBg
          ? {
              backgroundColor: color,
            }
          : {
              color,
            }
      }
      disabled={pending}
      type={!type ? "button" : type}
      onClick={onClick}
      className={`${className} ${
        isBg && getValueOf(themeColors, theme, 0)
      } text-white py-2 rounded-md  flex-center `}
      whileHover={{
        boxShadow: boxShadowStyle,
        transition: { type: "spring", stiffness: 300, duration: 2 },
      }}
    >
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <>
          {icon && iconPos == "left" && (
            
            <div className={classNameIcon}><Icons iconType={icon}/></div>
          )}
          <div className={`${classNameText} flex-center`}>{text}</div>
          {icon && iconPos == "right" && (
            <div className={classNameIcon}><Icons iconType={icon }/></div>
          )}
        </>
      )}
    </motion.button>
  );
};

export default GlowBtn;

function getValueOf(object: any, prop: string, index: number) {
    return object[prop][index] 
  
}