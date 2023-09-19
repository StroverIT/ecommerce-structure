import React from 'react';

import SideMenu from "@/pages/Account/SideMenu"

type Layout = {
    children: React.ReactElement
}

const mainLink = "/account"
const layoutLink = "/index"
const sideMenuLinks = [
    {
        name: "Моят профил",
        link: `${mainLink}`
    },
    {
        name: "Настройки",
        link: `${mainLink}${layoutLink}/settings`
    },
    {
        name: "Моите адреси",
        link: `${mainLink}${layoutLink}/orders`
    },
    {
        name: "Моите поръчки",
        link: `${mainLink}${layoutLink}/orders`
    },
    {
        name: "Любими продукти",
        link: `${mainLink}${layoutLink}/orders`
    },
    {
        name: "Връщане на продукти",
        link: `${mainLink}${layoutLink}/orders`
    },
    {
        name: "Изход",
        link: `${mainLink}${layoutLink}/orders`
    }

]
const Layout = ({children}: Layout) => {
    return (
        <section className="h-screen pt-20 bg-white">
            <section className='grid grid-cols-[25%75%] container  '>
                <SideMenu links={sideMenuLinks}/>
                
                    <section>{children}</section>
           
            </section>
        </section>
    );
}

export default Layout;
