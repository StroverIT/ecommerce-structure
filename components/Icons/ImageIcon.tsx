import React from "react";
// Icons
import { HiOutlineMail, HiOutlineUserCircle, HiX } from "react-icons/hi";
import { AiFillHeart, AiOutlineLock, AiOutlinePoweroff } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineSubtitles, MdStickyNote2 } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { BsFillBoxFill, BsFillTrashFill } from "react-icons/bs";
import { IoIosArrowForward, IoMdSettings } from "react-icons/io";
import { FaAddressBook } from "react-icons/fa"
import { PiArrowCounterClockwiseBold } from "react-icons/pi"
import Image from "next/image";

interface IIconDictionary {
  password: React.ReactNode
  email: React.ReactNode
  fullName: React.ReactNode
  phoneNumber: React.ReactNode
  title: React.ReactNode
  giReturn: React.ReactNode
  trash: React.ReactNode
  hix: React.ReactNode
  settings: React.ReactNode
  rightArrow: React.ReactNode
  address: React.ReactNode
  order: React.ReactNode
  heart: React.ReactNode
  counterClockWise: React.ReactNode
  power: React.ReactNode
  box: React.ReactNode


}
interface IImageDisctonary {
  test: string



}
interface InputIcons {
  iconType: string
  imageType?: string,
  imageClassName?: string
}

const iconDictionary: IIconDictionary = {
  // Non filled
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
  // Neutral
  power: <AiOutlinePoweroff />,

  // Filled
  settings: <IoMdSettings />,
  heart: <AiFillHeart />,
  address: <FaAddressBook />,
  order: <MdStickyNote2 />,
  box: <BsFillBoxFill/>

};


export default function Icons({ iconType, imageType, imageClassName }: InputIcons) {
  
  return getValueOf(iconDictionary, iconType)
}

function getValueOf(object: any, prop: string) {
  return object[prop];
}