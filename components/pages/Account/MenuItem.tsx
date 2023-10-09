import React from "react";
import Icons from "@/components/Icons/Icons";
import Link from "next/link";

export default function MenuItem({
  submenu,
  link,
  name,
  subMenuState,
  subMenuSetState,
  condition,
}: {
  submenu: any;
  link: any;
  name: any;
  subMenuState: any;
  subMenuSetState: any;
  condition: any;
}) {
  return (
    <Link href={`${submenu ? "" : link}`}>
      <li
        className={`font-semibold text-sm px-2 py-3 cursor-pointer transition-colors  duration-300    text-black
    ${
      condition || subMenuState
        ? "border-l-4 border-blue-500 bg-slate-300 pl-5 "
        : " transition-colors  hover:bg-white/40 pl-6"
    }`}
        onClick={() => submenu && subMenuSetState(!subMenuState)}
      >
        <section className="flex items-center justify-between">
          <section className="flex">
            <div className={`text-xl`}>
              <Icons iconType="home" />
            </div>
            <div className={`pl-2`}>{name}</div>
          </section>
          {submenu && (
            <section className={`${subMenuState ? "rotate-90" : ""}`}>
              <Icons iconType="rightArrow" />
            </section>
          )}
        </section>
      </li>
    </Link>
  );
}
