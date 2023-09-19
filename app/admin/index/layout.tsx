import React from 'react';

import SideMenu from "@/pages/Account/SideMenu"

type Layout = {
    children: React.ReactElement
}

const mainLink = "/admin"
const layoutLink = "/index"
const sideMenuLinks = [
   
    // {
    //     name: "Статистики",
    //     link: `${mainLink}${layoutLink}/dashboard`,
    //     submenu: [
    //         {
    //             name: "Анализи",
    //             link: `/analytics`
    //         },
    //         {
    //             name: "Продажби",
    //             link: "/sales"
    //         }
    //     ]
    // },
    {
        name: "Доставки",
        link: `${mainLink}${layoutLink}/deliveries`,
        submenu: [
            {
                name: "Виж всички",
                link: "/main",
            },
            {
                name: "Взимане от място",
                link: "/office"
            },
            {
                name: "Speedy",
                link: "/speedy"
            },
            {
                name: "Econt",
                link: "/econt"
            }


        ]
       
    },
    {
        name: "Продутки",
        link: `${mainLink}${layoutLink}/products`,
        submenu: [
            {
                name: "Виж всички",
                link: "/main",
            },
            {
                name: "Създай",
                link: "/create"
            }
        ]
    },
    {
        name: "Потребители",
        link: `${mainLink}${layoutLink}/users`
    },
    {
        name: "Промоции",
        link: `${mainLink}${layoutLink}/promotions`
    },
  
   
    {
        name: "Менюта",
        link: `${mainLink}`,
        submenu: [
            {
                name: "Analytics",
                link: `${mainLink}${layoutLink}/dashboard/analytics`
            },
            {
                name: "Sales",
                link: `${mainLink}${layoutLink}/dashboard/sales`
            }
        ]
        
    },

]
const Layout = ({children}: Layout) => {
    
    return (
        <section className="h-screen bg-[#f5f6fa]">
            <section className='grid grid-cols-[12%88%]  space-x-10 '>
                <SideMenu links={sideMenuLinks}/>
                
                    <section className='mt-7'>{children}</section>
           
            </section>
        </section>
    );
}

export default Layout;
