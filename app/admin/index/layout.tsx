import React from 'react';

import SideMenu from "@/pages/Account/SideMenu"

type Layout = {
    children: React.ReactElement
}

const mainLink = "/admin"
const layoutLink = "/index"
const imageDataList = {
    truck: {
        className: "h-10 w-10 mr-2",
        url: "truck.png",
        alt: "Няма още"
    },
    promotion: {
        className: "h-10 w-10 mr-2",
        url: "promotion.png",
        alt: "Няма още"
    }

}
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
        icon:"undefined",
        imageData:imageDataList.truck,
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
        icon: "box",
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
        link: `${mainLink}${layoutLink}/users`,
        icon: 'user',
    },
    {
        name: "Промоции",
        link: `${mainLink}${layoutLink}/promotions`,
        icon: "settings"
    },
  
   
    {
        name: "Менюта",
        link: `${mainLink}`,
        icon: "settings",

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
