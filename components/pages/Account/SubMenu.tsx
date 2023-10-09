"use client";
import Item from "./SubItem";

function SubMenu({
  submenu,
  subMenuState,
  link,
}: {
  submenu: any;
  subMenuState: any;
  link: any;
}) {

  return (
    subMenuState && (
      <section className="pb-10">
        <section className="relative">
          <div className="h-full w-[2px] bg-slate-300 absolute top-0 left-6"></div>
          <ul className="flex flex-col pt-4 pl-10 gap-y-5">
            {submenu.map((item: any, index: any) => {

              return (
                <Item
                  key={item.name}
                  link={link + item.link}
                  text={item.name}
                  isLast={submenu.length - 1 == index ? true : false}
                />
              );
            })}
          </ul>
          {/* <Item text="Sales" isLast={true}/> */}
        </section>
      </section>
    )
  );
}
export default SubMenu;
