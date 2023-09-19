import React from "react";
// Icons
import { HiOutlineMail, HiOutlineUserCircle, HiX } from "react-icons/hi";
import { AiFillHeart, AiOutlineHome, AiOutlineLock, AiOutlinePlus, AiOutlinePlusCircle, AiOutlinePoweroff } from "react-icons/ai";
import { BiHomeAlt, BiPhoneCall, BiUser } from "react-icons/bi";
import { MdOutlineSubtitles, MdStickyNote2 } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { BsFillBoxFill, BsFillTrashFill } from "react-icons/bs";
import { IoIosArrowForward, IoMdSettings } from "react-icons/io";
import { FaAddressBook } from "react-icons/fa"
import { PiArrowCounterClockwiseBold } from "react-icons/pi"

import {InputIcons} from "@/components/Icons/IconInterface"

interface IIconDictionary {
 [key: string]: React.ReactNode,
}


const iconDictionary: IIconDictionary = {
  // Non filled
  home: <BiHomeAlt/>,
  password: <AiOutlineLock />,
  email: <HiOutlineMail />,
  fullName: <HiOutlineUserCircle />,
  phoneNumber: <BiPhoneCall />,
  title: <MdOutlineSubtitles />,
  giReturn: <GiReturnArrow />,
  trash: <BsFillTrashFill />,
  hix: <HiX />,
  rightArrow: <IoIosArrowForward />,
  counterClockWise: <PiArrowCounterClockwiseBold />,
  user: <BiUser/>,
  // Neutral
  power: <AiOutlinePoweroff />,
  // Filled
  settings: <IoMdSettings />,
  heart: <AiFillHeart />,
  address: <FaAddressBook />,
  order: <MdStickyNote2 />,
  box: <BsFillBoxFill/>,
  plusCircle: <AiOutlinePlusCircle/>,
 


};


export default function Icons({ iconType }: InputIcons) {
  
  return getValueOf(iconDictionary, iconType)
}

function getValueOf(object: any, prop: string) {
  return object[prop];
}