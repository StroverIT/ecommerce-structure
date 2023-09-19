"use client"

import Link from "next/link"
import { useState } from "react"

function Item({ text, isLast, activeState = false, link }: any) {
  
  
    const [isActive, setActive] = useState(activeState)
  
    const setOff = () => {
      if (activeState) return
      setActive(false)
    }
    return <Link href={link}>
      <li className={`relative cursor-pointer ${isLast && "-mb-3"}`} onMouseEnter={() => setActive(true)} onMouseLeave={() => setOff()}>
        <div className="bg-slate-300 h-[1px] absolute w-6 top-1/2 -translate-y-1/2 -left-4">
          {isActive ? <div className="relative">
            <div className="absolute top-1/2 -translate-y-1/2 w-[5px] h-[5px] rounded-full -right-1 bg-cyan-700"></div>
          </div> : ""}
        </div>
        <div className="ml-6">{text}</div>
      </li>
    </Link>
  
  }
export default Item