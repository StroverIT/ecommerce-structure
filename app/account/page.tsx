import React from 'react'

import Container from '@/components/Containers/Account'

import { IContainer } from "@/interface/AccountContainer"

export default function Page() {
    return (
        <section className='min-h-screen pt-10 bg-white'>
            <section className='container'>
                <h1 className='text-2xl font-semibold'>Моят профил</h1>
                <div className='flex justify-between'>
                    <div>Здравей, Емил Златинов!</div>
                    <div>Група: Потребител</div>
                </div>
            </section>
            <section className='container grid grid-cols-3 gap-6 mt-5'>

                <PageContainer icon="settings" text="Настройки" link="/settings"/>
                <PageContainer icon="address" text="Моите адреси" />
                <PageContainer icon="order" text="Моите поръчки" />

                <PageContainer icon="heart" text="Любими поръчки" />
                <PageContainer icon="counterClockWise" text="Връщане на продукти" />
                <PageContainer icon="power" text="Изход" />




            </section>
        </section>
    )
}
const PageContainer = ({ text, icon, link, imageData, customLink }: IContainer) => {
    if(customLink) link = customLink

    link = `/account/index/${link}`
    
    if(customLink) link = customLink
    
    return <Container  imageData={imageData} text={text} icon={icon} link={link} />
}

