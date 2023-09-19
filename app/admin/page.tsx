import React from 'react';

import Buttom from "./Button"
import onClick from "./OnClick"
import ReduxText from "./ReduxText"

import Container from '@/components/Containers/Account';

import { IContainer } from "@/interface/AccountContainer"

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
const Page = () => {

    return (
        <div className='min-h-screen pt-10 bg-white'>
            {/* <Buttom onClick={onClick}/> */}
            {/* <ReduxText/> */}

            <section className="container grid grid-cols-3 gap-6 mt-5 ">
                <PageContainer text="Доставки" imageData={imageDataList.truck} link="/deliveries/main" />
                <PageContainer text="Продукти" icon="box" link="/products/main" />
                <PageContainer text="Потребители" icon="user" link="/users/main" />
                <PageContainer text="Промоции" icon="settings" link="/promotions" imageData={imageDataList.promotion}/>
                <PageContainer text="Потребителско Меню" icon="settings" customLink="/account" imageData={imageDataList.promotion}/>



            </section>

        </div>
    );
}

export default Page;

const PageContainer = ({ text, icon, link, imageData, customLink }: IContainer) => {
    link = `/admin/index/${link}`
    
    if(customLink) link = customLink
    
    return <Container  imageData={imageData} text={text} icon={icon} link={link} />
}
