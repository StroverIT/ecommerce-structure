"use client"
import React from 'react'
import GlowBtn from '@/components/Buttons/GlowBtn/GlowBtn'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

type TTypeItem = {
    text: string
    link: string
}
export default function Aside() {
    
    return (
        <nav className='flex mb-4 rounded-md justify-evenly bg-slater-200'>
                <ListItem text="Всички продукти"  link="/admin/index/products" />
                <ListItem text="Създай Продукт"  link="/admin/index/products/create" />



        </nav>
    )
}
// bg-gradient-to-r from-cyan-500 to-blue-500
function ListItem({ text, link }: TTypeItem) {
    const pathname = usePathname()

    
    return <Link href={link} className={`w-full py-2  uppercase font-semibold rounded-md m-3 text-center transition-colors 
    ${pathname == link ? "text-white bg-reder-100" : "text-gray-100 hover:bg-white/20 cursor-pointer "}`}>
        <div >{text}</div>
    </Link>

}
// function ListItem({ text, link }: TTypeItem) {
//     const pathname = usePathname()

//     const classNames = {
//         nonLink: {
//             classNameText: "text-black",
//             className: 'px-4 border-2 border-black',
//             isBg: false,
//         },
//         link: {
//             className: "px-6 text-sm font-semibold",
//             classNameText: "",
//             isBg: true
//         }
//     }
//     return <GlowBtn text={text} isBg={pathname == link ? classNames.link.isBg : classNames.nonLink.isBg} theme="black" className={pathname == link ? classNames.link.className : classNames.nonLink.className} classNameText={ pathname == link ? classNames.link.classNameText : classNames.nonLink.classNameText} />

// }